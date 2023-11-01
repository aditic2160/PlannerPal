import React, { useState } from 'react';
import Navbar from './Navbar';
import TodoList from './TodoList';
import Notes from './Notes';
import Blog from './Blog';
import Schedule from './Schedule';
import './App.css';


const App = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="app-container">
      <Navbar setActivePage={setActivePage}>
      </Navbar>
      <div className="content-container">
        {activePage === 'home' && (
          <div className="main-content">
            <h2>Welcome to Planner Pal!</h2>
            <p>
              PlannerPal is your new go-to for all of your school needs! Use our several features to help you stay on top of your school work without having to add extra weight to your backpack.
            </p>
            <h3>How to Use PlannerPal:</h3>
            <p>
              - <strong>Notes Page:</strong> Take and manage notes for your classes and assignments. Edit and delete notes as needed.
            </p>
            <p>
              - <strong>To-do List Page:</strong> Keep track of your tasks and assignments. Mark them as completed and set due dates.
            </p>
            <p>
              - <strong>Forum Page:</strong> Share your homework troubles with fellow students. Create, read, and comment on forum posts.
            </p>
            <p>
              - <strong>Schedule Page:</strong> Stay on top of your activities for the day. Add events, descriptions, aand timings for each of your activities.
            </p>
            <h3>Why PlannerPal was Made:</h3>
            <p>
              PlannerPal was created with the belief that organization and collaboration are key to academic success. We understand the challenges students face in managing their studies, and we aim to provide a solution that simplifies the process.
            </p>
            <p>
              Our goal is to make your academic life easier and more productive by offering a centralized platform where you can manage your notes, to-dos, and share experiences with your peers. We believe that when students collaborate and support each other, it leads to better learning outcomes and less stress.
            </p>
          </div>
        )}
        {activePage === 'todos' && (
          <div className="content-box">
            <TodoList />
          </div>
        )}
        {activePage === 'notes' && (
          <div className="content-box">
            <Notes />
          </div>
        )}
        {activePage === 'blog' && (
          <div className="content-box">
            <Blog />
          </div>
        )}
        {activePage === 'schedule' && (
          <div className="content-box">
            <Schedule />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
