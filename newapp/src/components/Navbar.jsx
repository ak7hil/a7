import { AppBar, Button, Toolbar, Typography ,} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            GoooGle
          </Typography>
          <Link to='/Login'>
            <Button color="inherit" variant='contained'>Login</Button>
          </Link>
          <Link to='/Signup'>
            <Button color="inherit" variant='contained'>Signup</Button>
          </Link>
          <Link to='/State'>
            <Button color="inherit" variant='contained'>State</Button>
          </Link>
          <Link to='/Btn'>
            <Button color="inherit" variant='contained'>Press</Button>
          </Link>
          <Link to='/Api'>
            <Button color="inherit" variant='contained'>Api</Button>
          </Link>
          <Link to='/Pokemon'>
            <Button color='inherit' variant="contained">Pokemon</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
          
    </div>
  )
}

export default Navbar