import React, { Component } from 'react';
import Sexy from './components/sexy';
import AddSexyTgirl from './components/addSexyTgirl';
import './App.css';

class App extends Component {

  state = {
      sexyTgirls: [
          { id: 1, name: 'tgirl 1', age: 19 },
          { id: 2, name: 'tgirl 2', age: 22 },
          { id: 3, name: 'tgirl 3', age: 24 },
          { id: 4, name: 'tgirl 4', age: 33 },
          { id: 5, name: 'tgirl 5', age: 29 }
      ]
  };


  componentDidMount() {
      console.log('root component is mounted');
  }


  componentDidUpdate(prevProps, prevState, snapshot) {        // fires when there's a change of props or state
      console.log(prevProps, prevState);
  }


    addNewTgirl = tgirl => {
      console.log(tgirl);
      tgirl.id = this.state.sexyTgirls.length + 1;
      this.setState({ sexyTgirls: [...this.state.sexyTgirls, tgirl] });
  };


  deleteTgirl = id => {
      this.setState({ sexyTgirls: [...this.state.sexyTgirls].filter(tgirl => tgirl.id !== id) });
  };


  render() {
    return (
      <div className="App">

          <h2>Tutorial!</h2>
          <Sexy sexyTgirls={ this.state.sexyTgirls } deleteTgirl={ this.deleteTgirl } />
          <AddSexyTgirl addNewTgirl={ this.addNewTgirl } />
      </div>
    );
  }
}

export default App;
