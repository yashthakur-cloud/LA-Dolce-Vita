import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Reservations from "./pages/Reservations";
import BookingConfirmed from "./pages/BookingConfirmed";
import Orders from "./pages/Orders";
import Menu from "./pages/Menu";
import Login from './pages/Login';
import Register from './pages/Register';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <Home />
      
      </div>
  },
  {
    path: "/menu",
    element: 
      <div>
        <Navbar />
        <Menu />
      </div>
    ,
  },
  {
    path: "/about",
    element: <div>
        <Navbar />
        <About />
        <Footer />
      </div>,
  },
  {
    path: "/reservations",
    element: <div>
        <Navbar />
        <Reservations />
        <Footer />
      </div>,
  },
  {
    path: "/booking-confirmed",
    element: <div>
        <Navbar />
        <BookingConfirmed />
        <Footer />
      </div>,
  },
  
  {
    path: "/login",
    element: <div>
        <Navbar />
        <Login />
        <Footer />
      </div>,
  },
  {
    path: "/register",
    element: <div>
        <Navbar />
        <Register />
        <Footer />
      </div>,
  },
  {
    path: "/orders",
    element: <div>
        <Navbar />
        <Orders />
        <Footer />
      </div>,
  },
  {
    path: "/orderDone",
    element: <div>
        <Navbar />
        <BookingConfirmed />
        <Footer />
      </div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
