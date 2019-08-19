import React, { Component } from 'react'
import {Button , Dropdown , Divider , Select ,RadioGroup } from 'react-materialize';

export default class Volunteer extends Component {
    render() {
        return( 
            <form onSubmit={this.handleNotification} className="base-container">
                <div className= "header">Register</div>
                <div className="content">
                    <div className="form">

                        <div className="form-group">
                            {/* <lable htmlFor="name">Full Name</lable> */}
                            <input type="text" name="name" placeholder= "Full Name" value={this.props.name} onChange={(v)=>this.props.functionName(v)}/>  
                        </div>
    
                        <div className="form-group">
                            <Select value={this.props.age} onChange={(v)=>this.props.functionAge(v)}>
                                <option class= "grey-text lighten-4" value="" disabled>
                                Choose your Age Range
                                </option>
                                <option value="1">
                                7-12 Years
                                </option>
                                <option value="2">
                                13-20 Years
                                </option>
                                <option value="3">
                                21-40+ Years
                                </option>
                            </Select>
                        </div>
    
                        <div className="form-group">
                            {/* <lable htmlFor="location">Location</lable> */}
                            <input type="text" name="location" placeholder= "City" value={this.props.location} onChange={(v)=>this.props.functionLocation(v)}/>  
                        </div>
    
                        <div className="form-group">
                            {/* <lable htmlFor="phonenumber">Phone Number</lable> */}
                            <input type="tel" name="phonenumber" placeholder= "Phone Number" value={this.props.phonenumber} onChange={(v)=>this.props.functionPhone(v)}/>  
                        </div>
    
    
                        <div className="form-group">
                            {/* <lable htmlFor="Email">Email</lable> */}
                            <input type="email" name="email" placeholder= "Email" value={this.props.email} onChange={(v)=>this.props.functionEmail(v)}/>  
                        </div>
    
    
                        <div className="form-group">
                            {/* <lable htmlFor="password">Password</lable> */}
                            <input type="password" name="password" placeholder= "Password" value={this.props.password} onChange={(v)=>this.props.functionPassword(v)}/>  
                        </div>
                    </div>
                </div>
            </form>
            );
    }
}