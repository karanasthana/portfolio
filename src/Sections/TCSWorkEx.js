import React from 'react';
import Image from 'react-bootstrap/Image';
import './sass.scss';

function TCSWorkEx(props) {
    return (
        <div className="projects-section" style={{ marginBottom: '50px' }}>
            <div className="row" style={{ marginLeft: '20px', marginRight: '20px' }}>
                <div className="col-12 col-md-6" style={{ padding: '20px' }}>
                    <Image src={'https://www.cdn.geeksforgeeks.org/wp-content/uploads/TATA_Consultancy_Services_Logo_blue.svg_.png'} style={{ float: 'right', height: '120px' }} />
                </div>
                <div className="col-12 col-md-6" style={{ padding: '20px 50px', float: 'right', fontSize: '0.9rem' }}>
                    <div>
                        <h4 style={{ color: '#178be7' }}>Tata Consultancy Services Pvt Ltd</h4>
                    </div>
                    <div>
                        <span style={{ display: 'flex', color: '#5e9516', fontWeight: 'bold' }}>
                            <h5>Assistant System Engineer - Trainee</h5>
                            &nbsp; (Aug 2017 - Feb 2018)
                        </span>
                    </div>
                    <div>
                        Noida, India
                    </div>
                    <div style={{ marginTop: '30px' }}>
                        <p> Tata Consultancy Services (TCS) is one of the biggest multinational company from India, employing more than 4Lakh people across the world. </p>
                    </div>
                    <div style={{ marginTop: '30px'}}>
                        <p> My Professional responsibilities here, were - </p>
                        <ul style={{ paddingLeft: '0', listStyle: 'none' }}>
                            <li>To Develop graphs on the ETL Tool, Ab-initio, to manage and manipulate data for a US-based pharmaceutical giant.</li>
                            <li>Extract data for client requests using Unix commands and running Ab-Initio graphs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TCSWorkEx;
