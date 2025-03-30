import { Component } from 'react';

class Counter2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { count } = this.state;
    return count !== nextState.count;
  }

  increment = () => {
    const { count } = this.state;
    const { step } = this.props;
    this.setState({ count: count + step });
  };

  decrement = () => {
    const { count } = this.state;
    const { step } = this.props;
    this.setState({ count: count - step });
  };

  render() {
    const { count } = this.state;
    console.log('count was rendered');
    return (
      <>
        <div>{count}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter2;