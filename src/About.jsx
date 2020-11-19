import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Paper, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    item: {
        width: "80vw",
        flexBasis: "auto",
        marginBottom: "30px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        alignContent: "space-between"
    },
    profile: {
        maxWidth: "300px",
    },
    media: {
        width: "300px",
        height: "300px"
    },
    text: {
        itemAlign: "center"
    },
    root: {
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
        <Paper elevation={4}>
            <Card className={classes.profile} variant="outlined">
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
        
        <div className={classes.text}>
            text
        </div>
    </div>
  );
}

export default About;
