import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Components/MainLayout/MainLayout';
// import Career from '../Pages/Career/Career';
// import Features from '../Pages/Features/Features';


// Lazy‑load route components
const Home = lazy(() => import('../Pages/Home/Home'));
const Features = lazy(() => import('../Pages/Features/Features'));
const Career = lazy(() => import('../Pages/Career/Career'));
// const ContactUs = lazy(() => import('../Pages/ContactUs/ContactUs'));

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/features', element: <Features /> },
      { path: '/career', element: <Career /> },
    //   { path: '/contact', element: <ContactUs /> },
    ],
  },
]);
