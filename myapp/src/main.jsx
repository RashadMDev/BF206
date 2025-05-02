import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import { Contact } from './pages/Contact'
import { Projects } from './pages/Projects'
import Requests from './pages/Requests'
import Timer from './pages/Timer'
import About from './pages/About'
import App from './App'
import NotFound from './pages/NotFound'
import Detail from './pages/Detail'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
      { path: "/requests", element: <Requests /> },
      { path: "/timer", element: <Timer /> },
      { path: "/detail/:id", element: <Detail /> },
      { path: "*", element: <NotFound /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
