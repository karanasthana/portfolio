import React from 'react';
import './sass.scss';

export default class Scores extends React.PureComponent {
    render() {
        return <div className="grey-bg scores score-section">
            <div className="container">
                <div className="work-ex-header">
                    <div className="col-12 text-center">
                        <h2 className="section-heading text-center"> SCORES </h2>
                    </div>
                </div>
                <table className="table table-bordered table-borderless table-striped table-hover">
                    <thead>
                        <tr>
                            <th style={{ width: '40%' }}>Exam Name</th>
                            <th style={{ width: '25%' }}>Score</th>
                            <th style={{ width: '35%' }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>GRE</td>
                            <td>321 <i className="ri-information-fill info-icon" title={'Quant = 168, Verbal = 153, AWA = 3.5'}/> </td>
                            <td>October, 2019</td>
                        </tr>
                        <tr>
                            <td>TOEFL</td>
                            <td>103 <i className="ri-information-fill info-icon" title={'Reading = 26, Listening = 27, Speaking = 25, Writing = 25'}/></td>
                            <td>November, 2019</td>
                        </tr>
                        <tr>
                            <td>BTech</td>
                            <td>73.58%</td>
                            <td>2013-2017</td>
                        </tr>
                        <tr>
                            <td>12th (Higher Secondary)</td>
                            <td>92%</td>
                            <td>2013</td>
                        </tr>
                        <tr>
                            <td>10th (Secondary)</td>
                            <td>92.8%</td>
                            <td>2011</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
}