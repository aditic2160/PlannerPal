// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList';
import Notes from './components/Notes/Notes';
import Blog from './components/Blog/Blog';
import Schedule from './components/Schedule';
import DateTime from './components/DateTime';
import './App.css';

const Page = ({ children, activeKey }) => {
  return (
    <div className="page" data-key={activeKey}>
      {children}
    </div>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="app-shell">
      <Navbar setActivePage={setActivePage} activePage={activePage} />

      <main className="main-area">
        <header className="main-header">
          <div>
            <h1 className="product-title">PlannerPal</h1>
            <p className="product-sub">Organize your life with a tool so helpful, it's like your best pal.</p>
          </div>
          <div className="header-right">
            <DateTime />
          </div>
        </header>

        <section className="content-area">
          <Page activeKey={activePage}>
            {activePage === 'home' && (
              <div className="home-grid">
                <div className="content-card large">
                  <h2>Welcome to PlannerPal</h2>
                  <p>
                    PlannerPal helps you manage tasks, notes, schedules, and peer help, all in one lightweight
                    app designed for students who want to stay organized!
                  </p>

                  <div className="feature-grid">
                    <div className="feature">
                      <h4>Notes</h4>
                      <p>Quickly capture class notes and edit them later.</p>
                    </div>
                    <div className="feature">
                      <h4>To-dos</h4>
                      <p>Track homework with due dates and estimated time.</p>
                    </div>
                    <div className="feature">
                      <h4>Forum</h4>
                      <p>Ask for help and comment on posts with classmates.</p>
                    </div>
                    <div className="feature">
                      <h4>Schedule</h4>
                      <p>Build a daily plan using time inputs and stay on track.</p>
                    </div>
                  </div>
                </div>

                <div className="content-card quick-card">
                  <h3>Quick Actions</h3>
                  <div className="quick-actions">
                    <button onClick={() => setActivePage('todos')}>Add a To-do</button>
                    <button onClick={() => setActivePage('notes')}>Write a Note</button>
                    <button onClick={() => setActivePage('blog')}>Open Forum</button>
                    <button onClick={() => setActivePage('schedule')}>Add Event</button>
                  </div>
                </div>
              </div>
            )}

            {activePage === 'todos' && <TodoList />}
            {activePage === 'notes' && <Notes />}
            {activePage === 'blog' && <Blog />}
            {activePage === 'schedule' && <Schedule />}
          </Page>
        </section>
      </main>
    </div>
  );
};

export default App;
