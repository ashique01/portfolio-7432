import React from 'react';

const Section = ({ id, title, bg = 'bg-dark-secondary' }) => (
  <section id={id} className={`min-h-screen flex items-center justify-center p-8 ${bg}`}>
    <h2 className="text-4xl font-bold text-brand-primary uppercase tracking-wider" style={{ textShadow: '0 0 10px #00f5d4' }}>{title}</h2>
  </section>
);

export default Section;
