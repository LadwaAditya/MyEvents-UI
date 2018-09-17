import * as React from "react";
import * as ReactDOM from "react-dom";
import {Route} from "react-router";
import {HashRouter} from "react-router-dom"
import {EventListContainer} from "./components/event_list_container";
import {EventBookingFormContainer} from "./components/event_booking_form_container"
import {Navigation} from "./components/navigation";

class App extends React.Component<{},{}>{
    render(){
        const eventList = () => <EventListContainer eventListURL="http://localhost:8181"></EventListContainer>
        const eventBooking = ({match}:any) => <EventBookingFormContainer eventID={match.params.id}
                                                                        eventServiceURL="http://localhost:8181"
                                                                        bookingServiceURL="http://localhost:8282"/>;
        return <HashRouter>
        <Navigation brandName="MyEvents"/>
            <div className="container">
                <h1>Myevents</h1>
                <Route exact path="/" component={eventList}/>
                <Route path="/events/:id/book" component={eventBooking}/>
            </div>
        </HashRouter>
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("myevents-app")
);