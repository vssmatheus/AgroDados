import React from "react";
import { withRouter, Link } from "react-router-dom";
import '../css/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import {KeyboardArrowRight} from '@material-ui/icons';
import EcoIllustration from '../assets/pngs/Ecology_Monochromatic.png';

const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(3),
      paddingLeft: theme.spacing(9),
      width: "100%",
    },
    horizontalPaper: {
      margin: theme.spacing(4),
      padding: theme.spacing(3),
      position: 'absolute',     
    },
    verticalPaper: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      display: "flex",
    },
    title_page: {
      paddingLeft: theme.spacing(9),
      paddingTop: theme.spacing(10),
    },
    img_home:{
      display: "flex",
      justifyContent: 'center'
    },
  }));

export const Home = withRouter(({history}) => {
    const classes = useStyles();

    return (
        <div>
          <Grid container>
            <Grid item md={12}>
              <Typography className={classes.title_page} variant="h5" component="div">
              </Typography>
            </Grid>
          </Grid>

          <Grid className={'profile'} xs={12}>
            <Grid container className={classes.container_profile}>
              <Grid item md={6} xs={12} alignItems="flex-start" >
                <Typography component="div">
                  <p className={"text_home"}>O sistema <strong style={{color: '#149879'}} >Agrodados</strong> é integrado a um tensiômetro digital, do qual o intuito é coletar dados de uma 
                  determinada localidade rural, podendo assim, auxiliar no controle dinâmico da irrigação na lavoura.</p>
                  <Link to={'/localidades'} className="matt-btn-getStarted">
                    <KeyboardArrowRight/>Começar
                  </Link>
                </Typography>
                
                {/* <button className="matt-btn">Login</button> */}
              </Grid>
              <Grid item md={6} xs={12}  className={'img_home'}  alignItems="flex-start" >
                <div className={classes.img_home}>
                  <img src={EcoIllustration} alt="" width="400"/>
                </div> 
              </Grid>
            </Grid>
          </Grid>

        </div>
    );
});