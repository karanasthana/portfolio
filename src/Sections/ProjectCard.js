import React from 'react';
import { Card } from 'react-bootstrap';
import './sass.scss';

export default function ProjectCard(props) {
    return (
        <Card className="cardContainer" onClick={() => alert("Hello from here")}>
            <div className="cardOuterDiv">
                <Card.Img variant="top" src={`${props.image}`} className="cardImg" />
                <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">{`${props.name}`}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
            </div>
        </Card>
    );
}