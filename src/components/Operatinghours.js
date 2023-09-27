import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Operatinghours({timedata}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
         <Button className='w-100 fs-4' variant="warning" onClick={handleShow}>
 Operatinghours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>operating_hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>   <ListGroup>
      <ListGroup.Item>monday :{timedata.Monday}</ListGroup.Item>
      <ListGroup.Item>tuesday :{timedata.Tuesday}</ListGroup.Item>
      <ListGroup.Item>wednesday :{timedata.Wednesday} </ListGroup.Item>
      <ListGroup.Item>thursday :{timedata.Thursday} </ListGroup.Item>
      <ListGroup.Item>friday:{timedata.Friday} </ListGroup.Item>
      <ListGroup.Item>saturday:{timedata.Saturday} </ListGroup.Item>
      <ListGroup.Item>sunday:{timedata.Sunday} </ListGroup.Item>
    </ListGroup></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Operatinghours
