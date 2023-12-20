import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './global/components/Navigation/Navigation';
import About from './pages/About/About';
import Add from './pages/Add/Add';
import Blog from './pages/Blog/Blog';
import Discover from './pages/Discover/Discover';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {

  return (
    <BrowserRouter>
      <div className="gradient-background"></div>
      <header>
        <Navigation />
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/discover" element={<Discover />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
