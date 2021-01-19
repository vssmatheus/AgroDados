import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { Home } from "./components/Home";
import { Cadastrar } from "./components/Cadastrar";
import { Dashboard } from "./components/Dashboard";
import Localidades from "./components/Localidades";
import { Logar } from "./components/Logar";
import { RecuperarSenha } from "./components/RecuperarSenha";
import { AuthProvider } from "./auth/AuthContext";
import { RotaPrivada } from "./auth/RotaPrivada";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems :"center",
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <AuthProvider>
      <BrowserRouter>
        <RotaPrivada exact from="/" component={Inicio} />
        <div className={classes.container}>
          <Switch>
            <Route exact path="/" component={Home}/>    
            <Route exact path="/dashboard" component={Dashboard}  />
            <Route exact path="/localidades" component={Localidades} /> 
          </Switch>
        </div>        
        <Route exact path="/logar" component={Logar}/>
        <Route exact path="/cadastrar" component={Cadastrar} />
        <Route exact path="/recuperar" component={RecuperarSenha} /> 
      </BrowserRouter>        
    </AuthProvider>   
  );
}

