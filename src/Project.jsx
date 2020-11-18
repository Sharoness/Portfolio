import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
        maxWidth: "279px",
        minHeight: "424px",
        marginTop: "-12px",
        marginLeft: "-1px",
        border: "none",
    },
    titleLink: {

    }
})

function Project({link, title}) {
  const classes = useStyles();
  return (
    <div className={classes.projectItem}>
        <img src={`${process.env.PUBLIC_URL}/smartphone_black.svg`} alt="smartphone" className={`${classes.smartphone} ${classes.projectItemTwo}`}></img>
        <iframe src={link} title={title} className={`${classes.iframe} ${classes.projectItemTwo}`} />
        <a href={link} target="_blank" rel="noopener noreferrer" className={`${classes.titleLink} ${classes.projectItemTwo}`}>{title}</a>
    </div>
  );
}

export default Project;
