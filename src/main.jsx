import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRoute, RouterProvider, Route } from 'react-router-dom';

import './index.css'

// Obj de configuração
const router = createBrowserRoute([
// Elemento princ. que vai abrigar as páginas
{
  element: <App />,
  children: [
    {
      path: "/"
    },
    {
      path: "/new"
    },
  ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
