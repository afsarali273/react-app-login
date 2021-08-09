import React,{Component} from 'react';
import Header from "../Header/Header";

export default class Dashboard extends Component{

    constructor(props) {
        super(props);
    }

    render(){

       const  {handleLogout,user} = this.props;

        return(
            <div>
                <Header {...this.props} handleLogout={handleLogout}/>

                <h2> Welcome to Dashboard Page !!</h2>
                <h1>Status: {this.props.loggedInStatus}</h1>

                <div style={{display:"flex",flexDirection:"column"}}>
                   <span> First Name : {user.first_name}</span>
                    <span> Last Name : {user.last_name}</span>
                    <span> Contact : {user.contact_number}</span>
                    <span> Email : {user.email_address}</span>
                </div>
            </div>
        )
    }
}
