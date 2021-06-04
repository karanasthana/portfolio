import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './sass.scss';
import { Modal } from 'react-bootstrap';
import { Button } from '../StyledComponents/Button';

export default function ProjectCard(props) {
    const [showDialog, setShowDialog] = useState(false);

    const handleClose = () => setShowDialog(false);
    const handleShow = () => setShowDialog(true);

    return (
        <>
            <Card className="cardContainer" onClick={() => handleShow()}>
                <div className="cardOuterDiv">
                    <Card.Img variant="top" src={`${props.image}`} className="cardImg" />
                    <Card.Body className="cardBody">
                        <Card.Title className="cardTitle">{`${props.name}`}</Card.Title>
                        <Card.Text>{props.description}</Card.Text>
                    </Card.Body>
                </div>
            </Card>
            <Modal show={showDialog} onHide={handleClose} style={{ zIndex: '2000' }} size="lg">
                <Modal.Header closeButton className='modal-header'>
                    <Modal.Title>
                        {props.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.detailUI}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}