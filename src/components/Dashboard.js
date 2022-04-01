import React, { useContext, useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import '../css/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { FiArrowLeft, FiAlertTriangle } from 'react-icons/fi';
import { Grid, Typography } from '@material-ui/core';
import Context from '../store/config/config';
import api from '../services/api';
import GaugeChart from 'react-gauge-chart';
import {ScaleLoader} from 'react-spinners';

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
      position: "relative"
    },
    verticalPaper: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      display: "flex",
      width: "250px",
      borderTop: "5px solid #149879",          
      flexDirection: "column",
      position: "relative"
    },
    title_page: {
      paddingLeft: theme.spacing(12),
      paddingTop: theme.spacing(12),

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
    bucar_dados: {
      color: 'gray',
      fontWeight: 'bold',
      fontSize: '15pt'
    },
    profile: {
      paddingLeft: theme.spacing(9),
      margin: theme.spacing(1),
      padding: theme.spacing(3),
      width: "100%"
    },
    title_profile: {
      fontWeight: "600",
      fontSize: '17pt',
      color: '#149879',
      marginBottom: '5px'
    },
  }));
  

  //const [isLocal, setisLocal] = useState(null);

export const Dashboard = withRouter(({history}) => {
    const classes = useStyles();
    const [indicators, setIndicators] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [hasConection, setHasConection] = useState(true);
    const override =`
      display: flex; 
      align-items: center; 
      justify-content: center; 
      margin: 0 12px`;

    useEffect(() => {
      setTimeout(() => {
        if (!indicators != null){
          setLoadingMessage('Tensiômetro desconectado');
          setHasConection(false)
        }
      }, 40000);

      let timer = setInterval(() => {
        api.get('/')
        .then(response => {
          setIndicators(response.data.analogData);
        })
      }, 6000);
      return timer;
    }, [indicators]);
    
    const localidade = useContext(Context);

    return (
      <div className="">
        <Grid container spacing={2} >
          <Grid item md={12}>
            <Typography className={classes.title_page} variant="h5" component="div">
              Monitoramento
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.profile}>
        {indicators != null ? indicators.map((analogData, i) => (
          <Grid item xs={12} sm={3} key={i}>
            <Paper className={classes.verticalPaper} >
              <Typography className={classes.indicator} component="div">
                {analogData.type}
              </Typography>
              <Typography className={classes.indicator_value} component="div">
                {analogData.value}{analogData.unidade_medida}
              </Typography> 
              <Typography className={classes.indicator_name} component="div">
                sensor: {analogData.chanel}
              </Typography>       
            </Paper>
          </Grid>
        )):
          <Grid container spacing={2} >
            <Grid item xs={12}>
              <Typography className={classes.bucar_dados} variant="h5" component="div">
                {hasConection ? (
                  <div className="espera_dados">
                    <ScaleLoader 
                      css={override}
                      width={4}
                      height={18}
                      color={"#149879"}
                      loading={hasConection}
                    />
                    Buscando dados do tensiômetro...
                  </div>
                ) : (
                  <div className="espera_dados">
                    <Link className="back-link-dash-voltar" to="/localidades">
                      <FiArrowLeft size={25} color="#1f8aaa" />
                      <span className="back-text">Voltar</span>
                    </Link>
                    <p>{loadingMessage}<FiAlertTriangle size={25} color="#ecc14a"/></p>
                  </div>
                )}
              </Typography>
            </Grid>
          </Grid>
        }
        </Grid>

        {/* Segunta linha do GRID */}

        {localidade.lenght && (
          <Grid className={classes.profile}>
            <Paper style={{margin: "-40px 14px 0px 14px"}}>
              <Grid container className={classes.container_profile}>
                <Grid item md={6} xs={12}  >
                  <Typography className={classes.title_profile} component="div">
                    Localidade
                  </Typography>
                  {!localidade.store.data.talhao ? (
                    <Typography>
                      Nenhuma Localidade selecionada!
                      <Link className="back-link-dash" to="/localidades">
                        <FiArrowLeft size={25} color="#1f8aaa" />
                        <span className="back-text">Selecione uma localidade</span>
                      </Link>
                    </Typography>
                  ) : (
                    <>
                      <Typography className={classes.info_profile} component="div">
                        Propriedade: <strong>{localidade.store.data.nome_propriedade}</strong>
                      </Typography>
                      <Typography className={classes.info_profile} component="div">
                        Cultura: <strong>{localidade.store.data.cultura}</strong>
                      </Typography> 
                      <Typography className={classes.info_profile} component="div">
                        Talhão: <strong>{localidade.store.data.talhao}</strong>
                      </Typography>
                      <Link className="back-link-dash" to="/localidades">
                        <FiArrowLeft size={25} color="#1f8aaa" />
                        <span className="back-text">Monitorar outra localidade</span>
                      </Link>
                    </>
                  )}
                  
                </Grid>

                <Grid item md={6} xs={12} >
                  <Typography className={classes.title_profile} component="div">
                    status
                  </Typography>
                  {/* https://www.npmjs.com/package/react-gauge-chart */}
                  <GaugeChart id="gauge-chart5"
                    nrOfLevels={50}
                    arcsLength={[0.1, 0.1, 0.1]}
                    arcWidth = {0.1}
                    textColor = {"#000000"}
                    style = {{width: "60%", margin: "0 auto" }}
                    colors={['#5BE12C', '#F5CD19', '#EA4228']}
                    percent={0.37}
                    arcPadding={0.02}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        )}
      </div>
    );
});