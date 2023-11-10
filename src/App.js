import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

function App() {
  const appRoutes = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/home', element: <Home /> }
  ])

  return <RouterProvider router={appRoutes} />;
}

export default App;
