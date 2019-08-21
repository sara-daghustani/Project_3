import React from 'react';
import "./style.css";
import axios from 'axios'
export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            error: {
                email: false,
                password: false,
            }
        }
    }
   
    functionEmail = (event) => {
        let pat = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        if (event.target.value && !pat.test(event.target.value)) {
            this.setError('email', true);
        }
        else {
            this.setError('email', false);
        }
        this.setState({
            email: event.target.value
        })
    }
    functionPassword = (event) => {
        let pat = new RegExp(/[^a-zA-Z0-9]/)
        if (event.target.value && pat.test(event.target.value) || event.target.value.length > 8) {
            this.setError('password', true);
        }
        else {
            this.setError('password', false);
        }
        this.setState({
            password: event.target.value
        })
    }
    setError = (name, value) => {
        let errors = { ...this.state.error }
        errors[name] = value;
        this.setState({
            error: errors
        })
    }
    handleNotification = event => {
        event.preventDefault();
        const { email, password } = this.state;
        if (email && password) {
            alert(`Thank you for log in`);
        }
        else {
            alert("Please fill complete form")
        }
                 
    };
    componentDidMount(){
        axios.get('https://cors-anywhere.herokuapp.com/https://volunteery-api.herokuapp.com/api/v1/users')
        .then(res => {
            console.log(res);
            
        })
        .catch(err =>{
            console.log(err);
            
        })
    }
    render(){
        return( 
        <form onSubmit={this.handleNotification} className="base-container">
            <div className= "header">Login</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        {/* <lable htmlFor="Email" for="last_name">Email</lable> */}
                        <input type="email" name="email" placeholder= "email"  value={this.state.email} onChange={this.functionEmail} />  
                        {
                                this.state.error && this.state.error.email &&
                                <span className="helper-text">Invalid email</span>
                            } 
                    </div>
                    <div className="form-group">
                        {/* <lable htmlFor="password">Password</lable> */}
                        <input type="password" name="password" placeholder= "password"  value={this.state.password} onChange={this.functionPassword}/>  
                        {
                                this.state.error && this.state.error.password &&
                                <span className="helper-text">Invalid Password <br/>eg no special character allow Or max length is 8</span>
                        }
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="submit" class="waves-effect waves-light btn">Login</button>
            </div>
            <div class="Link"> 
                <a class="grey-text" href="/login/register"> New user? Register to create your account</a>
            </div>
        </form>
        );
    }
}
