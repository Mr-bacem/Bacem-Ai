import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/homepage/Homepage'
import DashboardPage from './routes/dashboardPage/DashbordPage'
import ChatPage from './routes/chatPage/ChatPage'
import DashboardLAyout from './layouts/dasboardLayout/DasboardLayout'
import RootLayout from './layouts/rootLayout/RootLayout'
import SignInPage from './routes/signinPage/SignInPage'
import SignUpPage from './routes/signUpPage/SignUpPage'



 
const router = createBrowserRouter( [
  {
  
   element: <RootLayout/>,
   children: [
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/sign-in/*",
      element: <SignInPage/>,
    },
    {
      path: "/sign-up/*",
      element: <SignUpPage/>,
    },
    {
      element: <DashboardLAyout/>,
      children: [
        {
          path: "/dashboard",
          element: <DashboardPage/>,
        },
        {
          path:"dashboard/chats/:id",
          element: <ChatPage/>,
        },
      ],
    },
   ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
