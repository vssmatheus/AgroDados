import React from 'react';
import { authConfig } from "../auth/config";

export const Inicio = () => {
    return (
        <div>
            <h1>Inicio</h1>
            <button onClick={() => authConfig.auth().signOut()}>Desligar</button>
        </div>
    )
}