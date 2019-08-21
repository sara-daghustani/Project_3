import React, { Component } from 'react'
import "./login/style.css";

import { Modal, Button , Dropdown , Divider , Select ,actionHandler } from 'react-materialize'


class Newpost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             eventName: '',
             eventAct: '',
             location: '',
             eventDate: '',
             volunteersCategory:'',
             volunteersNumber: 0,
             eventImage: '',
             volunteersMale: '',
             volunteersFamale: ''
        }
    }

  
    

    handleEventNameChange = (event) => {
        this.setState({
            eventName: event.target.value
        })
    }

    handleEventActivityChange = (event) => {
        this.setState({
            eventAct: event.target.value
        })
    }

    handleLocationChange = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    handleEventDateChange = (event) => {
        this.setState({
            eventDate: event.target.value
        })
    }

    handleVolunteersChange = (event) => {
        this.setState({
            volunteersNumber: event.target.value
        })
    }

    handleImageChange = (event) => {
        this.setState({
            eventImage: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            volunteersCategory: event.target.value
        })
    }

    handleMaleChange = (event) => {
        this.setState({
            volunteersMale: event.target.value
        })
    }

    handleFamaleChange = (event) => {
        this.setState({
            volunteersFamale: event.target.value
        })
    }
    
    
    handleSubmit = event => {
            alert(`EN ${this.state.eventName} EA ${this.state.eventAct} LC ${this.state.location} CG ${this.state.volunteersCategory}`)
    }
    render() {
        return (
        <form onSubmit={this.handleSubmit}  className="base-container">
            <div className="header">New Post</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <input type="text" placeholder="Enter the Event Name" value={this.state.eventName} onChange={this.handleEventNameChange}/> 
                    </div>
                  
                    <div className="form-group">
                            <Select value={this.state.location} onChange={this.handleLocationChange}>
                                <option value="" disabled>
                                Choose the event city
                                </option>
                                <option value="Riyadh">Riyadh</option>
                                <option value="Jeddah">Jeddah</option>
                                <option value="Ahsa">Ahsa</option>
                                <option value="Abha">Abha</option>
                                <option value="Khobar">Khobar</option>
                                <option value="Dammam">Dammam</option>
                                <option value="AlBahah">AlBahah</option>
                                <option value="AlQsim">AlQsim</option>
                            </Select>
                    </div>
                    <div className="form-group">
                        <lable htmlFor="name">Event Start Date</lable>
                        <input type="date"  placeholder="Start Date" value={this.state.eventDate} onChange={this.handleEventDateChange}/>
                    </div>
                    {/* <div className="form-group">
                        <lable htmlFor="name">Event End Date</lable>
                        <input type="date"  placeholder="Start Date" value={this.state.eventDate} onChange={this.handleEventDateChange}/> 
                    </div> */}
                    <div className="form-group">
                            <Select  value={this.state.volunteersCategory} onChange={this.handleCategoryChange}>
                                <option value="" disabled>
                                Choose the volunteers category
                                </option>
                                <option value="Riyadh">Children</option>
                                <option value="Jeddah">Teenegers</option>
                                <option value="Ahsa">Adults</option>
                                <option value="Abha">Young</option>
                            </Select>
                    </div>
                    <div className="form-group">
                        <lable htmlFor="name">Event Image</lable> <br/>
                        <input type='file' placeholder="Enter the Event Image" value={this.state.eventImage} onChange={this.handleImageChange}/>
                    <hr/>
                    </div>
                    <div className="form-group">
                        <lable htmlFor="name">Volunteers Number</lable>
                        <input type="number"  placeholder="Enter the required number of Volunteers" value={this.state.volunteersNumber} onChange={this.handleVolunteersChange}/>
                    </div>
                    <div className="form-group">
                        <lable htmlFor="name">Event Describtion</lable>
 <textarea  type="number"  placeholder="Enter an idea about the event" value={this.state.eventAct} onChange={this.handleEventActivityChange}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="submit" class="waves-effect waves-light btn">Submit</button>
            </div>
        </form>
    
        )
    }
}

export default Newpost
