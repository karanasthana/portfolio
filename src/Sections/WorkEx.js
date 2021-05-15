import React from 'react';
import './sass.scss';
import SingleWorkEx from './SingleWorkEx';
import OrgzitPara from './OrgzitPara';
import TCSPara from './TCSPara';

const WorkEx = props => {
    return (
        <>
            <div className="work-ex-header">
                <div className="col-12">
                    <h2> ____Journey____ </h2>
                </div>
            </div>
            <SingleWorkEx
                companyName={'Orgzit'}
                title={'Frontend Tech Lead'}
                duration={'Feb 2018 - Present'}
                imgUrl={'https://d3a93fg1wt2nf3.cloudfront.net/static/website/images/orgzit_logo.png'}
                location={'New Delhi, India'}
                para={<OrgzitPara />}
            />
            <SingleWorkEx
                companyName={'Tata Consultancy Services'}
                title={'Assistant System Engineer - Trainee'}
                duration={'Aug 2017 - Feb 2018'}
                imgUrl={'https://www.cdn.geeksforgeeks.org/wp-content/uploads/TATA_Consultancy_Services_Logo_blue.svg_.png'}
                location={'Noida, India'}
                para={<TCSPara />}
            />
        </>
    );
};

export default WorkEx;
