import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(3),
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(9),

    },
    horizontalPaper: {
      margin: theme.spacing(3),
      padding: theme.spacing(3),
    },
    verticalPaper: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      display: "flex",
     
      flexDirection: "column",
      alignItems: "center",
      },
  }));

export const Localidades = withRouter(({history}) => {
    const classes = useStyles();

    return (
        <div className="">
          <Grid container className={classes.container}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.verticalPaper} alignItems="flex-start" style={{ flexGrow: 1 }}>
                  <h1>Localidades.</h1>                  
                </Paper>
            </Grid>
          </Grid>
        </div>
    );
});