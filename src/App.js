import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import './App.css';
import React from 'react'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Delet_new_Contacts from './Components/Delet_new_Contacts';
import Create_Contact from './Components/Create_Contact';
import Delet_new_Blogs from './Component1/Delet_new_Blogs';
import Create_Blog from './Component1/Create_Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="Contact">Contact</Link>
          <Link to="Blog">Blog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />}>
            <Route path="Delet_new_Contacts" element={<Delet_new_Contacts />} />
            <Route path="Create_Contact" element={<Create_Contact/>}/>
          </Route>
          <Route path="/Blog" element={<Blog />}>
            <Route path="Delet_new_Blogs" element={<Delet_new_Blogs />} />
            <Route path="Create_Blog" element={<Create_Blog/>}/>
          </Route>
        </Routes>
     </Router>
    </div>
  );
  
}
  
export default App;
