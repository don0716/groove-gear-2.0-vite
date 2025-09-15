import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import AppLayout from './layout/AppLayout.jsx'
import ProductListing from './pages/ProductListing.jsx'
import Cart from './pages/Cart.jsx'
import Wishlist from './pages/Wishlist.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import UserAccount from './pages/UserAccount.jsx'
import LandingPage from './pages/LandingPage.jsx'
import AuthLayout from './layout/AuthLayout.jsx'
import Login from './auth/Login.jsx'
import SignUp from './auth/SignUp.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <h2>Ooops! Page Not Found!</h2>,
    children: [
      {index: true, element: <LandingPage />},
      {path: "products", element: <ProductListing />},
      {path: "cart", element: <Cart />},
      {path: "wishlist", element: <Wishlist />},
      {path: "products/:productId", element: <ProductDetail />},
      {path: "useraccount", element: <UserAccount />}
    ]
  }, {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <h2>Auth Error@ Something went wrong.</h2>,
    children: [
      {path: "login", element: <Login />},
      {path: "signup", element: <SignUp /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
