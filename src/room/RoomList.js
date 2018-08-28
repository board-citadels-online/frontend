import React, {Component} from "react";
import axios from "axios";

class RoomList extends Component {

    constructor(props) {
        super(props);

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
                        <tr key={room.id}>
                            <td>{room.name}</td>
                            <td/>
                            <td>{room.slots.free}/{room.slots.total}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        );
    }
}

export default RoomList;