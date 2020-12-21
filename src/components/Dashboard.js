import React from "react";
import { withRouter } from "react-router-dom";
import '../css/styles.css';
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

export const Dashboard = withRouter(({history}) => {
    const classes = useStyles();


    return (
      /* <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          
        </div>
      </div> */
        <div className="">
          <Grid container className={classes.container}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.verticalPaper} alignItems="flex-start" style={{ flexGrow: 1 }}>
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere, vero, qui repudiandae doloremque assumenda hic ab quae, ea blanditiis eius. Temporibus molestias aut nisi, consequuntur quo voluptas veniam repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum itaque quibusdam, quaerat maiores maxime quod ab necessitatibus quidem distinctio porro voluptas eveniet voluptatibus provident molestias aperiam autem, repellendus mollitia.</h1>                  
                </Paper>
            </Grid>
          </Grid>
        </div>
    );
});