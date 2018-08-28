import React, {Component} from "react";
import PropTypes from 'prop-types';

class RoomCreator extends Component {

    static propTypes = {
        onCreate: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.updateName = this.updateName.bind(this);

        this.state = {
            name: ''
        };
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="form-inline">
                <div className="form-group">
                    <label className="sr-only" htmlFor="room-name">Room Name</label>
                    <input
                        placeholder="Room name"
                        autoComplete="off"
                        value={this.state.name}
                        onChange={this.updateName}
                        type="text"
                        className="form-control"
                        id="room-name"
                    />
                </div>
                <button className="btn btn-primary">Create Room</button>
            </form>
        );
    }

    onSubmit(event) {
        const {name} = this.state;

        if(name) {
            this.props.onCreate(name);
            this.setState({
                name: ''
            });
        }

        event.preventDefault();
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        });
    }
}

export default RoomCreator;