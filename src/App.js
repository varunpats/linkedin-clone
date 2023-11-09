import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

function App() {
  const appRoutes = createBrowserRouter([
    { path: '/', element: <Login /> }
  ])
  
  return <RouterProvider router={appRoutes} />;
}

export default App;
