import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";

export default class RouterClass extends Component {

    constructor() {
        super();

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.checkLoginStatus();
    }

    checkLoginStatus() {

        let loggedIn = sessionStorage.getItem("logged_in");

        if (loggedIn === 'true' && this.state.loggedInStatus === "NOT_LOGGED_IN") {
            this.setState({
                loggedInStatus: "LOGGED_IN",
                user: JSON.parse(sessionStorage.getItem("user"))
            });
        } else if (loggedIn !== 'true' && (this.state.loggedInStatus === "LOGGED_IN")) {
            this.setState({
                loggedInStatus: "NOT_LOGGED_IN",
                user: {}
            });
        }
    }


    handleLogin(data) {
        this.setState({
            loggedInStatus: "LOGGED_IN",
            user: JSON.parse(sessionStorage.getItem("user"))
        });
    }

    handleLogout(data) {
        if(this.state.loggedInStatus !== 'NOT_LOGGED_IN'){
            this.setState({
                loggedInStatus: "LOGGED_OUT",
                user: {}
            });
        }
    }

    render() {
        return (<div>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}
                           render={props => (<Home {...props}
                                                   loggedInStatus={this.state.loggedInStatus}
                                                   handleLogin={this.handleLogin}
                                                   handleLogout={this.handleLogout}
                           />)}
                    />
                    <Route exact path={"/dashboard"}
                           render={props => (<Dashboard {...props}
                                                        loggedInStatus={this.state.loggedInStatus}
                                                        handleLogout={this.handleLogout}
                                                        user={this.state.user}
                    />)}/>
                </Switch>

            </BrowserRouter>
        </div>)
    }
}
