import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './Home';
import { TaskContextProvider } from './TaskContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskContextProvider>
      <Index />
    </TaskContextProvider>
  </React.StrictMode>
);
