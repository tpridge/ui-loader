import React from 'react';
import ReactDOM from 'react-dom';
import UILoader from '../src/ui-loader.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
    this._spinForever = this._spinForever.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ready: true});
    }, this.props.timeout);
  }

  _spinForever() {
    this.setState({ready: false});
  }
  
  render() {
    return (
      <main>
        <header>
          <h1>UILoader</h1>
          <p>The loader will spin for {this.props.timeout / 1000} seconds.</p>
        </header>
        <UILoader ready={this.state.ready}>
          <p>Data has loaded.</p>
          <button onClick={this._spinForever}>spin indefinitely</button>
        </UILoader>
      </main>
    );
  }
}

ReactDOM.render(<App timeout={4000}/>, document.getElementById('example'));
