import 'uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Task from './Task.jsx';

// App component - represents the whole app
const App = () => {
  const tasks = [
    { _id: 1, text: 'This is task 1' },
    { _id: 2, text: 'This is task 2' },
    { _id: 3, text: 'This is task 3' },
  ];

  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
      </header>

      <ul>
        <Router>
          <div>
            {
              tasks.map(t => (
                <Link key={t._id} to={t.text}>
                  <Task
                    onClick={() => {
                      UIkit.modal.prompt('Name:', 'Your name').then(input => UIkit.modal.confirm(`You did it with ${input}`));
                    }}
                    task={t}
                  />

                </Link>
              ))
            }
          </div>
        </Router>
      </ul>
    </div>
  );
};

export default App;
