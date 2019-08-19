import React, { Component } from 'react'
import {Button , Dropdown , Divider , Select ,RadioGroup } from 'react-materialize';

export default class Organization extends Component {
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
                            {/* <lable htmlFor="location">Location</lable> */}
                            <input type="text" name="location" placeholder= "City" value={this.props.location} onChange={(value)=>this.props.functionLocation(value)}/>  
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