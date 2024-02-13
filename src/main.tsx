import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signin from "./routes/Signin.tsx"
import Cars from "./routes/Cars.tsx"
import Contact from "./routes/Contact.tsx"
import About from "./routes/About.tsx"
import Signup from "./routes/Signup.tsx"

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <App />
  },
  { 
    path: "/signin", 
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/cars",
    element: <Cars />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
