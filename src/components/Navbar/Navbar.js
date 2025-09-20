// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ setActivePage, activePage }) => {
  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'todos', label: 'To-do' },
    { id: 'notes', label: 'Notes' },
    { id: 'blog', label: 'Forum' },
    { id: 'schedule', label: 'Schedule' },
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">PP</div>
        <div className="brand-text">
          <strong>PlannerPal</strong>
          <small>Student Planner</small>
        </div>
      </div>

      <nav className="nav">
        <ul>
          {pages.map((p) => (
            <li key={p.id}>
              <button
                onClick={() => setActivePage(p.id)}
                className={activePage === p.id ? 'nav-btn active' : 'nav-btn'}
              >
                {p.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <small></small>
      </div>
    </aside>
  );
};

export default Navbar;
