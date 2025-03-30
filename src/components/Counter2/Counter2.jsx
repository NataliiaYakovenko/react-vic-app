import { PureComponent } from 'react';

class Counter2 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // Якщо повертає true, то перерендер потрібен
  // shouldComponentUpdate(nextProps, nextState) {
  //   const { count } = this.state;
  //   return count !== nextState.count;
  // }

  // По дефолту для Component shouldComponentUpdate повертає true

  // PureComponent містить у собі реалізацію shouldComponentUpdate
  // Здійснює тільки поверхневе порівняння стану та пропсів
  // Тут це виглядатиме так:
  // shouldComponentUpdate (nexpProps, nextState) {
  //   const {count} = this.state;
  //   const {step} = this.props;
  //   return count !== nextState.count || step !== nextProps.step;
  // }

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