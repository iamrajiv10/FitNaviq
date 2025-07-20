import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../Components/MainLayout/MainLayout';
import Careers from '../Pages/Career/Career';
import Home from '../Pages/Home/Home'
import Blog from '../Pages/Blog/Blog';
import Branding from '../Pages/Branding/Branding';
import UserPlatform from '../Pages/Features/UserPlatform/UserPlatform';
import TrainerPlatform from '../Pages/Features/TrainerPlatform/TrainerPlatform';
import GymModule from '../Pages/Features/GymModule/GymModule';
import AICore from '../Pages/Features/AiCore/AICore';
import Login from '../Pages/Login/Login';
import Dashboard from '../Pages/admin-dashboard/Dashboard/Dashboard';

const isLoggedIn = () => localStorage.getItem("isLoggedIn") === "true";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'blog', element: <Blog /> },
      { path: '/career', element: <Careers /> },
      { path: '/launch-details', element: <Branding /> },
      { path: '/features/user', element: <UserPlatform /> },
      { path: '/features/trainer', element: <TrainerPlatform /> },
      { path: '/features/gym', element: <GymModule /> },
      { path: '/features/ai-core', element: <AICore /> },
      { path: '/login', element: <Login /> },

      {
        path: "admin-dashboard/dashboard",
        element: isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />,
      },
    ],
  },
]);
