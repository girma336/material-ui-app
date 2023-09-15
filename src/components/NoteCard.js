import React from 'react'
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
// import { DeleteOutlined } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import { pink, green, blue, yellow } from '@mui/material/colors';


const useStyles = makeStyles({
    avatar: {
    backgroundColor: (note) => {
      if (note.category == 'work') {
        return yellow[700]
      }
      if (note.category == 'money') {
        return green[500]
      }
      if (note.category == 'todos') {
        return pink[500]
      }
      return blue[500]
    },
  }
})

const NoteCard = ({ note, handleDelet }) => {
 const classes = useStyles(note)
  return (
    <div>
        <Card elevation={1} >
            <CardHeader
              avatar={
                <Avatar className={classes.avatar}>
                  {note.category[0].toUpperCase()}
                </Avatar>}
              action={
                <IconButton onClick={() => handleDelet(note.id)}>
                    {/* <MoreVertIcon /> */}
                    <DeleteIcon />
                </IconButton>
              }
              title={note.title}
              subheader={note.category}
            />
            <CardContent>
                <Typography variant='body2' color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default NoteCard