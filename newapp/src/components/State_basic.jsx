import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const State_basic = () => {
    var [fname, setfname] = useState("aaa")
    var [val,setval]= useState()
    const handleinput = (e) => {
        console.log(e.target.value)
        setfname(e.target.value)
    }
    const Submitevent = () => {
        setval(fname)
    }
  return (
    <div>
          <Typography varient='h6'>welcome {val}</Typography>
          <br /><br />
          <TextField variant='outlined' label='enter your name' onChange={handleinput}/>
          <br /><br />
          <Button varient="contained" onClick={Submitevent }>
              SUBMIT
          </Button>
    </div>
  )
}

export default State_basic