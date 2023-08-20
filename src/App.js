import './App.css';
import { Route,Routes } from 'react-router-dom';
import Techskill from './Techskill';
import Maincomp from './Maincomp';
import Nav from './Nav';
import Project from './Project';
import Qualification from './Qualification';
import Contact from './Contact';



function App() {
  return (
    <div className="App">
       <Nav/>
      <Routes>
        <Route exact path='/' element={<Maincomp />} />
        <Route path='/Techskill' element={<Techskill />} />
        <Route path='/Maincomp' element={<Maincomp />} />
        <Route path='/Qualification' element={<Qualification/>} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>  
     
     </div>
  );
}

export default App;
