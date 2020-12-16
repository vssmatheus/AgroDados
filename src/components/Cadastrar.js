import React, {useCallback} from 'react';
import { withRouter, Link } from "react-router-dom";
import { authConfig } from "../auth/config";
import {FiArrowLeft} from 'react-icons/fi';
import '../css/login.css';
import {CssBaseline} from '@material-ui/core';
import {Container} from '@material-ui/core';

export const Cadastrar = withRouter((props) => {
    const { history } = props;

    const cadastroFunc = useCallback(
        async (event) =>{
            event.preventDefault();
            const {email, senha} = event.target.elements; 
            try{
                await authConfig.auth().createUserWithEmailAndPassword(email.value, senha.value);
                history.push('/');
            } catch (error) {
                console.log(error);
            }
        },
        [history],
    );
    return (
        <React.Fragment>
            <CssBaseline/>
            <Link className="back-link" to="/logar">
                <FiArrowLeft size={32} color="#555"/>
            </Link>
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
                </div>
            </Container>
        </React.Fragment>
    )
});