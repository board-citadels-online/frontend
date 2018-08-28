import React, {Component} from "react";
import RoomCreator from "./RoomCreator";
import RoomList from "./RoomList";
import axios from 'axios';

class RoomMenu extends Component {

    constructor(props) {
        super(props);

        this.onCreate = this.onCreate.bind(this);
    }

    render() {
        return (
            <div>
                <RoomList/>
                <RoomCreator onCreate={this.onCreate}/>
            </div>
        )
    }

    onCreate(name) {
        axios.post('api/room', {
            name: name
        }); //TODO goto room
    }
}

export default RoomMenu;