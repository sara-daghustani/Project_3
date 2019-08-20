import React, { Component } from 'react'
import "./Newpost.css";

// import { Modal, Button , Dropdown , Divider , Select ,actionHandler } from 'react-materialize'


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
   
<form className= "base-container"onSubmit={this.handleSubmit} > 
        <div class="form-group has-success"> 
            <label class="control-label col-sm-2">Event Name</label> 
            <div className='row'>
            <div class="col-sm-6"> 
                <input class="form-control" type="text" placeholder="Enter the Event Name" 
                value={this.state.eventName} onChange={this.handleEventNameChange}/> 
            </div> 
            <div className="col-sm-2">
            <select class="mdb-select md-form" value={this.state.location} onChange={this.handleLocationChange}>
        <option value="" disabled selected>Choose the event city</option>
        <option value="Riyadh">Riyadh</option>
        <option value="Jeddah">Jeddah</option>
        <option value="Ahsa">Ahsa</option>
        <option value="Abha">Abha</option>
        <option value="Khobar">Khobar</option>
        <option value="Dammam">Dammam</option>
        <option value="AlBahah">AlBahah</option>
        <option value="AlQsim">AlQsim</option>
        </select>
            </div>
            </div>
        </div> 

        <div class="form-group has-success"> 
            <label class="control-label col-sm-2">Event Start Date</label> 
            <div className='row'>
            <div class="col-sm-6"> 
                <input class="form-control" type="date"   
                value={this.state.eventDate} onChange={this.handleEventDateChange}/> 
            </div>
            <div class="col-sm-2"> 
        <select class="mdb-select md-form" value={this.state.volunteersCategory} onChange={this.handleCategoryChange}>
        <option value="" disabled selected>Choose the volunteers category</option>
        <option value="Riyadh">Children</option>
        <option value="Jeddah">Teenegers</option>
        <option value="Ahsa">Adults</option>
        <option value="Abha">Young</option>
        </select>
        </div> 
            </div>
        </div> 

        <div class="form-group has-success"> 
            <label class="control-label col-sm-2">Event Logo/Image </label> 
            <div class="col-sm-6"> 
                <input class="form-control" type='file' placeholder="Enter the Event Image"
                value={this.state.eventImage} onChange={this.handleImageChange}/> 
            </div> 
        </div>

        <div class="form-group has-success"> 
            <label class="control-label col-sm-2">Volunteers Number </label> 
            <div class="col-sm-6"> 
                <input class="form-control" type='number' placeholder="Enter the required number of Volunteers"
                value={this.state.volunteersNumber} onChange={this.handleVolunteersChange}/> 
            </div> 
        </div>

        <div class="form-group has-success"> 
            <label class="control-label col-sm-2">Event Describtion </label> 
            <div class="col-lg-4"> 
                <textarea class="form-control" placeholder="Enter an idea about the event"
                value={this.state.eventAct} onChange={this.handleEventActivityChange}/> 
            </div> 
        </div>


        <div class="form-group has-success">
        <div className='row'>
        <div className="col-lg-2"> 
        
        </div>
        </div>
        </div>
        {/* <div class="form-group has-success">
        
        </div> */}
        
        <div class="container"> 
            <button type='submit' class="btn btn-primary">Login</button> 
             
        </div> 
    </form>     

    
        )
    }
}

export default Newpost
