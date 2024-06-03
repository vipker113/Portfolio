import './App.scss';
import Skill from './components/Skill/Skill';
import Navbar from './components/Navbar/Navbar';
import Overview from './components/Overview/Overview';
import Project from './components/Project/Project';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Scene from './components/Threejs/Scene';
import SpaceBackground from './components/Threejs/SpaceBackground';

function App() {
    return (
        // <div className="app-container">
        //     {/* <div id="stars"></div>
        //     <div id="stars2"></div>
        //     <div id="stars3"></div> */}
        //     <SpaceBackground />
        //     <Navbar />
        //     <Overview />
        //     <Skill />
        //     <Experience />
        //     <Project />
        //     <Contact />
        //     <Scene />
        // </div>
        <div className="app-container">
            <SpaceBackground />
            <div className="content">
                <Navbar />
                <Overview />
                <Skill />
                <Experience />
                <Project />
                <Contact />
                {/* <Scene /> */}
            </div>
        </div>
    );
}

export default App;
