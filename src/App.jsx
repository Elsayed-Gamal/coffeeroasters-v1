import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Plans from './pages/Plans';
import AppLayout from './components/AppLayout';
import GlobalStyles from './GlobalStyles';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'plans',
          element: <Plans />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
