import React, {useCallback, useContext} from 'react';
import { Redirect, withRouter, Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import '../css/login.css';
import {CssBaseline} from '@material-ui/core';
import {Container} from '@material-ui/core';
import Logo from '../assets/pngs/LOGO-AGRODADOS-SAMPLE.png';
import { makeStyles } from "@material-ui/core/styles";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const useStyles = makeStyles((theme) => ({
    root: {
      overflow: "hidden",
      margin: '0 auto',
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
  }));


export const Logar = withRouter(({history}) => {
    const classes = useStyles();
    
    const loginFunc = useCallback(
        async (event) =>{
            event.preventDefault();

            const { email, senha } = event.target.elements; 

            try{
                await firebase
                .auth()
                .signInWithEmailAndPassword(email.value, senha.value);
                history.push('/');
                
            } catch (error) {
                console.log(error);
                alert("Email ou senha \nInválidos !");
            }
           
        },
        [history],
    );

    const {usuario} = useContext(AuthContext);

    if(usuario){
        return <Redirect to="/" />
    }

    return (
        <div className={classes.root}>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md" >
                    <div className="card-login">
                        {/* <h1>Entrar</h1> */}
                        <div className="card-login-container">
                            <img src={Logo} alt="" width="250px"/>
                            <form onSubmit={loginFunc}>
                                <div>
                                    <input className="input-email" type="email" placeholder="Email" name="email" required/>
                                </div>
                                <div>
                                    <input className="input-senha" placeholder="Senha" type="password" name="senha" required/>
                                </div>
                                <div>
                                    <button className="matt-btn" type="submit" >Login</button>
                                </div>
                                <div className="options-login">
                                    <Link id="recuperarSenha" to="/recuperar">Recuperar senha</Link>
                                    <span>|</span>
                                    <Link id="cadastrar" to="/cadastrar">Cadastrar-se</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>            
            </React.Fragment>
        </div>
    );
});