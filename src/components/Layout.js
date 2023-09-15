import React from 'react'
import girma from '../assets/girma.jpg'
// import { makeStyles } from '@mui/styles';
import { styled } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useNavigate, useLocation } from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@material-ui/core'

// import Toolbar from 'material-ui/Toolbar';

// const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const drawerWidth =  240;
const  useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: 20,
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
         active: {
            background: '#f4f4f4'
        },
        title: {
            padding: 10,
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px - 30px)`,
            marginLeft: drawerWidth,
        },
        data: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: 10,
        }
    }
    
})

const Layout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate()
  const location = useLocation()
  const menuItems = [
    {
        text: 'My Notes',
        icon: <SubjectOutlinedIcon color='secondary' />,
        path: '/'
    },
    {
        text: 'Create Notes',
        icon: <AddCircleOutlinedIcon color='secondary' />,
        path: '/create'
    }
  ]
  return (
    <div className={classes.root}>
        {/* <CssBaseline /> */}
        <AppBar
            position="fixed" 
            // className={classes.appBar}
            elevation={0}
            color="primary"
        >
            <Toolbar className={classes.appBar} >
                <Typography className={classes.data}>
                My Notes Book
                </Typography>
                <Typography>
                Girma
                </Typography>
                <Avatar src={girma} className={classes.avatar} />
            </Toolbar>
            {/* <div /> */}
        </AppBar>
  
        <Drawer className={classes.drawer}
          variant='permanent'
          anchor='left'
          classes={{ paper: classes.drawerPaper }}
        >
            <div>
                <Typography variant='h5' className={classes.title}>
                    Notes Book
                </Typography>
            </div>
            <List>
            {menuItems.map(item => (
                <ListItem 
                    button
                    key={item.text}
                    onClick={() => navigate(item.path)}
                    className={location.pathname == item.path ? classes.active : null}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItem>
            ))}
        </List>
        </Drawer>
        
        <div className={classes.page}>
        <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
         {children}
        </Box>  
        </div>
    </div>
  )
}

export default Layout