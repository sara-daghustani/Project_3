import React from 'react';
import Volunteer from './Volunteer';
import Organization from './Organization';
import "./style.css";
import axios from 'axios'
export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            age: '',
            gender: '',
            email: '',
            phoneNumber: '',
            location: '',
            password: '',
            password_confirmation: '',
            isOrganization: false,
            error: {
                userName: false,
                age: false,
                gender: false,
                email: false,
                phoneNumber: false,
                location: false,
                password: false,
                password_confirmation: false,
            }
        };
    }
    handleNotification = event => {
        event.preventDefault();
        const { userName, age, gender, email, phoneNumber, location, password, volenteer, password_confirmation } = this.state;
       
        if (volenteer) {
            if (userName && age && gender && email && phoneNumber && location && password && password_confirmation) {
                alert(`Thank you for Registering ${this.state.userName}`);
            }
            else {
                if (!age && !gender) {
                    let errors = { ...this.state.error }
                    errors['gender'] = true;
                    errors['age'] = true;
                    this.setState({
                        error: errors
                    })
                }
                alert("Please fill complete form")
            }
        }
        else {
            if (userName && email && phoneNumber && location && password) {
                alert(`Thank you for Registering ${this.state.userName}`);
            }
            else {
                alert("Please fill complete form")
            }
        }
        console.log(this.state); 
        axios.post('https://cors-anywhere.herokuapp.com/https://volunteery-api.herokuapp.com/api/v1/users/', {
            "email": this.state.email,
            "userName": this.state.userName,
            "age":this.state.age,
            "phoneNumber": this.state.phoneNumber,
            "location": this.state.location,
            "gender": this.state.gender,
            "password": this.state.password,
            "password_confirmation": this.state.password_confirmation,
            "isOrganization": this.state.isOrganization
            
    })
        .then(response => {
            console.log(response); 
        })
        .catch(error => {
            console.log(error);
        })
    };
    functionOrganization = (event) => {
        this.setState({
            isOrganization: true
        })
    }
    functionVolenteer = (event) => {
        this.setState({
            isOrganization: false
        })
    }
    functionuserName = (event) => {
        if (event.target.value && !event.target.value.match(/^([A-Za-z]+?)\s([A-Za-z]+?)$/) || event.target.value.length >= 20) {
            this.setError('userName', true);
        }
        else {
            this.setError('userName', false);
        }
        this.setState({
            userName: event.target.value
        })
    }
    functionAge = (event) => {
        if (!event.target.value) {
            this.setError('age', true);
        }
        else {
            this.setError('age', false);
        }
        this.setState({
            age: event.target.value
        })
    }
    setError = (name, value) => {
        let errors = { ...this.state.error }
        errors[name] = value;
        this.setState({
            error: errors
        })
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
    functionPhone = (event) => {
        let pat = new RegExp(/^05[0-9]{8}$/)
        if (event.target.value && !pat.test(event.target.value)) {
            this.setError('phoneNumber', true);
        }
        else {
            this.setError('phoneNumber', false);
        }
        this.setState({
            phoneNumber: event.target.value
        })
    }
    functionLocation = (event) => {
        if (event.target.value && event.target.value.length > 20) {
            this.setError('location', true);
        }
        else {
            this.setError('location', false);
        }
        this.setState({
            location: event.target.value
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
    functionPassword_confirmation = (event) => {
        let pat = new RegExp(/[^a-zA-Z0-9]/)
        if (event.target.value && pat.test(event.target.value) || event.target.value.length > 8) {
            this.setError('password_confirmation', true);
        }
        else {
            this.setError('password_confirmation', false);
        }
        this.setState({
            password_confirmation: event.target.value
        })
    }
    functionGender = (event) => {
        if (!event.target.value) {
            this.setError('gender', true);
        }
        else {
            this.setError('gender', false);
        }
        this.setState({
            gender: event.target.value
        })
    }
    render() {
        if (this.state.isOrganization == true) {
            return (
                <form onSubmit={this.handleNotification} className="base-container">
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <p>
                                    <lable htmlFor="userType">Type of Account: </lable>
                                    <label>
                                        <input id="volenteer" class="with-gap" value={this.state.volenteer} onChange={this.functionVolenteer} name="group1" type="radio" />
                                        <span> Volenteer </span>
                                    </label>
                                    <label style={{ marginLeft: '10px' }}>
                                        <input class="with-gap" id="organization" value={this.state.isOrganization} onChange={this.functionOrganization} name="group1" type="radio" checked />
                                        <span> Organization </span>
                                    </label>
                                </p>
                            </div>
                            <Organization error={this.state.error} name={this.state.userName} email={this.state.email} phoneNumber={this.state.phoneNumber} location={this.state.location} password={this.state.password} password_confirmation={this.state.password_confirmation} functionPhone={(v) => this.functionPhone(v)} functionuserName={(v) => this.functionuserName(v)} functionEmail={(v) => this.functionEmail(v)} functionLocation={(v) => this.functionLocation(v)} functionOrganization={(v) => this.functionOrganization(v)} functionVolenteer={(v) => this.functionVolenteer(v)} functionPassword={(v) => this.functionPassword(v)} functionPassword_confirmation={(v) => this.functionPassword_confirmation(v)}
                            />
                            <div className="footer">
                                <button type="submit" class="btn btn-info">Register</button>
                            </div>
                            <div class="Link">
                                <a class="grey-text" href="#!"> Already have an account LogIn</a>
                            </div>
                        </div>
                    </div>
                </form>
            )
        }
        else  {
            return (
                <form onSubmit={this.handleNotification} className="base-container">
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <p>
                                    <lable htmlFor="userType">Type of Account: </lable>
                                    <label>
                                        <input id="volenteer" class="with-gap" value={this.state.volenteer} onChange={this.functionVolenteer} name="group1" type="radio" checked />
                                        <span> Volenteer </span>
                                    </label>
                                    <label style={{ marginLeft: '10px' }}>
                                        <input class="with-gap" id="organization" value={this.state.isOrganization} onChange={this.functionOrganization} name="group1" type="radio" />
                                        <span> Organization </span>
                                    </label>
                                </p>
                            </div>
                            <Volunteer error={this.state.error} age={this.state.age} gender={this.state.gender} name={this.state.userName} email={this.state.email} phoneNumber={this.state.phoneNumber} location={this.state.location} password={this.state.password} password_confirmation={this.state.password_confirmation} functionGender={(v) => this.functionGender(v)} functionPhone={(v) => this.functionPhone(v)} functionuserName={(v) => this.functionuserName(v)} functionAge={(v) => this.functionAge(v)} functionEmail={(v) => this.functionEmail(v)} functionLocation={(v) => this.functionLocation(v)} functionOrganization={(v) => this.functionOrganization(v)} functionVolenteer={(v) => this.functionVolenteer(v)}  functionPassword_confirmation={(v) => this.functionPassword_confirmation(v)} functionPassword={(v) => this.functionPassword(v)} />
                            <div className="footer">
                                <button type="submit" class="waves-effect waves-light btn">Register</button>
                            </div>
                            <div class="Link">
                                <a class="grey-text" href="./login/login"> Already have an account LogIn</a>
                            </div>
                        </div>
                    </div>
                </form>
            )
        }
    }
}
