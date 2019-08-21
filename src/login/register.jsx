import React, { Component } from 'react'
import axios from 'axios'
import { Checkbox } from 'react-materialize';
export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user:{
            email: '',
            password: '',
            password_confirmation: '',
            userName: '',
            age: '',
            phoneNumber: '',
            location: '',
            gender: '',
            isOrganization: false
            }
        }
    }
    changeHandler  = (e) => {
        let newUser = {...this.state.user}
        newUser[e.target.name] = e.target.value
        this.setState(prevState=>({user: newUser}))
        //  this.setState({user: {[e.target.name]: e.target.value}})
        console.log(this.state);
        
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post("https://cors-anywhere.herokuapp.com/https://volunteery-api.herokuapp.com/api/v1/users/", this.state)
        .then(res => {
            console.log(res)
        }) .catch(err => {
            console.log(err);
            
        })
        
    }
    functionOrganization = (e) => {
        // this.setState({
        //    user: {
        //     email: this.state.user.email,
        //     password: this.state.user.password,
        //     password_confirmation: this.state.user.password_confirmation,
        //     userName: this.state.user.userName,
        //     age: this.state.user.age,
        //     phoneNumber: this.state.user.phoneNumber,
        //     location: this.state.user.location,
        //     gender: this.state.user.gender,
        //     isOrganization: !this.state.user.isOrganization
        // }
        // })
        let newUser = {...this.state.user}
        newUser["isOrganization"] = !newUser["isOrganization"]
        this.setState(prevState=>({user: newUser}))
        console.log(newUser["isOrganization"] , 'func')
        console.log(this.state.user.isOrganization , 'state')
    }
    
    render() {
        
        const {email, password, password_confirmation, userName, age, phoneNumber, location, gender,volenteer, isOrganization} = this.state
        return (
            <div>
                <form className= "base-container" onSubmit={this.submitHandler}>
                <div className="form-group">
                                
                <p>
                        <label>
                            <input type="checkbox" onClick={this.functionOrganization} value={isOrganization}  />
                            <span>Organization</span>
                        </label>
                        </p>
                                
                            </div>
                    <div>
                        <input type="text" name="email" value={email} placeholder="email" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="password" value={password} placeholder="password" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="password_confirmation" value={password_confirmation} placeholder="Password confirmation" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="userName" value={userName} placeholder="UserName" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="age" value={age} placeholder="age" onChange={this.changeHandler}/>
                    
                    </div>
                    <div>
                        <input type="text" name="phoneNumber" value={phoneNumber} placeholder="phone number" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="location" value={location} placeholder="location" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="gender" value={gender} placeholder="gender" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        {/* <input type="text" name="isOrganization" value={isOrganization} placeholder="isOrganization" onChange={this.changeHandler}/> */}
                    </div>
                    <button type="submit">submit</button>
                </form>
                
            </div>
        )
    }
}