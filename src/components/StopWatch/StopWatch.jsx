import { Component } from 'react';

class StopWatch extends Component {
    constructor(props) {
      super(props)
    console.log("constructor");
      this.state = {
        count: 0,
      }
    }
componentDidMount(){
    console.log('componentDidMount');
}
componentDidUpdate() {
    console.log('componentDidUpdate');
}
componentWillUnmount() {
    console.log('componentWillUnmount');
}


    render() {
        console.log("render");
        const {count}= this.state
        return (
            <>
            <div>{count}</div>
            <button onClick={()=>{this.setState({count:count + 1})}}>+</button>
            </>
        );
    }
}

export default StopWatch;
