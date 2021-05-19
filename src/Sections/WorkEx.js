import React from 'react';
import './sass.scss';
import SingleWorkEx from './SingleWorkEx';
import OrgzitPara from '../JourneyTexts/OrgzitPara';
import TCSPara from '../JourneyTexts/TCSPara';
import JSSPara from '../JourneyTexts/JSSPara';

const WorkEx = props => {
    return (
        <div className="grey-bg work-ex" >
            <div className="work-ex-header">
                <div className="col-12">
                    <h2> ____Journey____ </h2>
                </div>
            </div>
            {
                false &&
                <SingleWorkEx
                    companyName={'University Of Florida'}
                    title={'Masters in Computer Science'}
                    duration={'Fall 2021 - 2022'}
                    imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_Florida_logo.svg/1280px-University_of_Florida_logo.svg.png'}
                    location={'Gainesville, USA'}
                    para={<JSSPara />}
                />
            }
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
            <SingleWorkEx
                companyName={'JSS Academy Of Technical Education'}
                title={'BTech in Information Technology'}
                duration={'2013 - 2017'}
                imgUrl={'https://jssaten.ac.in/img/JSS_Logo.png'}
                location={'Noida, India'}
                para={<JSSPara />}
            />
        </div>
    );
};

export default WorkEx;
