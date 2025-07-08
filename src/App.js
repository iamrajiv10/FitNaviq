// import logo from './logo.svg';
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { router } from './routes/AppRoutes';

const App = () => (
  <Suspense fallback={<p>Loading…</p>}>
    <RouterProvider router={router} />
  </Suspense>
);

export default App;

// function App() {
//   return (
//     <div className="App">
     
//      <ToastContainer></ToastContainer>
//       <FitNaviqComingSoon></FitNaviqComingSoon>
 
//     </div>
//   );
// }

// export default App;
