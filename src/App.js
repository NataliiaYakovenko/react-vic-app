
import { Component } from "react";
import ViewPortParams from "./components/ViewPortParams/ViewPortParams";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  handleClick=()=>{
    const { isVisible } = this.state;
    this.setState({
      isVisible : !isVisible

    })
  }


  render() {
    const { isVisible } = this.state;
    return(
    <>
    <button onClick={this.handleClick}>{isVisible ? 'Unmount' : 'Mount'}</button>
    {isVisible&&<ViewPortParams/>}
  </>
  )
  }
}

export default App;
