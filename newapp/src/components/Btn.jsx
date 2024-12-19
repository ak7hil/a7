import { Button, Typography } from '@mui/material'
import React,{useEffect, useState} from 'react'

const Btn = () => {
    var[a, seta]    = useState()
    const react = () => {
        seta("React")
    }
    
    const angular = () => {
        seta("Angular")
    }
    const view = () => {
        seta("view")
    }
    useEffect(() => { 
        view()
    })
  return (
      <div>
          <Typography variant='h6'>welcome  {a}</Typography><br /><br />
          <Button variant='contained' color='primary' onClick={react}>React</Button>
          <Button variant='contained' color='secondary' onClick={angular}>Angular</Button>
          <Button variant='contained' color='success' onClick={view}>view</Button>
    </div>
  )
}

export default Btn