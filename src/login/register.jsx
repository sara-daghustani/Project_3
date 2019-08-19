import React from 'react';
import Volunteer from './Volunteer';
import Organization from './Organization';
import {Button , Dropdown , Divider , Select ,RadioGroup } from 'react-materialize';
export class Register extends React.Component{
    state ={
            usertype: '',
            name: '',
            age: '',
            email: '',
            phonenumber: '',
            location: '',
            password: '',
            organization: false,
            volenteer: true

        
    }
    functionOrganization = (event) => {
        this.setState({
            organization: true,
            volenteer: false

        })
        console.log(this.state.organization)
        console.log(this.state.volenteer)

    }

    functionVolenteer = (event) => {
        this.setState({
            volenteer: true,
            organization: false

        })
        console.log(this.state.organization)
        console.log(this.state.volenteer)

    }

    functionName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    functionAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    functionEmail = (event) => {
        this.setState({
            email: event.target.value
        })
       
    }

    functionPhone = (event) => {
        this.setState({
            phonenumber: event.target.value
        })
    }

    functionLocation = (event) => {
        this.setState({
            location: event.target.value
        })
    }


    functionPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleNotification = event => {
        alert(`Thank you for Registering ${this.state.name}`)
    }

    render(){
     
        if (this.state.organization == true){
            return (
                <form onSubmit={this.handleNotification} className="base-container">
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <p>
                                <lable htmlFor="userType">Type of Account: </lable>
                                    <label> 
                                        <input id= "volenteer"  class= "with-gap" value={this.state.volenteer} onChange={this.functionVolenteer} name="group1" type="radio"   />
                                            <span> Volenteer </span>
                                    </label> 
                                    <label style={{marginLeft:'10px'}}>
                                        <input class= "with-gap" id= "organization" value={this.state.organization} onChange={this.functionOrganization} name="group1" type="radio" checked/>
                                        <span> Organization </span>
                                    </label>
                                </p>
                            </div>
                                <Organization  name={this.state.name} email={this.state.email} phonenumber={this.state.phonenumber} location={this.state.location} password={this.state.password}  functionPhone={(v)=>this.functionPhone(v)} functionName={(v)=>this.functionName(v)}  functionEmail={(v)=>this.functionEmail(v)} functionLocation={(v)=>this.functionLocation(v)} functionOrganization={(v)=>this.functionOrganization(v)} functionVolenteer={(v)=>this.functionVolenteer(v)} functionPassword={(v)=>this.functionPassword(v) } 
                                />

                            <div className="footer">
                                <button type= "submit" class="waves-effect waves-light btn">Register</button> 
                            </div>
                            <div class="Link"> 
                                <a class="grey-text" href="#!"> You have an account LogIn</a>
                            </div>
                        </div>
                    </div>
                </form>
            )
        }

        else if (this.state.volenteer == true){
            return (
                <form onSubmit={this.handleNotification} className="base-container">
                    <div className="content">
                        <div className="form">
                            <div className="form-group">
                                <p>
                                <lable htmlFor="userType">Type of Account: </lable>
                                    <label> 
                                        <input id= "volenteer"  class= "with-gap" value={this.state.volenteer} onChange={this.functionVolenteer} name="group1" type="radio" checked  />
                                            <span> Volenteer </span>
                                    </label> 
                                    <label style={{marginLeft:'10px'}}>
                                        <input class= "with-gap" id= "organization" value={this.state.organization} onChange={this.functionOrganization} name="group1" type="radio" />
                                        <span> Organization </span>
                                    </label>
                                </p>
                            </div>

                            <Volunteer age={this.state.age} name={this.state.name} email={this.state.email} phonenumber={this.state.phonenumber} location={this.state.location} password={this.state.password} functionPhone={(v)=>this.functionPhone(v)} functionName={(v)=>this.functionName(v)} functionAge={(v)=>this.functionAge(v)} functionEmail={(v)=>this.functionEmail(v)} functionLocation={(v)=>this.functionLocation(v)} functionOrganization={(v)=>this.functionOrganization(v)} functionVolenteer={(v)=>this.functionVolenteer(v)} functionPassword={(v)=>this.functionPassword(v)}/>

                            <div className="footer">
                                <button type= "submit" class="waves-effect waves-light btn">Register</button> 
                            </div>
                            <div class="Link"> 
                                <a class="grey-text" href="#!"> You have an account LogIn</a>
                            </div>

                        </div>
                    </div>
                </form>
            )


        }
    }

}
