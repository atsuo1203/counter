import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};

    this.minusValue = this.minusValue.bind(this);
    this.pulusValue = this.pulusValue.bind(this);
    this.clearValue = this.clearValue.bind(this);
  }

  minusValue(event) {
      this.setState({value: this.state.value + -1});
  }

  pulusValue(event) {
      this.setState({value: this.state.value + 1});
  }

  clearValue(event) {
        this.setState({value: this.state.value = 0});
  }

  render() {
    return (
      <form >
        <label>
          <input type="button" value="Minus" onClick={this.minusValue} />
          <input disabled type="text" value={this.state.value} />
          <input type="button" value="Plus" onClick={this.pulusValue} />
        </label>
          <input type="button" value="Clear" onClick={this.clearValue} />
      </form>
    );
  }
}
class App extends Component {
  render() {
    return (
        <div>
            <Counter/>
        </div>
    );
  }
}

export default App;
