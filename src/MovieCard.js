import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from 'react-stars'
import Card from 'react-bootstrap/Card';

function MovieCard({films}) {
 
  return (
    <div >
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={films.description} />
    <Card.Body>
      <Card.Title>{films.title}</Card.Title>
      <Card.Text>
        {films.poster}
      </Card.Text>
      <ReactStars
  count={5}
  size={30}
  color2={'#ffd700'} value={films.note}/>
    </Card.Body>
  </Card>
  </div>
  )
}

export default MovieCard