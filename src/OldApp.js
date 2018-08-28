import React, {Component} from 'react';

class OldApp extends Component {

    constructor(props) {
        super(props);

        this.onConnectPress = this.onConnectPress.bind(this);
        this.onDisconnectPress = this.onDisconnectPress.bind(this);
        this.onSend = this.onSend.bind(this);
        this.onNameChange = this.onNameChange.bind(this);

        this.state = {
            connected: false,
            greetings: []
        };

        this.webSocketClient = null;
    }

    render() {
        return (
            <div id="main-content" className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-inline">
                            <div className="form-group">
                                <label htmlFor="connect">WebSocket connection:</label>
                                <button onClick={this.onConnectPress} disabled={this.state.connected} className="btn btn-default">Connect</button>
                                <button onClick={this.onDisconnectPress} disabled={!this.state.connected} className="btn btn-default">Disconnect</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={this.onSend} className="form-inline">
                            <div className="form-group">
                                <label htmlFor="name">What is your name?</label>
                                <input type="text" onChange={this.onNameChange} className="form-control" placeholder="Your name here..."/>
                            </div>
                            <button className="btn btn-default">Send</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table id="conversation" className="table table-striped">
                            <thead>
                            <tr>
                                <th>Greetings</th>
                            </tr>
                            </thead>
                            <tbody id="greetings">
                            {
                                this.state.greetings.map((greeting, index) =>
                                    <tr key={index}><td >{greeting}</td></tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    onConnectPress() {
        const app = this;
        const socket = new WebSocket("ws://localhost:3000/api/citadels");

        socket.onopen = () => {
            this.setState({
                connected: true
            });
        };

        socket.onmessage = event => {
            const message = JSON.parse(event.data).content;
            app.setState(prevState => ({
                greetings: [...prevState.greetings, message]
            }));
        };

        this.webSocketClient = socket;
    }

    onDisconnectPress() {
        const {webSocketClient} = this;

        if (webSocketClient !== null) {
            webSocketClient.close();
            this.setState({
               connected: false
            });
        }
    }

    onNameChange(event) {
        this.setState({
                name: event.target.value
        });
    }

    onSend(event) {
        const {webSocketClient} = this;

        webSocketClient.send(
            JSON.stringify({
                name: this.state.name
            })
        );

        event.preventDefault();
    }
}

export default OldApp;
