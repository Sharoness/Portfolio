import React from 'react';
import Project from './Project.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    
  },
  item: {
    width: "80vw",
    flexBasis: "auto",
    marginBottom: "30px",
    
  },
  title: {
    width: "100vw",
    textAlign: "center",
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    height: "30vh",
  },
  projects: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={`${classes.item} ${classes.title}`}>
        <h1>Portfolio</h1>
        <h2>Sharon Grashuis</h2>
      </div>
      <div className={classes.item}>
        <p>My name is Sharon Grashuis, a Dutch Front-End Web Developer who is currently living in London, UK.</p>
        <p>In July 2019 I started the journey of becoming a web developer, by taking lessons at FreeCodeCamp.org. At this website you can earn certifications by completing projects of the topic of the certification. <br />
          I started with learning <b>HTML</b>, <b>CSS</b> and <b>responsive web design</b>, where I earned the <i><b>Responsive Web Design Certification</b></i>. <br />
          Next up was the <b><i>JavaScript Algorithms and Data Structures Certification</i></b>, where I learned the basics of <b>JavaScript</b>, <b>Data Structures</b> and <b>Algorithm Scripting</b>. I also learned <b>ES6</b>, <b>Regular Expressions</b>, <b>Object Oriented Programming</b> and <b>Functional Programming</b>.<br />
          After earning this certification, it was time to learn Front End Libraries. I covered <b>Bootstrap</b>, <b>jQuery</b>, <b>Sass</b>, and <b>React</b>. I recently earned the <b><i>Front End Libraries Certification</i></b>.</p>
        <p>If I take a look at all the progress that I made in the past year and a half, I am impressed that I learned so much about, and am now familiar with all those topics within this time period. 
          Looking back at all my projects, I am most proud of the JavaScript Calculator. I feel like that one is a milestone. Below you can see the projects that I made. If you want to see them in full size, click on the name of the project which is shown under the phone.</p>
      </div>
      <div className={`${classes.item} ${classes.projects}`}>
        <Project link={"https://sharoness.github.io/freecodecamp_React_P4_JS_Calculator_Functional/"} title={"JavaScript Calculator"}/>
        <Project link={"https://sharoness.github.io/freecodecamp_React_P5_Pomodoro_Clock/"} title={"Pomodoro Clock"} />
        <Project link={"https://sharoness.github.io/freecodecamp_React_P1_Quotes/"} title={"Random Quote Machine"} />
      </div>
    </div>
  );
}

export default App;
