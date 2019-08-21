import React, { Component } from 'react'
import axios from 'axios';
​
class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            eventName: '',
            startDate: '',
            endDate: '',
            eventLocation: '',
            numberOfVolunteer: 0,
            summary: '',
            condition: '',
            image: '',
            eventCategory: '',
            volunteerCategory: ''
        }
    }
    
    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value })
    }
​
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state);
        axios.post('https://cors-anywhere.herokuapp.com/https://eventy-api.herokuapp.com/events.json', this.state)
        .then(response => {
            console.log(response); 
        })
        .catch(error => {
            console.log(error);
        })
    }
​
    render() {
​
        const { eventName, startDate, endDate, eventLocation, volunteerNum, summary, condition, image, eventCategory, volunteerCategory } = this.state;
        
        
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type='text' name='eventName' onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type='date' name='startDate' onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type='date' name='endDate' onChange={this.changeHandler}/>
                </div>
​
                <div>
                    <input type='text' name='eventLocation' onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type='number' name='numberOfVolunteer' onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type='text' name='summary' onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type='text' name='condition' onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type='text' name='image' onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type='text' name='eventCategory' onChange={this.changeHandler}/>
                </div>
                <div>
                    <input type='text' name='volunteerCategory' onChange={this.changeHandler}/>
                </div>
                <button type='submit'>SUBMIT</button>
            </form>
        )
    }
}
​
export default PostForm