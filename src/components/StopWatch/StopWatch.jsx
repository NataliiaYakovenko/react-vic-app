import { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.id = null;
  }

  componentDidMount() {
    this.start();
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    this.stop(0);
  }

  tick = () => {
    const { count } = this.state;
    //не змінювати стан напряму // стан імутабельний //можуть бути побочні евекти
    const newCount = new Date(count.valueOf());
    console.log("tick");
    //newCount.setHours(count.getHours())   // не потрібно, якщо використовуємо valueOf()
    //newCount.setMinutes(count.getMinutes())  // не потрібно, якщо використовуємо valueOf()
    newCount.setSeconds(count.getSeconds() + 1);
    this.setState({ count: newCount });
  };

  start = () => {
    if (!this.id) {
      this.id = setInterval(this.tick, 1000);
    }
  };

  stop = () => {
    clearInterval(this.id);
    this.id = null;
  };

  reset = () => {
    this.setState({ count: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  render() {
    const { count } = this.state;

    return (
      <article>
        <div>{count.toLocaleTimeString("en-GB")}</div>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </article>
    );
  }
}

export default StopWatch;
