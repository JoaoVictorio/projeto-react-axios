import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRoute, RouterProvider, Route } from 'react-router-dom';

//  páginas
import Home from "./routes/Home.jsx";
import NewPost from './routes/NewPost.jsx';

import './index.css'

// Obj de configuração
const router = createBrowserRoute([
// Elemento princ. que vai abrigar as páginas
{
  element: <App />,
  children: [
    {
      path: "/"
      element: <Home />,
    },
    {
      path: "/new"
      element: <NewPost />,
    },
  ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
