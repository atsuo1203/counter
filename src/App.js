import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};

    //本来はこれがないと動かない
    // this.minusValue = this.minusValue.bind(this);
    // this.plusValue = this.plusValue.bind(this);
    // this.clearValue = this.clearValue.bind(this);
  }

  // 本来はこの書き方だけど下のように書き換えると上がいらない
  // minusValue() {
  //     this.setState({value: this.state.value + -1});
  // }

  minusValue = () => {
      this.setState({value: this.state.value + -1});
  }

  plusValue = ()  => {
      this.setState({value: this.state.value + 1});
  }

  clearValue = ()  => {
        this.setState({value: this.state.value = 0});
  }

  render() {
    return (
      <form className="app-form">
          <input type="button" value="Minus" onClick={this.minusValue} />
          <input disabled type="text" value={this.state.value} />
          <input type="button" value="Plus" onClick={this.plusValue} />
          <input type="button" value="Clear" onClick={this.clearValue} />
      </form>
    );
  }
}
class App extends Component {
  render() {
    return (
        <div className="App">
            <Counter/>
        </div>
    );
  }
}

export default App;
