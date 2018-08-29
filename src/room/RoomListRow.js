import React, {Component} from "react";
import PropTypes from 'prop-types';

class RoomListRow extends Component {

    static propTypes = {
        room: PropTypes.object.isRequired,
        onSelect: PropTypes.func.isRequired
    };

    render() {
        const {room, onSelect} = this.props;

        return (
            <tr onClick={() => onSelect(room.id)}>
                <td>{room.name}</td>
                <td/>
                <td>{room.slots.free}/{room.slots.total}</td>
            </tr>
        );
    }
}

export default RoomListRow;