import * as React from "react";
import * as ReactDOM from "react-dom";
import {Hello} from "./components/hello";
import { EventListContainer } from "./components/event_list_container";

class App extends React.Component<{},{}>{
    render(){
        return <div className="container">
        <h1>Myevents</h1>
        <EventListContainer eventListURL="http://localhost:8181"></EventListContainer>
    </div>
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("myevents-app")
);