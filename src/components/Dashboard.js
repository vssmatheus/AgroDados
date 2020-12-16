import React from "react";
import { withRouter } from "react-router-dom";

export const Dashboard = withRouter(({history}) => {
    return (
        <div className="card-login">
            <h1>Dashboard</h1>
        </div>
    );
});