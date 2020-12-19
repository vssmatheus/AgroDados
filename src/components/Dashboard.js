import React from "react";
import { withRouter } from "react-router-dom";
import '../css/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  }));

export const Dashboard = withRouter(({history}) => {
    const classes = useStyles();
    return (
        <div className="content-app">
            <div className={classes.container}>
                <div style={{ gridColumnEnd: 'span 3' }}>
                <Paper className={classes.paper}>xs=3</Paper>
                </div>
                <div style={{ gridColumnEnd: 'span 3' }}>
                <Paper className={classes.paper}>xs=3</Paper>
                </div>
                <div style={{ gridColumnEnd: 'span 3' }}>
                <Paper className={classes.paper}>xs=3</Paper>
                </div>
                <div style={{ gridColumnEnd: 'span 3' }}>
                <Paper className={classes.paper}>xs=3</Paper>
                </div>
                <div style={{ gridColumnEnd: 'span 12' }}>
                <Paper className={classes.paper}>xs=12</Paper>
                </div>
            </div>
        </div>
    );
});