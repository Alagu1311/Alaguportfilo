import { Button, OutlinedInput, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

function Contact() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [comm,setcomm]=useState("")
  const handlesumbit = () => {
    const obj = {
      name,
      email,
      comm
    }
    if (name>3) {
      console.log("Name should be More then 3 chac")

    } else {
      console.log("valid Name")
    }
    console.log(obj)


    
  }
  
  return (
    <div>
      <h3 className='texalcen'>CONTACT</h3>
      <Paper className='propap' elevation={3}>
      <OutlinedInput className='texpad'  type='text' placeholder='Enter the Name' value={name} onChange={(e) => setname(e.target.value)}></OutlinedInput><br></br>
        <OutlinedInput className='textpad1' type='Email' placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} ></OutlinedInput><br></br>
        <h3>COMMENTS</h3>
        <textarea className='texmar' value={comm} onChange={(e) => setcomm(e.target.value)}>COMMENTS</textarea><br></br>
        <div className='btnmar'>
          <Button  variant="contained" onClick={handlesumbit}>SUMBIT</Button>
          </div>
      </Paper>
        
    </div>
  )
}

export default Contact