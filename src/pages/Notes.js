// import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.2:3001/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])
  
  const handleDelet = async(id) => {
    await fetch(`http://127.0.0.2:3001/notes/${id}`, {
      method: 'DELETE'
    })
    const newData = notes.filter(note => id !== note.id)

    setNotes(newData)
  }
  const breakpoint = {
    default: 3,
    1100: 2,
    700: 1
  }
  return (
    <Container>
      <Masonry
        breakpointCols={breakpoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {notes.map(note => (
          <div item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDelet={handleDelet} />
          </div>
        ))}
      </Masonry>
  
    </Container>
  )
}

export default Notes