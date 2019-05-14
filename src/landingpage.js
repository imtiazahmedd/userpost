import auth from './auth'
import React, {Component} from "react";
import {Link} from 'react-router-dom'
import { Button, ButtonToolbar, Grid, Row, Col,Carousel} from 'react-bootstrap';

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

    render() {
        return (
            <div>
            {/* <h1>Landing page</h1>
            <button onClick={()=>{
                auth.login(()=>{
                    this.props.history.push("./app")
                })
            }}>Login</button> */}


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
                                <button onClick={()=>{auth.login(()=>{
                                 this.props.history.push("./app")
                                 })}} type="button" class="btn btn-primary">Login</button>
                            </div>
                            <Link to="/register">Registration</Link>
                        </form>
            </div>
        );
    }
}
