import Navbar from "./component/Navbar/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Footer from "./component/Footer/Footer";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorScreen from "./component/ErrorScreen/ErrorScreen";
import Layout from "./component/Layout/Layout";
import { useEffect } from "react";
import Home from "./component/Home/Home";

const router = createBrowserRouter([
  {
    path: '/React-1', element: <Layout />, children: [
      { index:true, element: <Home /> },
      { path:'home', element: <Home /> },
      { path:"about", element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <ErrorScreen /> },
    ]
  }
  
  
  
])

export default function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
