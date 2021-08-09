import React,{Component} from 'react';
import Login from "../Auth/Login";
import Header from "../Header/Header";
import SignIn from "../Auth/SignIn";

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.handleLoginAuth=this.handleLoginAuth.bind(this);
    }

    handleLoginAuth(data){
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
    }

    render(){
       const {handleLogout} = this.props;

        return(
            <div>
                <p> This is Home Page </p>
                <Header {...this.props} handleLogout={handleLogout}/>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Login handleLoginAuth={this.handleLoginAuth}/>
                {/*<SignIn/>*/}
            </div>
        )
    }
}
