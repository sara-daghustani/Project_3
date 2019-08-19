import React from 'react';

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: ''

        }
    }
   
    functionEmail = (event) => {
        this.setState({
            email: event.target.value
        })
       
    }
    functionPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    render(){
        return( 
        <div className="base-container">
            <div className= "header">Login</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        {/* <lable htmlFor="Email" for="last_name">Email</lable> */}
                        <input type="email" name="email" placeholder= "email" value={this.state.email} onChange={this.functionEmail} />  
                    </div>
                    <div className="form-group">
                        {/* <lable htmlFor="password">Password</lable> */}
                        <input type="password" name="password" placeholder= "password" value={this.state.password} onChange={this.functionPassword}/>  
                    </div>
                </div>
            </div>
            <div className="footer">
                <a class="waves-effect waves-light btn">Login</a>
            </div>
            <div class="Link"> 
                <a class="grey-text" href="#!"> You don't have an Account Register</a>
            </div>
        </div>
        );
    }
}