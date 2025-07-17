import React from 'react';

const Section = ({ id, title, bg = 'bg-white dark:bg-gray-900' }) => (
  <section id={id} className={`min-h-screen flex items-center justify-center p-8 ${bg}`}>
    <h2 className="text-4xl font-bold text-gray-800 dark:text-yellow-300">{title}</h2>
  </section>
);

export default Section;
