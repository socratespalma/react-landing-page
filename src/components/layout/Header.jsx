import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <section>
        <Link to="/">SPG</Link>
        <h2>this is header</h2>
      </section>
    </header>
  );
}
