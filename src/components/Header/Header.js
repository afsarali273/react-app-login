import React,{Component} from 'react';

export default class Header extends Component{

    constructor(props) {
        super(props);
        this.handleSignout=this.handleSignout.bind(this);
    }

    handleSignout(data){
     this.props.handleLogout(data);
     sessionStorage.setItem("logged_in", "false");
     sessionStorage.setItem("user",Object.create({}));
      this.props.history.push("/");
    }


    render() {
        return (
            <div>
                <button onClick={this.handleSignout} type="button"> Logout !</button>
            </div>
        );
    }
}
