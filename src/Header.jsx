import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        width: "100vw",
        textAlign: "center",
        background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
        height: "30vh",
        '& h1': {
          fontSize: "10vh",
          color: "white",
          marginTop: "30px",
          marginBottom: "10px"
        },
        '& h2': {
          fontSize: "5vh",
          color: "white"
        },
    },
    item: {
        flexBasis: "auto",
        marginBottom: "30px",    
    },
})

function Header() {
  const classes = useStyles();
  return (
    
    <div className={`${classes.item} ${classes.title}`}>
      <Typography variant="h1">Portfolio</Typography>
      <Typography variant="h2">Sharon Grashuis</Typography>
    </div>
  );
}

export default Header;
