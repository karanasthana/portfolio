import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './sass.scss';
import { Modal } from 'react-bootstrap';

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
            <Modal show={showDialog} onHide={handleClose} style={{ zIndex: '2000', display: 'flex', alignItems: 'center' }} size={props.modalSize ? props.modalSize : 'xl'}>
                <Modal.Header closeButton className='modal-header' style={{ background: '#E7178B', color: 'white' }}>
                    <Modal.Title style={{ textTransform: 'uppercase' }}>
                        {props.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ overflow: 'auto', maxHeight: '80vh' }}>
                    {props.detailUI}
                </Modal.Body>
            </Modal>
        </>
    );
}