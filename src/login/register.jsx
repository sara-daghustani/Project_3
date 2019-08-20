import React from 'react';
import Volunteer from './Volunteer';
import Organization from './Organization';
import "./style.css";
export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            gender: '',
            email: '',
            phonenumber: '',
            location: '',
            password: '',
            organization: false,
            volenteer: true,
            error: {
                name: false,
                age: false,
                gender: false,
                email: false,
                phonenumber: false,
                location: false,
                password: false,
            }
        };
    }
    handleNotification = event => {
        event.preventDefault();
        const { name, age, gender, email, phonenumber, location, password, volenteer } = this.state;
        if (volenteer) {
            if (name && age && gender && email && phonenumber && location && password) {
                alert(`Thank you for Registering ${this.state.name}`);
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
            if (name && email && phonenumber && location && password) {
                alert(`Thank you for Registering ${this.state.name}`);
            }
            else {
                alert("Please fill complete form")
            }
        }
    };
    functionOrganization = (event) => {
        this.setState({
            organization: true,
            volenteer: false
        })
    }
    functionVolenteer = (event) => {
        this.setState({
            volenteer: true,
            organization: false
        })
    }
    functionName = (event) => {
        if (event.target.value && !event.target.value.match(/^([A-Za-z]+?)\s([A-Za-z]+?)$/) || event.target.value.length >= 20) {
            this.setError('name', true);
        }
        else {
            this.setError('name', false);
        }
        this.setState({
            name: event.target.value
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
            this.setError('phonenumber', true);
        }
        else {
            this.setError('phonenumber', false);
        }
        this.setState({
            phonenumber: event.target.value
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
        if (this.state.organization == true) {
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
                                        <input class="with-gap" id="organization" value={this.state.organization} onChange={this.functionOrganization} name="group1" type="radio" checked />
                                        <span> Organization </span>
                                    </label>
                                </p>
                            </div>
                            <Organization error={this.state.error} name={this.state.name} email={this.state.email} phonenumber={this.state.phonenumber} location={this.state.location} password={this.state.password} functionPhone={(v) => this.functionPhone(v)} functionName={(v) => this.functionName(v)} functionEmail={(v) => this.functionEmail(v)} functionLocation={(v) => this.functionLocation(v)} functionOrganization={(v) => this.functionOrganization(v)} functionVolenteer={(v) => this.functionVolenteer(v)} functionPassword={(v) => this.functionPassword(v)}
                            />
                            
                            <div className="footer">
                                <button type="submit" class="waves-effect waves-light btn">Register</button>
                            </div>
                            <div class="Link">
                                <a class="grey-text" href="#!"> Already have an account LogIn</a>
                            </div>
                        </div>
                    </div>
                </form>
            )
        }
        else if (this.state.volenteer == true) {
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
                                        <input class="with-gap" id="organization" value={this.state.organization} onChange={this.functionOrganization} name="group1" type="radio" />
                                        <span> Organization </span>
                                    </label>
                                </p>
                            </div>
                            <Volunteer error={this.state.error} age={this.state.age} gender={this.state.gender} name={this.state.name} email={this.state.email} phonenumber={this.state.phonenumber} location={this.state.location} password={this.state.password} functionGender={(v) => this.functionGender(v)} functionPhone={(v) => this.functionPhone(v)} functionName={(v) => this.functionName(v)} functionAge={(v) => this.functionAge(v)} functionEmail={(v) => this.functionEmail(v)} functionLocation={(v) => this.functionLocation(v)} functionOrganization={(v) => this.functionOrganization(v)} functionVolenteer={(v) => this.functionVolenteer(v)} functionPassword={(v) => this.functionPassword(v)} />
                            <div className="footer">
                                <button type="submit" class="waves-effect waves-light btn">Register</button>
                            </div>
                            <div class="Link">
                                <a class="grey-text" href="#!"> Already have an account LogIn</a>
                            </div>
                        </div>
                    </div>
                </form>
            )
        }
    }
}
