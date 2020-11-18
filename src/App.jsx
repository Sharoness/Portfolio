import React from 'react';
import Header from './Header.jsx';
import About from './About.jsx';
import ProjectsSection from './ProjectsSection.jsx';
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
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <About />
      <ProjectsSection />
    </div>
  );
}

export default App;
