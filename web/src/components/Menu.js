import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import axios from "axios";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#FFC72C',
    border: 0,
    borderRadius: 3,
    color: 'black',
    height: 65,
    padding: '0 30px',  },
  title: {
    flexGrow: 1,
  },

}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            The Big Mac Test
          </Typography>
        </Toolbar>
    </div>
  );
}
