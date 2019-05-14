import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {LandingPage} from './landingpage'
import {AppLayout} from './app.layout'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ProtectedRoutes} from './protected.route'
    
function App(){
    return(
        <div className="App">
            <Switch>
            <Route exact path="/" component={LandingPage}/>
            <ProtectedRoutes 
            exact
            path="/app"
            component={AppLayout}/>
            <Route path="*" component={()=> "404 Not Found"}/>
            </Switch>
        </div>
    )
}


const rootElement = document.getElementById("root");
ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
 rootElement);

// serviceWorker.unregister();
