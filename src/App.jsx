import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import Management from './pages/Management.jsx';
import Community from './pages/Community.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about">
            
            <Route path="management" element={<Management />} />
            <Route path="community" element={<Community />} />
          </Route>
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
