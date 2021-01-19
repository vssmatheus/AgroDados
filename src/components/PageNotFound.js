import React from 'react';
import { withRouter, Link } from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi';
import '../css/login.css';
import {CssBaseline} from '@material-ui/core';
import {Container} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      overflow: "hidden",
      margin: 0,
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }));


export const PageNotFound = withRouter(({history}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md" >
                    <div className="card-login">
                        <h1>Erro 404</h1>
                        <p>Página não Encontrada!</p>
                        <div className="back-to-login">
                            <Link className="back-link" to="/">
                                <FiArrowLeft size={25} color="#555" />
                                <span className="back-text">Voltar para home</span>
                            </Link>
                        </div>
                    </div>
                </Container>      
            </React.Fragment>
        </div>
    );
});