import React from 'react';
// import { Button } from '../StyledComponents/Button';
import Image from 'react-bootstrap/Image';
import Background from '../assets/white-bg.jpg';

export default class Footer extends React.Component {
    render() {
        return <div style={{ backgroundColor: '#F4F5F7', height: '100px' }}>
            <div className="row"></div>
            <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                CopyRight Karan <i class="ri-facebook-fill"></i>
            </div>
        </div>
    }
}