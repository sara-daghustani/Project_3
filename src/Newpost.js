import React, { Component } from 'react'
import "./login/style.css";

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
   <div className= "base-container">
<form  onSubmit={this.handleSubmit} > 
        <div > 
            <label >Event Name</label> 
            <div className='row'>
            <div > 
                <input type="text" placeholder="Enter the Event Name" 
                value={this.state.eventName} onChange={this.handleEventNameChange}/> 
            </div> 
            <div >
            <select value={this.state.location} onChange={this.handleLocationChange}>
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

        <div > 
            <label >Event Start Date</label> 
            <div className='row'>
            <div > 
                <input type="date"   
                value={this.state.eventDate} onChange={this.handleEventDateChange}/> 
            </div>
            <div > 
        <select value={this.state.volunteersCategory} onChange={this.handleCategoryChange}>
        <option value="" disabled selected>Choose the volunteers category</option>
        <option value="Riyadh">Children</option>
        <option value="Jeddah">Teenegers</option>
        <option value="Ahsa">Adults</option>
        <option value="Abha">Young</option>
        </select>
        </div> 
            </div>
        </div> 

        <div > 
            <label >Event Logo/Image </label> 
            <div > 
                <input type='file' placeholder="Enter the Event Image"
                value={this.state.eventImage} onChange={this.handleImageChange}/> 
            </div> 
        </div>

        <div > 
            <label >Volunteers Number </label> 
            <div > 
                <input type='number' placeholder="Enter the required number of Volunteers"
                value={this.state.volunteersNumber} onChange={this.handleVolunteersChange}/> 
            </div> 
        </div>

        <div > 
            <label >Event Describtion </label> 
            <div > 
                <textarea placeholder="Enter an idea about the event"
                value={this.state.eventAct} onChange={this.handleEventActivityChange}/> 
            </div> 
        </div>


        <div >
        <div className='row'>
        <div > 
        
        </div>
        </div>
        </div>
        {/* <div >
        
        </div> */}
        
        <div > 
            <button type='submit' class="btn btn-info">Submit</button> 
             
        </div> 
    </form>     

    </div>
        )
    }
}

export default Newpost
