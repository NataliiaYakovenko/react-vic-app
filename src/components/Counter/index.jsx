
import { Component } from 'react';

class Counter extends Component {
  constructor(props){
     super(props);
      
     //початковий стан
     this.state = {
        count: 0,
     }
  }
 
   increment =()=>{
    //setState (зміни стану) => перерендер сторінки
      this.setState({count: this.state.count+1}) 
  }
  decrement =()=>{
    this.setState({count:this.state.count -1})
  }

    render() {
        return (
            <>
            <div>{this.state.count}</div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            </>
        );
    }
}

export default Counter