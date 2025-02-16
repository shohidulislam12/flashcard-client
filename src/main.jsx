import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './comonent/Home';
import FlashCards from './comonent/FlashCards';
import AuthProvider from './comonent/auth/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
      path: "/",
      element:<FlashCards></FlashCards>
    },
  ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </StrictMode>,
)
