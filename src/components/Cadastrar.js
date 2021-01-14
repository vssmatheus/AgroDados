import React, {useCallback} from 'react';
import { withRouter, Link } from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi';
import '../css/login.css';
import {CssBaseline} from '@material-ui/core';
import {Container} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import firebase from 'firebase';

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


export const Cadastrar = withRouter((props) => {
    const { history } = props;

    const classes = useStyles();

    const cadastroFunc = useCallback(
        async (event) =>{
            event.preventDefault();
            const {email, senha} = event.target.elements; 
            try{
                await firebase.auth().createUserWithEmailAndPassword(email.value, senha.value);
                history.push('/');
            } catch (error) {
                console.log(error);
            }
        },
        [history],
    );
    return (
        <div className={classes.root}>
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="md">
                    <div className="card-login">
                        <h1>Cadastrar-se</h1>
                        <form onSubmit={cadastroFunc}>
                            <div>
                                <input placeholder="Seu email?" className="input-email" type="email" name="email"/>
                            </div>
                            <div>
                                <input placeholder="Defina uma senha" className="input-senha" type="password" name="senha"/>
                            </div>
                            <div>
                                <button className="matt-btn-blue" type="submit">Cadastrar</button>
                            </div>                        
                        </form>
                        <div className="back-to-login">
                            <Link className="back-link" to="/logar">
                                <FiArrowLeft size={25} color="#555" />
                                <span className="back-text">Voltar ao login</span>
                            </Link>
                        </div>
                    </div>                                            
                </Container>
            </React.Fragment>
        </div>
    )
});