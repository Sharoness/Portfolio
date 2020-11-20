import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    item: {
        flexBasis: "auto",
        marginBottom: "50px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        alignContent: "space-evenly",
    },
    profile: { // flexbox item card
        maxWidth: "300px",
        marginBottom: "30px"
    },
    media: { // avatar
        width: "300px",
        height: "300px"
    },
    text: { // flexbox item text
        maxWidth: "800px",
        itemAlign: "center",
        flexGrow: "2",
        paddingTop: "10px",
        paddingLeft: "10px",
    },
    link: {
    },
    root: { // github icon
        color: "black",
    }
})

function About() {
  const classes = useStyles();

  const [user, setUser] = useState({});

  useEffect(() => {
        fetch('https://api.github.com/users/sharoness')
            .then(response => response.json())
            .then(data => setUser(data));
    }, [])
 
    
  return (
    <div className={classes.item}>
        <Paper elevation={4} className={classes.profile}>
            <Card variant="outlined">
                <CardActionArea>
                    <CardMedia 
                        className={classes.media} 
                        image={user.avatar_url} 
                        title="avatar" 
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {user.name}<a style={{marginLeft: "60px"}} href={user.html_url} target="_blank" rel="noopener noreferrer"><GitHubIcon classes={{root: classes.root}} /></a>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Location: {user.location}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Paper>
        <Typography paragraph className={classes.text}>
            Hello! My name is Sharon, I am a Dutch Front End Web Developer living in London.<br />

            Since July 2019 I have been learning web development via FreeCodeCamp, under guidance of an experienced full-stack web developer.<br />
            The technologies I have learned through FreeCodeCamp and by myself, are <b>React</b>, <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>, <b>HTTP</b>, <b>Git</b>, <b>Node</b>, <b>Package Managers</b>, <b>Web Bundlers</b> and <b>Docker</b>.<br />
            I have obtained the FreeCodeCamp certificates for <a href="https://www.freecodecamp.org/certification/sharoness/responsive-web-design" target="_blank" rel="noopener noreferrer" className={classes.link}>Responsive Web Design</a>, <a href="https://www.freecodecamp.org/certification/sharoness/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer" className={classes.link}>JavaScript Algorithms and Data Structures</a>, and <a href="https://www.freecodecamp.org/certification/sharoness/front-end-libraries" target="_blank" rel="noopener noreferrer" className={classes.link}>Front End Libraries</a>.<br />
            In order to obtain these certificates, I had to make projects and pass their unit tests.<br />
            The ones that I'm most proud of, are shown below. They are all made with <b>React</b>.<br />
            To see that I passed the unit tests, click on the hamburger menu, select the right name in the Test Suite and press Run Tests. To see a project in full screen, click on its title below. To see more of my projects, click on the GitHub icon next to my name.
        </Typography>
    </div>
  );
}

export default About;
