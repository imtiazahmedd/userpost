import React, {Component} from "react";
import auth from './../auth'
import {postRecord} from './../ApiRequests/postRequest'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name : '',
            last_name : '',
            email : '',
            phone : '',
            password : '',
            confirm_password: ''
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value})
    }

    validate(){
        const {first_name, last_name, email, phone, password, confirm_password} = this.state;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(first_name.length < 3){
            alert('Enter valid first name');
            return false
        }
        else if(last_name.length < 3){
            alert('Enter valid last name');
            return false
        }
        else if(!re.test(email.toLowerCase())){
            alert('Enter valid email');
            return false;
        }
        else if(phone.length < 11){
            alert('Enter valid phone no');
            return false
        }
        else if (password.length < 8) {
            alert('Minimum length of password field is 8 characters');
            return false;
        } else if (password.length > 16) {
            alert('Maximum length of password field is 16 characters');
            return false;
        }
        else if(password !== confirm_password){
            alert('password not matched');
            return false
        }
        return true;
    }

    RegisterUser(){


        if(this.validate()){
            const {first_name, last_name, email, phone, password, confirm_password} = this.state;

            // postRecord(token,'url',formData) .then((res)=>{
            //     if(res.code == 200 || res.code == 201){
                   
            //     }
               
            // }).catch((res)=>{
            //     if (res.code == 400) {
            //         console.log(res,'error')
            //     }
            // })
            

            auth.login(()=>{
                this.props.history.push("./app")
             })
        }
       
    }

    render() {
        return (
            <div>
                <h1>Register page </h1>
                <div class="input-group">
                    <input onChange={this.handleChange} type="text" class="form-control" name="first_name" id="first_name"  placeholder="Enter your first name"/>
                </div>
                <div class="input-group">
                    <input onChange={this.handleChange} type="text" class="form-control" name="last_name" id="last_name"  placeholder="Enter your last name"/>
                </div>
                <div class="input-group">
                    <input onChange={this.handleChange} type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email"/>
                </div>
                <div class="input-group">
                    <input onChange={this.handleChange} type="text" class="form-control" name="phone" id="phone"  placeholder="Enter your phone"/>
                </div>
                <div class="input-group">
                    <input onChange={this.handleChange} type="password" class="form-control" name="password" id="password"  placeholder="Enter your password"/>
                </div>
                <div class="input-group">
                    <input onChange={this.handleChange} type="password" class="form-control" name="confirm_password" id="confirm_password"  placeholder="Enter your confirm password"/>
                </div>

            
                <div class="form-group ">
                    <button onClick={()=>{this.RegisterUser()}}>Register</button>
                </div>
                <div>
                <button onClick={()=>{auth.login(()=>{
                        this.props.history.push("./")
                     })}}>Go to Login</button>
                </div>

            </div>
        );
    }
}

export default Register;