import React from 'react';
import Image from 'react-bootstrap/Image';
import './sass.scss';

function TCSWorkEx(props) {
    return (
        <div className="projects-section">
            <div className="work-ex-header">
                <div className="col-12">
                    <h2> ____Journey____ </h2>
                </div>
            </div>
            <div className="row one-work-ex">
                <div className="col-12 col-md-6 company-img-container">
                <Image className="company-img" src={'https://www.cdn.geeksforgeeks.org/wp-content/uploads/TATA_Consultancy_Services_Logo_blue.svg_.png'} />
                </div>
                <div className="col-12 col-md-6 company-details-container">
                    <div>
                        <h4 className="company-header">Tata Consultancy Services Pvt Ltd</h4>
                    </div>
                    <div>
                        <span className="company-position">
                            <h5>Assistant System Engineer - Trainee</h5>
                            &nbsp; (Aug 2017 - Feb 2018)
                        </span>
                    </div>
                    <div>
                        Noida, India
                    </div>
                    <div className="para">
                        <p> Tata Consultancy Services (TCS) is one of the biggest multinational company from India, employing more than 4Lakh people across the world. </p>
                    </div>
                    <div className="para">
                        <p> My Professional responsibilities here, were - </p>
                        <ul className="reponsibilities">
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