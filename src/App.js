import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavBar from './Components/Navigation/Navbar';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import About from './pages/About';
import Error404 from './Components/Error/Error404';
import ProjectsPage from './pages/ProjectsPage';
import Footer from './Components/Footer/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <ScrollRestoration />
          <NavBar />
          <Outlet />
          <Footer />
        </>
      ),
      errorElement: (
        <>
          <ScrollRestoration />
          <NavBar />
          <Error404 />
          <Footer />
        </>
      ),
      children: [
        {
          path: '/',
          element: (
            <>
              <Homepage />
            </>
          ),
        },
        {
          path: '/resume',
          element: (
            <>
              <Resume />
            </>
          ),
        },
        {
          path: '/contact',
          element: (
            <>
              <Contact />
            </>
          ),
        },
        {
          path: '/about',
          element: (
            <>
              <About />
            </>
          ),
        },
        {
          path: '/projects',
          element: (
            <>
              <ProjectsPage />
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
