import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Qualification() {
  return (
    <div>
      <h3 className='texalcen'>QUALIFICATIONS</h3>
          <TableContainer className='tablmar' component={Paper}>
              <Table sx={{ minWidTableHead: 700 }} aria-label="spanning table">
              <TableHead>
                  <TableCell>DEGREE/CLASS</TableCell>
                  <TableCell>BOARD/UNIVERSITY</TableCell>
                  <TableCell>INSTITUTION</TableCell>
                  <TableCell>YEAR OF PASSING</TableCell>
                    <TableCell>PERCENTAGE/CGPA</TableCell>
                  
                  </TableHead>
                  <TableBody>
              <TableRow>
                  <TableCell>B.E MECHANICAL ENGINEERING</TableCell>
                  <TableCell>ANNA UNIVERSITY</TableCell>
                          <TableCell>SBM COLLEGE OF ENGINEERING & TECHNOLOGY DINDUGAL</TableCell>
                          <TableCell>2022</TableCell>
                          <TableCell>8.5</TableCell>
              </TableRow>
              <TableRow>
                  <TableCell>HSC</TableCell>
                  <TableCell>MATRICULATION</TableCell>
                  <TableCell>BLESSING MATRICULATION HIGHER SECONDARY SCHOOL</TableCell>
                <TableCell>2018</TableCell>
                          <TableCell>70.5</TableCell>
                  
              </TableRow>
              <TableRow>
                          <TableCell>SSLC</TableCell>
                          <TableCell>STATE BOARD</TableCell>
                  <TableCell>P.K.N HIGHER SECONDARY SCHOOL</TableCell>
                          <TableCell>2016</TableCell>
                          <TableCell>70.5</TableCell>
              </TableRow>
             
                      </TableBody>

                  
                  </Table>
     
          </TableContainer>
    </div>
  )
}

export default Qualification;