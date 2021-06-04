import React from 'react';
import ProjectCard from './ProjectCard';
import Masonry from 'react-masonry-css';
import VaccineFinder from '../Projects/VaccineFinder';

class Projects extends React.Component {
    state = {
        projectsComponent: null,
    };

    componentDidMount = () => {
        const projectsList = 
            [{
                name: "Covid Vaccine Slot Finder",
                description: "Node JS bot that takes in a person's name and number along with their district id and keeps checking for vaccination slots' availability every minute. In case of availability, it sends the user a text message leveraging Twilio integration",
                image: "https://karanpersonal.s3.ap-south-1.amazonaws.com/vaccine.jpeg",
                link: "https://github.com/karanasthana/SlotScheduler",
                detailUI: <VaccineFinder />
            }, {
                name: "Travel Scrapbook",
                description: "Personal Travel Scrapbook of the places I've been to, want to go to.",
                image: "https://karanpersonal.s3.ap-south-1.amazonaws.com/Screen+Shot+2021-05-16+at+5.50.17+PM.png",
                link: "https://github.com/karanasthana/travel",
                detailUI: <VaccineFinder />
            }, {
                name: "JavaScript Prep",
                description: "Online collection of resources for quickly revising Javascript, React, React Native and Redux related interview questions",
                image: "https://karanpersonal.s3.ap-south-1.amazonaws.com/js.jpeg",
                link: "https://github.com/karanasthana/JavascriptPrep",
                detailUI: <VaccineFinder />
            }, {
                name: "Morse Code Website",
                description: "Takes in an input and returns its morse code",
                image: "https://karanpersonal.s3.ap-south-1.amazonaws.com/morse-code.png",
                link: "https://github.com/karanasthana/morse-code-website",
                detailUI: <VaccineFinder />
            }, {
                name: "Continuous Rail Theremometer (CRT)",
                description: "A Raspberry Pi application that is being used by the Indian Railways to log and monitor rail track temperatures. It also works as a security device in cases of extreme temperature changes by shouting off alarms.",
                image: "https://karanpersonal.s3.ap-south-1.amazonaws.com/crt.jpeg",
                link: "",
                detailUI: <VaccineFinder />
            }, {
                name: "Rail Data Preparation System (RDPS)",
                description: "An android application integrated with a Tachometer and GPS sensor via a Raspberry Pi communicating between them via Bluetooth communication. The application is being used by the Indian Railways to map all features on and near the rail tracks digitally.",
                image: "https://karanpersonal.s3.ap-south-1.amazonaws.com/indian_rail.jpeg",
                link: "",
                detailUI: <VaccineFinder />
            }, {
                name: "Oscillation Monitoring System (OMS)",
                description: "An android application integrated with an Accelerometer sensor via a Raspberry Pi communicating between them via Bluetooth communication. The application is used to measure the quality of tracks on which the rail is running on. The device measured accelerations in the X and Z axes and greater the accelerations, the worse was the rail.",
                image: "https://karanpersonal.s3.ap-south-1.amazonaws.com/indian_rail.jpeg",
                link: "",
                detailUI: <VaccineFinder />
            }];

        const projectStructures = projectsList.map((item, key) => 
            <ProjectCard
                name={item.name}
                description={item.description}
                image={item.image}
                link={item.link}
                detailUI={item.detailUI}
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
