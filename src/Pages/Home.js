import React from 'react';
import FirstFoldAboutKaran from '../Sections/FirstFoldAboutKaran';
import Footer from '../Sections/Footer';
import WorkEx from '../Sections/WorkEx';
import Projects from '../Sections/Projects';
import Scores from '../Sections/Scores';

class Home extends React.Component {
   render() {
      return (
         <div>
            <FirstFoldAboutKaran />
            <WorkEx />
            <Projects />
            <Scores />
            <Footer />
         </div>
      )
   }
}
export default Home;
