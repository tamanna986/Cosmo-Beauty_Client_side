import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root/Root.jsx';
import Home from './pages/Home/Home.jsx';
import AddProduct from './pages/AddProduct/AddProduct.jsx';
import MyCart from './pages/MyCart/MyCart.jsx';
import Register from './pages/Register/Register';
import LogIn from './pages/LogIn/LogIn';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AddBrand from './pages/AddBrand/AddBrand';
import ProductsByBrand from './pages/ProductsByBrand/ProductsByBrand';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/brands')
      },

      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/Addbrands",
        element:<AddBrand></AddBrand>
      },
      {
        path:"/products/:brandName",
        element: <ProductsByBrand></ProductsByBrand>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
