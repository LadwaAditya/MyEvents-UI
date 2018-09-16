import * as React from "react";
import * as ReactDOM from "react-dom";
import {Route} from "react-router";
import {HashRouter as Router} from "react-router-dom"
import {EventListContainer} from "./components/event_list_container";
import {Navigation} from "./components/navigation";

class App extends React.Component<{},{}>{
    render(){
        const eventList = () => <EventListContainer eventListURL="http://localhost:8181"></EventListContainer>

        return <Router>
        <Navigation brandName="MyEvents"/>
            <div className="container">
                <h1>Myevents</h1>
                <Route exact path="/" component={eventList}/>
            </div>
        </Router>
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("myevents-app")
);