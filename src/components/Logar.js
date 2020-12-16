import React, {useCallback, useContext} from 'react';
import { Redirect, withRouter, Link } from "react-router-dom";
import { authConfig} from "../auth/config";
import { AuthContext } from "../auth/AuthContext";
import '../css/login.css';
import {CssBaseline} from '@material-ui/core';
import {Container} from '@material-ui/core';


export const Logar = withRouter(({history}) => {
    const loginFunc = useCallback(
        async (event) =>{
            event.preventDefault();

            const { email, senha } = event.target.elements; 

            try{
                await authConfig
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
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <div className="card-login">
                    <img src="../assets/pngs/LOGO-AGRODADOS.png" alt=""/>
                    <h1>Entrar</h1>
                    <form onSubmit={loginFunc}>
                        <div>
                            <input className="input-email" type="email" placeholder="Email" name="email" required/>
                        </div>
                        <div>
                            <input className="input-senha" placeholder="Senha" type="password" name="senha" required/>
                        </div>                    
                        {/* <button type="submit">Logar</button> */}
                        <div>
                            <button className="matt-btn" type="submit" >Login</button>
                        </div>
                        <div className="options-login">
                            <a id="recuperarSenha" href="#">Recuperar senha</a>
                            <span>|</span>
                            {/* <a id="cadastrar" href="/cadastrar"> Cadastrar-se</a> */}
                            <Link id="cadastrar" to="/cadastrar">Cadastrar-se</Link>
                        </div>
                    </form>
                </div>
            </Container>            
        </React.Fragment>
    );
});