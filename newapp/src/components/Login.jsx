import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      {/* <h1>Welcome Home</h1> */}
      <TextField id="outlined-basic" label="username" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <br />
      <br />
      <Button variant="contained">Login</Button>
    </div>
  )
}

export default Login