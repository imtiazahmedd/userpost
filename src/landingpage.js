import auth from './auth'
import React, {Component} from "react";
import {Link} from 'react-router-dom'
import { Button, ButtonToolbar, Grid, Row, Col,Carousel} from 'react-bootstrap';
import { validate } from '@babel/types';

export class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({[event.target.name] : event.target.value})
    }


    validate(){
        const {email, password} = this.state;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
         if(!re.test(email.toLowerCase())){
            alert('Enter valid email');
            return false;
        }
        return true;
    }

    Login(){
        if(this.validate()){
            const {email, password} = this.state;

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
        <form class="form-horizontal">
           <h1>Login Here</h1>
                            <div class="form-group">
                                <label for="email" class="cols-sm-2 control-label"></label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i></span>
                                        <input onChange={this.handleChange} type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email"/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password" class="cols-sm-2 control-label"></label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                                        <input onChange={this.handleChange1} type="password" class="form-control" name="password" id="password"  placeholder="Enter your Password"/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group ">
                                <button onClick={()=>{this.Login()}} type="button" class="btn btn-primary">Login</button>
                            </div>
                            <Link to="/register">Registration</Link>
                        </form>
            </div>
        );
    }
}
