import React from 'react';
import Header from './Header.jsx';
import About from './About.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Darker Grotesque",
      "sans-serif"
    ].join(","),
  }
})

const headerFont = createMuiTheme({
  typography: {
    fontFamily: [
      "Kumbh Sans",
      "sans-serif"
    ].join(","),
  }
})

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
  containerComponent: {
    maxWidth: "xl",
  }
})

function App() {
  const classes = useStyles();
  return (
      <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={headerFont}>
          <Header />
        </ThemeProvider>
        <Container className="containerComponent">
          <About />
          <ProjectsSection />
        </Container>
        </ThemeProvider>
      </div>
  );
}

export default App;
