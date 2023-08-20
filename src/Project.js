import { Paper } from '@mui/material';
import React from 'react'

function Project() {
  return (
      <div>
          <h3 className='texalcen'>PROJECTS</h3>
           <Paper className='propap' elevation={3}>
          <h3 className='texalcen'>WEB CALCULATOR </h3><br></br>
          <img className='calimage' src='https://img.freepik.com/premium-vector/calculator-with-modern-flat-style_3322-74.jpg?w=2000'></img><br></br>
              <h5 className='marlef'>DESCRIPTION</h5><br></br>
              <p className='marlef'>
              The calculator Application is that performs arithmetic operations on numbers.<br></br>
                Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations.<br></br>
                  </p>
           <h4 className='marlef'>GITHUB LINK</h4>
          <a className='marlef' href='https://github.com/Alagu1311/zen-calculator-task.git'>GITHUB</a>
          <h4 className='marlef'>NETLIFY LINK</h4>
          <a className='marlef' href='https://regal-snickerdoodle-56db43.netlify.app/'>NETLIFY</a>
         </Paper>
         </div>
  )
}

export default Project;