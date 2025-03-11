import React from "react";

const INITIAL_VALUE = {email: "", pasword: "",}


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: INITIAL_VALUE.email,
      pasword: INITIAL_VALUE.pasword,
    };
  }

  handleEmailChange = ({target:{value}}) => {
    this.setState({ email: value });
  };
  handlePasswordChange=({target:{password}})=>{
    this.setState({pasword: password})
  }
  handleSubmit=(e)=>{
    e.preventDefault()
  //відправляємо запит на сервер
  this.setState(INITIAL_VALUE)  //- для скидування даних після відправки
  }


  render() {
    const{email,pasword}= this.state
    return (
      <>
        <h1>LoginForm</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="your email"
              value={email}
              onChange={this.handleEmailChange}
              autoFocus
            />
          </label>
          <br/>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="your password"
              value={pasword}
              onChange={this.handlePasswordChange}
            />
          </label>
          <br/>
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
