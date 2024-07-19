// import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Navbar from './components/navbar';
import Footer from './components/footer';

// Navigation
export const pages = [
  {
    label: 'home',
    to: '/',
    element: <Home />
  },
  {
    label: 'about',
    to: '/about',
    element: <About />
  },
  {
    label: 'projects',
    to: '/projects',
    element: <Projects />
  },
  {
    label: 'contact',
    to: '/contact',
    element: <Contact />
  }
]

function App() {
  return (
    <div>
      <Navbar/>

      <div className='w-full min-h-screen pt-20'>
        <Routes>
          {
            pages.map((item) => (
              <Route index key={item.label} path={item.to} element={item.element} />
            ))
          }
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App;