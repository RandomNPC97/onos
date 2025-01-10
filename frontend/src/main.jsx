import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { AuthProvider } from './AuthContext.jsx';
import ErrorPage from './components/404error.jsx';
import Home from './views/Home/Index.jsx';
import ProductDetail from './views/Home/ProductDetail.jsx';
import Cart from './views/Home/Cart.jsx';
import CreditCheckout from './views/Home/Credit.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Help from './views/Home/Help.jsx';



const router = createBrowserRouter([
  {
    path: "*", 
    element: <ErrorPage/>
  },
  {
    path: "/", 
    element: <Home/>
  },
  {
    path: "/help", 
    element: <Help/>
  },
  {
    path: "/products/:name", 
    element: <ProductDetail/>
  },
  {
    path: "/cart", 
    element: <Cart/>
  },
  {
    path: "/checkout", 
    element: <CreditCheckout/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> 
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,

);
