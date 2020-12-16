import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { Cadastrar } from "./components/Cadastrar";
import { Dashboard } from "./components/Dashboard";
import { Localidades } from "./components/Localidades";
import { Logar } from "./components/Logar";
import { AuthProvider } from "./auth/AuthContext";
import { RotaPrivada } from "./auth/RotaPrivada";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
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
            <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
            <Route exact path="/localidades" render={props => <Localidades {...props} />} />
          </Switch>
        </div>
        <Route exact path="/logar" component={Logar} />
        <Route exact path="/cadastrar" component={Cadastrar} />      
                  
      </BrowserRouter>        
    </AuthProvider>   
  );
}

