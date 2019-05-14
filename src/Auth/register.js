import React, {Component} from "react";
import auth from './../auth'
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

    render() {
        return (
            <div>
                <p>Register page </p>
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
                    <input onChange={this.handleChange} type="text" class="form-control" name="password" id="password"  placeholder="Enter your password"/>
                </div>
                <div class="input-group">
                    <input onChange={this.handleChange} type="text" class="form-control" name="confirm_password" id="confirm_password"  placeholder="Enter your confirm password"/>
                </div>

            
                <div class="form-group ">
                    <button onClick={()=>{auth.login(()=>{
                        this.props.history.push("./app")
                     })}}>Register</button>
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