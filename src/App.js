import React, { Component } from 'react';
import Counter2 from './components/Counter2/Counter2';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
    };
  }

  changeStep = ({ target: { value } }) => {
    this.setState({ step: Number(value) });
  };

  render() {
    const { step } = this.state;

    return (
      <>
        <input type="number" value={step} onChange={this.changeStep} />
        <Counter2 step={step} />
      </>
    );
  }
}

export default App;