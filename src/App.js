import './App.css';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1
      style={{
        backgroundColor: 'black',
        color: 'white'
      }}
      >
        Welcome to React Router
      </h1>
      <div>
      <BrowserRouter>
      <Link to="/">Home</Link>{' '}
      <Link to="/about">About</Link>{' '}
      <Link to="/contact">Contact</Link>{' '}
      <Routes>
        <Route exact path="/"element={<Home />} />
        <Route path="/about"element={<About />} />
        <Route path="/contact"element={<Contact />} />
        <Route path="*"element={<Home />} />
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
