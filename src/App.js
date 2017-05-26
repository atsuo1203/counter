import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="submit" value="minus" />
          <input disabled type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Plus" />
        </label>
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
