import React from 'react';
import * as CONSTANTS from '../constants/constants';

export default function TravelScrapbook(props) {
    return (
        <div>
            <p>
            Continuous Rail Temperature Recorder is a versatile device specially designed for continuously displaying Rail Temperature, Storing Data, and also does not require any external PC or Laptop to transfer the data to TMS Server, it can transfer data automatically as it has internet connectivity is available on the device itself. The device is attached with an internal backup battery which enables the recorder to continuously record & display the data in case of power failure up to 72 hours. The Enhanced Flash Ram memory is designed to record the data up to 5 years on per minute basis. The device comes with inbuilt USB port for data transfer and 3.5mm Port for communication with telemetry device. It has the beautiful, compact and very sleek design. It has Special Safety alarms on MAX/MIN Crossover & Sensor Disconnection make this device fully secure. The device has the feature of showing the Hourly Maximum/Minimum Temperature at real time. Device is also User Password protected. 
            </p>
            <p>
                Salient Features
            </p>
            <ul>
                <li>More storage with 16 GB inbuilt Storage which can store data up to 5 years on per minute basis.</li>
                <li>Having inbuilt internet Connectivity solution (Ethernet, Wi-Fi, Bluetooth) to transfer files.</li>
                <li>Very Compaq, beautiful and very sleek design.</li>
                <li>Record Temp at one minute Interval.</li>
                <li>Real Time Temp Tracking (Live, Min-Max Temp With time ).</li>
                <li>Customized selection of Time Interval for Recorded data Retrieval.</li>
                <li>Customized Time and Date selection for Auto Start recording. </li>
            </ul>
            <p className="text-muted font-small">
                <div><em>Link to my <a href={CONSTANTS.TRAVEL_LINK} target="_blank" rel="noreferrer">Scrapbook</a></em></div>
                <div><em>Link to the <a href={CONSTANTS.TRAVEL_GITHUB} target="_blank" rel="noreferrer"> Github Repo</a></em></div>
            </p>
        </div>
    );
}