import React from 'react';
import Image from 'react-bootstrap/Image';
import './sass.scss';

function SingleWorkEx(props) {
   return (
        <div className="projects-section">
            <div className="row one-work-ex">
                <div className="col-12 col-md-4 company-img-container">
                <Image className="company-img" src={props.imgUrl} />
                </div>
                <div className="col-12 col-md-6 company-details-container">
                    <div>
                        <h4 className="company-header">{props.companyName}</h4>
                    </div>
                    <div>
                        <span className="company-position">
                            <h5>{props.title}</h5>
                            &nbsp; ({props.duration})
                        </span>
                    </div>
                    <div>{props.location}</div>
                    {props.para}
                </div>
            </div>
        </div>
    );
};

export default SingleWorkEx;
