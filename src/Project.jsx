import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    projectItem: {
        alignSelf: "center",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
    },
    projectItemTwo: {
        textDecoration: "none",
        color: "black",
    },
    smartphone: {
        maxWidth: "300px",
        position: "relative",
    },
    iframe: {
        position: "absolute",
        maxWidth: "280px",
        minHeight: "424px",
        marginTop: "-14px",
        marginLeft: "-1px",
        border: "none",
    },
    titleLink: {
        fontSize: "20px"
    }
})

function Project({link, title}) {
  const classes = useStyles();
  return (
    <div className={classes.projectItem}>
        <img src={`${process.env.PUBLIC_URL}/smartphone_black.svg`} alt="smartphone" className={`${classes.smartphone} ${classes.projectItemTwo}`}></img>
        <iframe src={link} title={title} className={`${classes.iframe} ${classes.projectItemTwo}`} />
        <Typography>
            <Link href={link} target="_blank" rel="noopener noreferrer" className={`${classes.titleLink} ${classes.projectItemTwo}`}>{title}</Link>
        </Typography>
    </div>
  );
}

export default Project;
