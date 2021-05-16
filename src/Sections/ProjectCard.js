import React from 'react';
import { Card } from 'react-bootstrap';
import './sass.scss';

export default function ProjectCard(props) {
    return (
        // <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={{ padding: '20px' }}>
        <Card className="cardContainer" onClick={() => console.log('click')}>
            <div className="cardOuterDiv">
                <Card.Img variant="top" src={`${props.image}`} className="cardImg" />
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">{`${props.name}`}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
            </div>
        </Card>
        // </div>
    );
}