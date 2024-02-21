import { AppBar,  Toolbar ,Typography,Button} from '@mui/material'
import React from 'react'
import IconButton from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div sx={{flexGrow:1}}>
        <AppBar position='static'>
            <Toolbar>
                
            <Typography sx={{flexGrow:1}} align='left 'variant='h6'> Add Student</Typography>
            <Button><Link to='login' style={{color:'white'}}>Login</Link></Button>
            </Toolbar>
            </AppBar>
            
    </div>
  )
}

export default Navbar