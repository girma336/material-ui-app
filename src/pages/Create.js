import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => {
   return {
    field: {
      margin: 20,
      margin: 20,
      display: 'block',
     }
   }
});

const Create = () => {
    const classes = useStyles()

    const [title, setTitle] = useState('');
    const [details, setDetail] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailError, setDetailError] = useState(false);
    const [category, setCatagory] = useState('todos');
    const history = useNavigate();
 

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailError(false)

    if(title == '') {
        setTitleError(true)
    }
    if(details == '') {
        setDetailError(true)
    }

    if(title && details){
        fetch('http://127.0.0.2:3001/notes', {
          method: 'POST',
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({ title, details, category })
        }).then(() => history('/'))
    }
  }
  return (
    <Container>
         <Typography 
            variant='h6'
            component='h2'
            gutterBottom
            color='textSecondary'   
        >
           Create a New Note
        </Typography>
        {/* <br /> */}
        <form onValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField 
              className={classes.filed}
              onChange={(e) => setTitle(e.target.value)}
              label="Note title"
              variant='outlined'
              color='secondary'
            //   value={title}
              fullWidth
            //   required
              error={titleError}
            />
        <br />
        <br />
            

             <TextField
              onChange={(e) => setDetail(e.target.value)}
              label="Details"
              variant='outlined'
              color='secondary'
            //   value={detail}
              multiline
              rows={4}
              fullWidth
            //   required
              error={detailError}
              className={classes.field}
            />
        <br />
        <br />
        <FormControl>
          <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
            <RadioGroup value={category} onChange={(e) => setCatagory(e.target.value)}>
              <FormControlLabel value='money' control={<Radio />} label='Money' />
              <FormControlLabel value='todos' control={<Radio />} label='Todos' />
              <FormControlLabel value='reminders' control={<Radio />} label='Reminder' />
              <FormControlLabel value='work' control={<Radio />} label='Work' />
            </RadioGroup>
        </FormControl>
<br />
        <br />
            <Button
              type='submit'
              color='primary'
              variant='contained'
              endIcon={<KeyboardArrowRightIcon />}
            >
            Submit
            </Button>
        </form>
        
        
    </Container>
  )
}

export default Create