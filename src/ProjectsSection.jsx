import React from 'react';
import Project from './Project.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    projects: {
      width: "80vw",
      flexBasis: "auto",
      marginBottom: "30px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
})

function ProjectsSection() {
  const classes = useStyles();
  return (
    <div className={classes.projects}>
        <Project link={"https://sharoness.github.io/freecodecamp_React_P4_JS_Calculator_Functional/"} title={"JavaScript Calculator"}/>
        <Project link={"https://sharoness.github.io/freecodecamp_React_P5_Pomodoro_Clock/"} title={"Pomodoro Clock"} />
        <Project link={"https://sharoness.github.io/freecodecamp_React_P1_Quotes/"} title={"Random Quote Machine"} />
    </div>
  );
}

export default ProjectsSection;
