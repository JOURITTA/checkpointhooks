import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Navsb({setSearch}) {
const [show, setShow] = useState(false);
  const [title,setTitle]=useState("")
const [poster,setPoster]=useState("")
const [description,setDescription]=useState("")
const [note,setNote]=useState(0)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleSubmit=()=>{
    var film={title:title,poster:description,description:poster,note:note}
localStorage.setItem("nvfilm",JSON.stringify(film))
handleClose()
}
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
          <Form className="d-flex">
            <Form.Control
onChange={(e)=>setSearch(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <>
      <Button variant="primary" onClick={handleShow}>
        Ajouter un film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titre de film</Form.Label>
              <Form.Control
              onChange={(e)=>setTitle(e.target.value)}
                type="email"
                placeholder="ajouter la titre de film "
                autoFocus
              />
              <Form.Label>Description </Form.Label>
              <Form.Control
              onChange={(e)=>setPoster(e.target.value)}
                type="email"
                placeholder="ajouter un description au film "
                autoFocus
              />
              <Form.Label>Poster </Form.Label>
              <Form.Control
              onChange={(e)=>setDescription(e.target.value)}
                type="email"
                placeholder="ajouter un poster au film "
                autoFocus
              />
              <Form.Label>Note </Form.Label>
              <Form.Control
              onChange={(e)=>setNote(e.target.value)}
                type="email"
                placeholder="ajouter un note au film "
                autoFocus
              />
            </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} >
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navsb