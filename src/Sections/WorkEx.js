import React from 'react';
import './sass.scss';
import SingleWorkEx from './SingleWorkEx';
import OrgzitPara from '../JourneyTexts/OrgzitPara';
import TCSPara from '../JourneyTexts/TCSPara';
// import JSSPara from '../JourneyTexts/JSSPara';
import * as CONSTANTS from '../constants/constants';

const WorkEx = props => {
    return (
        <div className="grey-bg work-ex" >
            <div className="work-ex-header">
                <div className="col-12">
                    <h2 className="section-heading"> JOURNEY </h2>
                </div>
            </div>
            <SingleWorkEx
                companyName={'University Of Florida'}
                title={'Masters in Computer Science'}
                duration={'Fall 2021 - 2022'}
                imgUrl={CONSTANTS.UFL_IMAGE_LINK}
                location={'Gainesville, Florida, USA'}
                // para={<JSSPara />}
            />
            <SingleWorkEx
                companyName={'Orgzit'}
                title={'Frontend Tech Lead'}
                duration={'Feb 2018 - Present'}
                imgUrl={CONSTANTS.ORGZIT_IMAGE_LINK}
                location={'New Delhi, India'}
                para={<OrgzitPara />}
            />
            <SingleWorkEx
                companyName={'Tata Consultancy Services'}
                title={'Assistant System Engineer - Trainee'}
                duration={'Aug 2017 - Feb 2018'}
                imgUrl={CONSTANTS.TCS_IMAGE_LINK}
                location={'Noida, India'}
                para={<TCSPara />}
            />
            <SingleWorkEx
                companyName={'JSS Academy Of Technical Education'}
                title={'BTech in Information Technology'}
                duration={'2013 - 2017'}
                imgUrl={CONSTANTS.JSS_IMAGE_LINK}
                location={'Noida, India'}
                // para={<JSSPara />}
            />
        </div>
    );
};

export default WorkEx;
