import React from 'react';
import ProjectCard from './ProjectCard';
import Masonry from 'react-masonry-css';

class Projects extends React.Component {
    state = {
        projectsComponent: null,
    };

    componentDidMount = () => {
        let projectJson = require(`../constants/projectsData.json`);
        const projectsList = projectJson.projects;

        const projectStructures = projectsList.map((item, key) => 
            <ProjectCard
                name={item.name}
                description={item.description}
                image={item.image}
                link={item.link}
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
