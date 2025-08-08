import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SiteLayout from "./layouts/SiteLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Programs from "./pages/Programs"
import Contact from "./pages/Contact"

const router = createBrowserRouter([
  { path: "/", element: <SiteLayout />, children: [
    { index: true, element: <Home /> },
    { path: "about", element: <About /> },
    { path: "programs", element: <Programs /> },
    { path: "contact", element: <Contact /> },
  ]},
])

export default function AppRoutes() { return <RouterProvider router={router} /> }
