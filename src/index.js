import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position => this.setState({ lat: position.coords.latitude })),
            (err) => this.setState({ errorMessage: err.message })
        );
        // this.setState({lat:20});
    }
    render() {
        if (this.state.errorMessage != '') {
            return (
                <div>
                    <div>Error : {this.state.errorMessage}</div>
                </div>
            );
        }
        if (this.state.lat != null) {
            return (
                <div>
                    <div>Latitude : {this.state.lat}</div>
                </div>
            )
        }
        return (
            <div>
                <div>Loading</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));