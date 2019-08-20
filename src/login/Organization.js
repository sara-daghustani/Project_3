import React, { Component } from 'react'



export default class Organization extends Component {

    render() {

        return (
            <form onSubmit={this.handleNotification} className="base-container">
                <div className="header">Register</div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            {/* <lable htmlFor="name">Full Name</lable> */}
                            <input type="text" className={`${(this.props.error && !this.props.error['name'])?'':'invalid'}`} name="name" placeholder="Full Name" value={this.props.name} onChange={(v) => this.props.functionName(v)} />
                            <span className="helper-text" data-error="Invalid full name"></span>
                        </div>
                        <div className="form-group">
                            {/* <lable htmlFor="location">Location</lable> */}
                            <input type="text" name="location" placeholder="City" value={this.props.location} onChange={(value) => this.props.functionLocation(value)} />
                            {
                                this.props.error && this.props.error.location &&
                                <span className="helper-text">String must be within 20 character</span>
                            }
                        </div>
                        <div className="form-group">
                            {/* <lable htmlFor="phonenumber">Phone Number</lable> */}
                            <input type="tel" name="phonenumber" placeholder="Phone Number" value={this.props.phonenumber} onChange={(v) => this.props.functionPhone(v)} />
                            {
                                this.props.error && this.props.error.phonenumber &&
                                <span className="helper-text">Invalid Phone Number eg. 05xxxxxxxx</span>
                            }
                        </div>
                        <div className="form-group">
                            {/* <lable htmlFor="Email">Email</lable> */}
                            <input id="email" type="email" name="email" placeholder="Email" value={this.props.email} onChange={(v) => this.props.functionEmail(v)} />
                            {
                                this.props.error && this.props.error.email &&
                                <span className="helper-text">Invalid email</span>
                            }   
                        </div>
                        <div className="form-group">
                            {/* <lable htmlFor="password">Password</lable> */}
                            <input type="password" name="password" placeholder="Password" value={this.props.password} onChange={(v) => this.props.functionPassword(v)} />
                            {
                                this.props.error && this.props.error.password &&
                                <span className="helper-text">Invalid Password <br/> eg no special character allow Or max length is 8</span>
                            }
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
