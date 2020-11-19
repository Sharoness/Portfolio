import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Paper, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    item: {
        flexBasis: "auto",
        marginBottom: "30px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        alignContent: "space-evenly"
    },
    profile: { // flexbox item card
        maxWidth: "300px",
    },
    media: { // avatar
        width: "300px",
        height: "300px"
    },
    text: { // flexbox item text
        maxWidth: "800px",
        itemAlign: "center",
        flexGrow: "2",
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
            Hello! My name is Sharon, I am a Dutch Front End Web Developer living in London, UK.<br />

            Since July 2019 I have been learning web development via FreeCodeCamp, under guidance of an experienced full-stack web developer.<br />
            Next to the common technologies I learned via FreeCodeCamp, such as React, JavaScript, HTML and CSS, I have learned technologies such as HTTP, Git, Node, Package Managers, Web Bundlers and Docker.<br />
            I have obtained the FreeCodeCamp certificates for <a href="https://www.freecodecamp.org/certification/sharoness/responsive-web-design" target="_blank" rel="noopener noreferrer">Responsive Web Design</a>, <a href="https://www.freecodecamp.org/certification/sharoness/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">JavaScript Algorithms and Data Structures</a>, and <a href="https://www.freecodecamp.org/certification/sharoness/front-end-libraries" target="_blank" rel="noopener noreferrer">Front End Libraries</a>.<br />
            In order to obtain these certificates, I had to make projects and pass their unit tests. To see that I passed them, click on the hamburger menu, select the right name in the Test Suite and press Run Tests.<br />
            The ones that I am proud of the most, are shown below. They are all made with <b>React</b>.<br />
            To see a project in full screen, click on its title below. To see more of my projects, click on the GitHub icon next to my name.
        </Typography>
    </div>
  );
}

export default About;
