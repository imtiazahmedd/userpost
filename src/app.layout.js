import React, {Component} from "react";
import auth from './auth';
import { register } from './serviceWorker';

export class AppLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post_msg : '',
            post : [],
            postArr : []

        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value})
    }
    
    postMessage(){
        const {post_msg, postArr} = this.state;
        if(post_msg.length > 10){
            postArr.push({message : post_msg})
            this.setState({post_msg : '', post : this.state.postArr})
        }else{
            alert('Enter post message')           
        }
    }

    postListing(){
       return this.state.post.length && this.state.post.map((el,i)=>{
            return(
                <div style={{height:300, backgroundColor:'lightGrey'}}>
                <h1 key={i}>{`${i + 1} ${el.message}`}</h1>
                <button>like</button>
                <textarea name="post_msg" placeholder="comments" rows = "2" cols = "60"/><br/>
                <button>submit</button>
                
                </div>
            )
        })
    }
    render() {
        return (
            <div>
            <h1>App Layout</h1>
            <button onClick={()=>{auth.logout(()=>{
                this.props.history.push("/");
            })}}>Logout</button>

            <h3>User post</h3>
            
            <textarea name="post_msg" onChange={this.handleChange} placeholder="post message" rows = "5" cols = "50"/><br/>
            <button onClick={()=>{this.postMessage()}}>Post</button><br/>
            <h4>post listing</h4>
            {this.postListing()}      
        </div>
        );
    }
}


