import { Button, TextField } from '@mui/material'
import React from 'react'


const Signup = () => {
  return (
    <div>
      {/* <h1>Sign Up Page</h1> */}
      <TextField id="outlined-basic" label="first name" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="second name" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <br />
      <br />
      <Button variant="contained">Signup</Button>
    </div>
  )
}

export default Signup