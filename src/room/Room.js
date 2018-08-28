import React, {Component} from "react";
import PropTypes from "prop-types";

class Room extends Component {

    static propTypes = {
        roomInfo: PropTypes.instanceOf(RoomInfo).isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {roomInfo} = this.props as RoomInfo;

        return (
            <div>
                <span>Id: {roomInfo.id}</span>
                <span>Name: {roomInfo.name}</span>
            </div>
        );
    }
}

export default Room;