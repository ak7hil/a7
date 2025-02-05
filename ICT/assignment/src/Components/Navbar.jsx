import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STORE
          </Typography>
          <Link to="/product" style={{textDecoration:'none', color:'inherit'}}>
              <Button color="inherit">VIEW PRODUCT</Button>
          </Link>
          <Link to="/item" style={{textDecoration:'none', color:'inherit'}}>
            <Button color="inherit">ADD PRODUCT</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
