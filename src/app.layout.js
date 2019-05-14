import React from 'react'
import auth from './auth';
import { register } from './serviceWorker';


export const AppLayout = (props)=>{
    return(

        <div>
            <h1>App Layout</h1>
            <button onClick={()=>{auth.logout(()=>{
                props.history.push("/");
            })}}>Logout</button>
            
        </div>
    )
}