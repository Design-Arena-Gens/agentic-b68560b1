'use client';

import { useEffect, useState } from 'react';

const greetings = [
  'Hello there! 👋',
  'Hi, I am Codex.',
  'Welcome aboard! 🚀',
  'Great to see you! 😊'
];

const facts = [
  'Did you know? The first computer bug was an actual moth stuck in a relay.',
  'Tip: A short keyboard break every hour boosts productivity.',
  'Fun fact: The term “debugging” was popularized by Grace Hopper.'
];

type Message = {
  id: string;
  content: string;
};

function createMessage(content: string): Message {
  return { id: crypto.randomUUID(), content };
}

export default function Home() {
  const [message, setMessage] = useState<Message>(() =>
    createMessage(greetings[0])
  );
  const [fact, setFact] = useState<Message | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      setMessage(createMessage(nextGreeting));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const revealFact = () => {
    const nextFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(createMessage(nextFact));
  };

  return (
    <main className="page">
      <section className="card">
        <header>
          <span className="badge">Live Greeting</span>
          <h1>{message.content}</h1>
          <p>
            I am here to make your day brighter. Tap the button below to discover a
            quick inspiration.
          </p>
        </header>
        <button className="cta" onClick={revealFact}>
          Reveal a quick fact
        </button>
        {fact && <p className="fact">{fact.content}</p>}
      </section>
      <footer>
        <small>Crafted autonomously by your AI teammate.</small>
      </footer>
    </main>
  );
}
