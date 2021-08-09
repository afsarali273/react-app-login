import React, {Component} from 'react';
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        };
        this.handleLoginBtnClick = this.handleLoginBtnClick.bind(this);
    }

    handleLoginBtnClick = (event) => {
        console.log("email : " + this.state.email)
        console.log("password : " + this.state.password)
        const {email, password} = this.state;

        let config = {
            headers: {
                authorization: `Basic ` + btoa(email + ":" + password),
            }
        }

        axios.post("http://localhost:8080/api/customer/login", {}, config)
            .then(response => {
                console.log("LOGGED IN SUCCESS" + JSON.stringify(response.data))
                sessionStorage.setItem("logged_in", "true");
                sessionStorage.setItem("user", JSON.stringify(response.data));
                this.props.handleLoginAuth();
            })
            .catch(error => {
                console.log("login error", error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form style={{display: "flex", justifyContent: "center", margin: "50px", height: "25px"}}>
                    <input
                        type="contact"
                        name="contact"
                        placeholder="contact"
                        value={this.state.email}
                        onChange={(event) => this.setState({
                            email: event.target.value
                        })}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(event) => this.setState({
                            password: event.target.value
                        })}
                        required
                    />

                    <button type="submit" onClick={this.handleLoginBtnClick}>Login</button>
                </form>
            </div>
        )
    }
}
