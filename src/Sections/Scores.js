import React from 'react';
import './sass.scss';
// import * as CONSTANTS from '../constants/constants';
import Image from 'react-bootstrap/Image';

export default class Scores extends React.Component {
    render() {
        return <div className="footer-section scores" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="col-12 col-md-6">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Image src={'data:image/png;base64,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'} style={{ height: 120, width: 200 }} />
                    <h3>GRE</h3>
                </div>
                <p>
                    321
                </p>
            </div>
            <div className="col-12 col-md-6">
                <h3>TOEFL</h3>
                <Image src={'https://getvectorlogo.com/wp-content/uploads/2020/01/ets-toefl-vector-logo.png'} style={{ height: 120, width: 200 }} />
                <p>
                    103
                </p>
            </div>
            <div className="col-12 col-md-6">
                <h3>BTech</h3>
                <Image src={'https://upload.wikimedia.org/wikipedia/en/9/98/Dr._A.P.J._Abdul_Kalam_Technical_University_logo.png'} style={{ height: 120, width: 200 }} />
                <p>
                    73.58%
                </p>
            </div>
            <div className="col-12 col-md-6">
                <Image src={'https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2017-05/29/full/1496063794-1744.jpg&width=1200'} style={{ height: 120, width: 200 }} />
                <h3>12th (Higher Secondary)</h3>
                <p>
                    92%
                </p>
            </div>
            <div className="col-12 col-md-6">
                <Image src={'https://www.pooripadhai.com/assets/image/boards/icse12.png'} style={{ height: 120, width: 200 }} />
                <h3>10th (Secondary)</h3>
                <p>
                    92.8%
                </p>
            </div>
        </div>
    }
}