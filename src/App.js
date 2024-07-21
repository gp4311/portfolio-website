// import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Navbar from './components/navbar';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';

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
      <Navbar />
      
      <ScrollToTop>
        <div className='w-full min-h-screen bg-background-color pt-20'>

          <Routes>
            {
              pages.map((item) => (
                <Route index key={item.label} path={item.to} element={item.element} />
              ))
            }
          </Routes>

        </div>
      </ScrollToTop>

      <Footer />
    </div>
  )
}

export default App;