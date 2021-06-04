import React from 'react';
import ProjectCard from './ProjectCard';
import Masonry from 'react-masonry-css';
import VaccineFinder from '../Projects/VaccineFinder';
import TravelScrapbook from '../Projects/TravelScrapbook';
import * as CONSTANTS from '../constants/constants';
class Projects extends React.Component {
    state = {
        projectsComponent: null,
    };

    componentDidMount = () => {
        const projectsList = 
            [{
                name: "Covid Vaccine Slot Finder",
                description: "Node JS bot to help notifying on availability of covid vaccine slots in India.",
                image: CONSTANTS.VACCINE_PROJ_IMG_LINK,
                link: CONSTANTS.VACCINE_GITHUB,
                detailUI: <VaccineFinder />,
                modalSize: 'lg',
            }, {
                name: "Travel Scrapbook",
                description: "Personal Travel Scrapbook of the places I've been to, want to go to.",
                image: CONSTANTS.TRAVEL_PROJ_IMG_LINK,
                link: CONSTANTS.TRAVEL_GITHUB,
                detailUI: <TravelScrapbook />,
                modalSize: 'lg',
            }, {
                name: "JavaScript Prep",
                description: "Online collection of resources for quickly revising Javascript, React, React Native and Redux related interview questions",
                image: CONSTANTS.JAVASCRIPTPREP_PROJ_IMG_LINK,
                link: CONSTANTS.JAVASCRIPTPREP_GITHUB,
                detailUI: <VaccineFinder />,
                modalSize: 'xl',
            }, {
                name: "Morse Code Website",
                description: "Takes in an input and returns its morse code",
                image: CONSTANTS.MORSECODE_PROJ_IMG_LINK,
                link: CONSTANTS.MORSECODE_GITHUB,
                detailUI: <VaccineFinder />,
                modalSize: 'xl',
            }, {
                name: "Continuous Rail Theremometer (CRT)",
                description: "A Raspberry Pi application that is being used by the Indian Railways to log and monitor rail track temperatures. It also works as a security device in cases of extreme temperature changes by shouting off alarms.",
                image: CONSTANTS.CRT_PROJ_IMG_LINK,
                link: "",
                detailUI: <VaccineFinder />,
                modalSize: 'xl',
            }, {
                name: "Rail Data Preparation System (RDPS)",
                description: "An android application integrated with a Tachometer and GPS sensor via a Raspberry Pi communicating between them via Bluetooth communication. The application is being used by the Indian Railways to map all features on and near the rail tracks digitally.",
                image: CONSTANTS.RAIL_PROJ_IMG_LINK,
                link: "",
                detailUI: <VaccineFinder />,
                modalSize: 'xl',
            }, {
                name: "Oscillation Monitoring System (OMS)",
                description: "An android application integrated with an Accelerometer sensor via a Raspberry Pi communicating between them via Bluetooth communication. The application is used to measure the quality of tracks on which the rail is running on. The device measured accelerations in the X and Z axes and greater the accelerations, the worse was the rail.",
                image: CONSTANTS.RAIL_PROJ_IMG_LINK,
                link: "",
                detailUI: <VaccineFinder />,
                modalSize: 'xl',
            }];

        const projectStructures = projectsList.map((item, key) => 
            <ProjectCard
                name={item.name}
                description={item.description}
                image={item.image}
                link={item.link}
                detailUI={item.detailUI}
                modalSize={item.modalSize}
            />
        )
        const breakpointColumnsObj = {
            default: 3,
            1024: 2,
            500: 1
        };
        this.setState({ projectsComponent: projectStructures, breakpointColumnsObj });
    };

    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="work-ex-header">
                        <div className="col-12">
                            <h2 className="section-heading"> PERSONAL PROJECTS </h2>
                        </div>
                    </div>
                    <div className="all-projects">
                        <Masonry
                            breakpointCols={this.state.breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {this.state.projectsComponent}
                        </Masonry>
                    </div>
                </div>
            </div>
        )
    }
}
export default Projects;
