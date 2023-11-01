import React from 'react';
import './Navbar.css';

const Navbar = ({ setActivePage, children }) => {
  return (
    <nav>
<ul>
  <li>
    <button onClick={() => setActivePage('home')}>Home</button>
  </li>
  <li>
    <button onClick={() => setActivePage('todos')}>To-do List</button>
  </li>
  <li>
    <button onClick={() => setActivePage('notes')}>Notes</button>
  </li>
  <li>
    <button onClick={() => setActivePage('blog')}>Forum</button>
  </li>
  <li>
    <button onClick={() => setActivePage('schedule')}>Schedule</button>
  </li>
</ul>

      {children}
    </nav>
  );
};

export default Navbar;
