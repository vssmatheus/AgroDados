import React from "react";
import { withRouter } from "react-router-dom";
import '../css/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(3),
      paddingLeft: theme.spacing(9),
      width: "100%",
    },
    container_profile: {
      padding: theme.spacing(3),
      width: "100%",
    },
    horizontalPaper: {
      margin: theme.spacing(4),
      padding: theme.spacing(3),
      position: "absolute"
    },
    verticalPaper: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      display: "flex",
      width: "250px",
      borderTop: "4px solid #149879",          
      flexDirection: "column",
      position: "relative"
    },
    title_page: {
      paddingLeft: theme.spacing(9),
      paddingTop: theme.spacing(10),
    },
    indicator: {
      fontSize: '12pt',
      fontWeight: "500"
    },
    indicator_value: {
      fontSize: '50pt',
      alignSelf: 'center',
      color: '#149879',
      fontWeight: "400"
    },
    indicator_name: {
      fontSize: '11pt',
      alignSelf: 'right',
      marginLeft: "auto",
      fontWeight: "500"
    },
    profile: {
      paddingLeft: theme.spacing(9),
      margin: theme.spacing(1),
      padding: theme.spacing(3),
    },
    title_profile: {
      fontWeight: "600",
      fontSize: '17pt',
      color: '#149879',
      marginBottom: '5px'
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
          <Grid container>
            <Grid item md={12}>
              <Typography className={classes.title_page} variant="h5" component="div">
                Monitoramento
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.container}>
            <Grid item xs={12} md={3}>
              <Paper className={classes.verticalPaper} alignItems="flex-start">
                  <Typography className={classes.indicator} component="div">
                    Temperatura
                  </Typography>
                  <Typography className={classes.indicator_value} component="div">
                    35°C
                  </Typography> 
                  <Typography className={classes.indicator_name} component="div">
                    sensor 01
                  </Typography>       
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper className={classes.verticalPaper} alignItems="flex-start">
                  <Typography className={classes.indicator} component="div">
                    Umidade (Solo)
                  </Typography>
                  <Typography className={classes.indicator_value} component="div">
                    26%
                  </Typography> 
                  <Typography className={classes.indicator_name} component="div">
                    sensor 02
                  </Typography>                  
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper className={classes.verticalPaper} alignItems="flex-start">
                  <Typography className={classes.indicator} component="div">
                    Umidade (Ar)
                  </Typography>
                  <Typography className={classes.indicator_value} component="div">
                    15%
                  </Typography> 
                  <Typography className={classes.indicator_name} component="div">
                    sensor 03
                  </Typography>                  
                </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper className={classes.verticalPaper} alignItems="flex-start" >
                  <Typography className={classes.indicator} component="div">
                    Pressão (Solo)
                  </Typography>
                  <Typography className={classes.indicator_value} component="div">
                    10.7
                  </Typography> 
                  <Typography className={classes.indicator_name} component="div">
                    sensor 04
                  </Typography>                  
                </Paper>
            </Grid>
          </Grid>

          {/* Segunta linha do GRID */}

          <Grid className={classes.profile} xs={12}>
              <Paper>
                <Grid container className={classes.container_profile}>
                  <Grid item md={6} xs={12} alignItems="flex-start" >
                    <Typography className={classes.title_profile} component="div">
                      Localidade
                    </Typography>
                    <Typography className={classes.info_profile} component="div">
                      Propriedade: <strong>Fazenda Boa Vista</strong>
                    </Typography>
                    <Typography className={classes.info_profile} component="div">
                      Cultura: <strong>Soja</strong>
                    </Typography> 
                    <Typography className={classes.info_profile} component="div">
                      Talhão: <strong>02</strong>
                    </Typography>
                  </Grid>

                  <Grid item md={6} xs={12} alignItems="flex-start" >
                    <Typography className={classes.title_profile} component="div">
                      status
                    </Typography>
                    <Typography className={classes.info_profile} component="div">
                      Chart de status
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
        </div>
    );
});