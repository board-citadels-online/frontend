import React, {Component} from "react";
import axios from "axios";
import RoomListRow from "./RoomListRow";
import {withRouter} from "react-router-dom";

class RoomList extends Component {

    constructor(props) {
        super(props);

        this.onSelect = this.onSelect.bind(this);

        this.state = {
            rooms: []
        };
    }

    componentDidMount() {
        axios.get("api/room")
            .then(response => {
                this.setState({
                    rooms: response.data
                });
            })
    }

    render() {
        const {rooms} = this.state;

        return (
            <table className="table table-hover table-condensed">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Players</th>
                    <th>Slots</th>
                </tr>
                </thead>
                <tbody>
                {
                    rooms.map(room =>
                        <RoomListRow
                            key={room.id}
                            room={room}
                            onSelect={this.onSelect}
                        />
                    )
                }
                </tbody>
            </table>
        );
    }

    onSelect(id) {
        const {history} = this.props;
        history.push(`/room/${id}`);
    }
}

export default withRouter(RoomList);