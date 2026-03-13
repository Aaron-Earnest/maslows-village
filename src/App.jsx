import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import Management from './pages/Management.jsx';
import Community from './pages/Community.jsx';
import Contact from './pages/Contact.jsx';
import News from './pages/News.jsx'
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop /> {/** Reset scroll postion on every link click */}
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about">
            
            <Route path="management" element={<Management />} />
            <Route path="community" element={<Community />} />
          </Route>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/news" element={<News/>} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
