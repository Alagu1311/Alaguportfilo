import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate("");
  
  return (
    <div className='btnflx'>

      <div className='porlef'>
        PORTFILO
          </div>

     
          <Button variant="contained" onClick={()=>navigate("/Maincomp")}>HOME</Button>
          <Button variant="contained" onClick={()=>("/Qualification")}>QUALIFICATIONS</Button>
          <Button variant="contained" onClick={()=>navigate("/Techskill")}>TECH SKILLS</Button>
          <Button variant="contained" onClick={()=>navigate("/Project")}>PROJECTS</Button>
          <Button variant="contained" onClick={()=>navigate("/Contact")}>CONTACT INFO</Button>
    
 
      
      
    </div>
  )
}

export default Nav;