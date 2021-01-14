import React, { useEffect, useState, createContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent:"center",
      alignItems: "center ",
      height: "100vh"
    },
  }));

export const AuthContext = createContext();

export const AuthProvider = (props) =>{
    const { children } = props;
    const [usuario, setUsuario] = useState(null);
    const [aguardando, setAguardando] = useState(true);
    const classes = useStyles();

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            setUsuario(user);
            setAguardando(false);
        });
    }, []);

    if (aguardando){
        return (
            <div className={classes.root}>
                <CircularProgress size={40} />
            </div>
        ); 
    }

    return (
        <AuthContext.Provider value={{ usuario }}>{children}</AuthContext.Provider>
    );
};