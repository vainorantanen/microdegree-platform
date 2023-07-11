import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  createTheme,
  ThemeProvider,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
  styled,
  Typography
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import './navbar.css'
import { Link } from 'react-router-dom'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const StyledButton = styled(Button)({
  marginLeft: '1rem',
  padding: '0.5rem 1rem',
  borderRadius: '2rem',
  border: 0,
  color: 'white',
  fontWeight: 'bold',
  boxShadow: 'none',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)' }
})

const NavButtons = styled('div')({
  display: 'flex',
  '@media (max-width: 600px)': {
    display: 'none !important',
  },
})

const Navbar = ({ user, logout }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <NavButtons>
            <StyledButton color="inherit" component={Link} to="/">
              Courses
            </StyledButton>
            <StyledButton color="inherit" component={Link} to="/companies">
              Companies
            </StyledButton>
            <StyledButton color="inherit" component={Link} to="/addcourse">
              Add a course
            </StyledButton>
            <Typography className='logged-user'>
              {user && (
                <>{user.name} Logged in</>
              )}
            </Typography>
            {user ? (
              <StyledButton onClick={logout} >
                Logout
              </StyledButton>
            ) : <StyledButton color="inherit" component={Link} to="/login">
              Login
            </StyledButton>}
          </NavButtons>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItemButton component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Courses" />
          </ListItemButton>
          <ListItemButton component={Link} to="/companies" onClick={toggleDrawer}>
            <ListItemText primary="Companies" />
          </ListItemButton>
          <ListItemButton component={Link} to="/addcourse" onClick={toggleDrawer}>
            <ListItemText primary="Add a course" />
          </ListItemButton>
          {!user ? (
            <ListItemButton component={Link} to="/login" onClick={toggleDrawer}>
              <ListItemText primary="Login" />
            </ListItemButton>
          ) : <ListItemButton onClick={logout}>
            <ListItemText primary="Logout" />
          </ListItemButton>}
        </List>
      </Drawer>
    </ThemeProvider>
  )
}

export default Navbar