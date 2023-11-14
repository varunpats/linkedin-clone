import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from "react-redux";
import Login from './components/Login';
import Home from './components/Home';
import { getUserAuth } from './actions/index';
import './App.css';

function App() {
  useEffect(() => {
    getUserAuth()
  }, [])
  const appRoutes = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/home', element: <Home /> }
  ])

  return <RouterProvider router={appRoutes} />;
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

