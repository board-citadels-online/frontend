import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import RoomMenu from "./room/RoomMenu";
import Some from "./Some";

class App extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                   <Router>
                        <Switch>
                            <Route exact path="/" component={RoomMenu}/>
                            <Route path="/some" component={Some}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;