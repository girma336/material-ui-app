import React from 'react';
import './index.css'
import { createRoot } from 'react-dom/client';
import App from './App';


const el = document.getElementById('root');
const root = createRoot(el)

root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
)