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
import ProductDetail from './pages/ProductDetail/ProductDetail';
import UpdateProducts from './pages/UpdateProducts/UpdateProducts';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './route/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('https://cosmo-beauty.vercel.app/brands')
      },

      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=> fetch('https://cosmo-beauty.vercel.app/myCart')
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
      },
      {
        path:"/product/:id",
        element:<PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>
        
      },
      {
        path:"/update/:id",
        element: <PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute> ,
        loader: ({params}) => fetch(`https://cosmo-beauty.vercel.app/update/${params.id}`)
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
