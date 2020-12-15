import React, {useCallback} from 'react';
import { withRouter } from "react-router-dom";
import { authConfig } from "../auth/config";

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
        <div>
            <h1>Cadastrar</h1>
            <form onSubmit={cadastroFunc}>
                <label>Email</label>
                <input type="email" name="email"/>
                <label>senha</label>
                <input type="password" name="senha"/>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
});