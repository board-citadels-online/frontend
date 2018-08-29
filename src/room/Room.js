import React, {Component} from "react";
import axios from 'axios';

class Room extends Component {

    constructor(props) {
        super(props);

        this.state = {
            roomInfo: null
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        axios.get(`/api/room/${id}`)
            .then(response => {
                this.setState({
                    roomInfo: response.data
                });
            });
    }

    render() {
        const {roomInfo} = this.state;

        if(!roomInfo) {
            return <div/>
        }

        return (
            <div>
                <h3>Id: {roomInfo.id}</h3>
                <h3>Name: {roomInfo.name}</h3>
            </div>
        );
    }
}

export default Room;