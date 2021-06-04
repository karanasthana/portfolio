import React from 'react';
import { Image } from 'react-bootstrap';

export default function TravelScrapbook(props) {
    return (
        <div>
            <p>
                Inspired from my favourite Bollywood movie, <a href={'https://youtu.be/ShQg9Yz25ZA?t=88'} target="_blank" rel="noreferrer" >Yeh Jawaani Hai Deewaani</a> and my love for travelling.<br/>
                A digital scrapbook of the places I've been to and the places on my bucket list.
            </p>
            <p>
                <Image src={'https://karanpersonal.s3.ap-south-1.amazonaws.com/travel.png'} className="text-center" style={{ maxWidth: '60%' }} fluid />
            </p>
            <p>
                It consists of a combination of places along with some famous and inspiring travel Quotes.
            </p>
            <p>
                Divided places according to Countries and then their states.
                Using a CMS to manage all content and display using same templates for different places.
            </p>
            <p className="text-muted" style={{ fontSize: '0.7rem' }}>
                <div><em>Link to my <a href="karanasthana.github.io/travel" target="_blank" rel="noreferrer">Scrapbook</a></em></div>
                <div><em>Link to the <a href="https://github.com/karanasthana/travel" target="_blank" rel="noreferrer"> Github Repo</a></em></div>
            </p>
        </div>
    );
}