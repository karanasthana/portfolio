import React from 'react';
import { Image } from 'react-bootstrap';
import * as CONSTANTS from '../constants/constants';

export default function TravelScrapbook(props) {
    return (
        <div>
            <p>
                Inspired from my favourite Bollywood movie, <a href={CONSTANTS.YJHD_TRAVEL_BOOK_VIDEO} target="_blank" rel="noreferrer" >Yeh Jawaani Hai Deewaani</a> and my love for travelling.<br/>
                A digital scrapbook of the places I've been to and the places on my bucket list.
            </p>
            <p>
                <a href={CONSTANTS.TRAVEL_LINK} target="_blank" rel="noreferrer">
                    <Image src={CONSTANTS.TRAVEL_WEBSITE_SS_LINK} className="text-center travel-modal-img" fluid />
                </a>
            </p>
            <p>
                It consists of a combination of places along with some famous and inspiring travel Quotes.
            </p>
            <p>
                Divided places according to Countries and then their states.
                Using a CMS to manage all content and display using same templates for different places.
            </p>
            <p className="text-muted font-small">
                <div><em>Link to my <a href={CONSTANTS.TRAVEL_LINK} target="_blank" rel="noreferrer">Scrapbook</a></em></div>
                <div><em>Link to the <a href={CONSTANTS.TRAVEL_GITHUB} target="_blank" rel="noreferrer"> Github Repo</a></em></div>
            </p>
        </div>
    );
}