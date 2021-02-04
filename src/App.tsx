import React from 'react';
import styled from 'styled-components';

interface IState{
  counter:number
}

class App extends React.Component<{}, IState> {
  state = {
    counter: 0
  };

  render (){
    const { counter } = this.state;
    return (
      <div>{counter}<button onClick={this.add}>Add</button></div>
    );
  }
  add = ():void => {
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      }
    })
  }
}

export default App;
