import React from 'react';
import Paper from '@mui/material/Paper';
import Nav from './Nav';




function Techskill() {
  return (

  <div>
    
       <h1 className='cenal'>FULL STACKS</h1>
      <Paper className='inhei' elevation={3} >
     <div className='border'>
        <h2 className='cenal'>FRONT END</h2>
        
       
       
    
   <div className='flex'>
         
        
      
        <img className='size' src="https://img.freepik.com/free-icon/html-5_318-674234.jpg?size=626&ext=jpg&ga=GA1.2.1424885135.1677774415&semt=ais" alt='Html'></img><br></br>

    
      <img className='size' src='https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png' alt='css'></img><br></br>
     
      <img  className='size' src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png' alt='Javascript'></img><br></br>
      
        <img className='size' src='https://img.freepik.com/free-icon/physics_318-843101.jpg?size=626&ext=jpg&ga=GA1.1.1424885135.1677774415&semt=sph' alt='React-js'></img><br></br>
        </div>
        </div>
      </Paper>
       <div className='flex1'>
    <Paper className='inwid' elevation={3} >
       
         <h2 className='cenal'>BACK END</h2>
        
        <img  className='size1' src='https://pngimg.com/uploads/mysql/mysql_PNG19.png'></img>
      
        <img  className='size2' src='https://www.pngall.com/wp-content/uploads/13/Mongodb-Transparent.png'></img>
   
          <img className='size3' src='https://logowik.com/content/uploads/images/nodejs.jpg'></img>
          
          <img className='awssize' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png'></img>
   
        </Paper>
      </div>
      </div>
      
   
    
     
    
  )
}

export default Techskill;