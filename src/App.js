import ThemButton from "./components/ThemButton/ThemButton";
import UsersList from "./components/UsersList/UsersList";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLight: true
    };
  }
 

  setTheme=()=>{
    const{isLight} =  this.state
    this.setState({isLight: !isLight})
  }

  render() {
     const {isLight} = this.state

    return (
      <>
        <ThemButton isLight={isLight} changeTheme={this.setTheme}/>
        <UsersList isLight={isLight} />
      </>
    );
  }
}

export default App;
