import React from "react";
import classNames from "classnames";
import styles from "./LoginForm.module.css";

const INITIAL_VALUE = { email: "", password: "" };
const LOGIN_FORM_REX_EXP = {
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: INITIAL_VALUE.email,
      isEmailValid: false,
      password: INITIAL_VALUE.password,
      isPasswordValid: false,
    };
  }

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: LOGIN_FORM_REX_EXP.email.test(value),
    });
  };
  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: LOGIN_FORM_REX_EXP.password.test(value),
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //відправляємо запит на сервер
    this.setState(INITIAL_VALUE); //- для скидування даних після відправки
  };

  render() {
    const { email, password, isEmailValid, isPasswordValid } = this.state;

    //Приклад як писати вручну classnames
    // const emailClassName = `${styles.input} ${isEmailValid ? styles.inputValid : styles.inputInValid }`
    // console.log(emailClassName);

    // Як потрібно писати classnames
    const emailClassName = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInValid]: !isEmailValid,
    });

    const passwordClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordValid,
      [styles.inputInValid]: !isPasswordValid,
    });

    return (
      <div className={styles.formContainer}>
        <h1 className={styles.formHeader}>LoginForm</h1>
        <form className={styles.loginForm} onSubmit={this.handleSubmit}>
          <label className={styles.formLabel}>
            <span className={styles.inputName}>Email</span>
            <input
              className={emailClassName}
              type="email"
              name="email"
              placeholder="your@email"
              value={email}
              onChange={this.handleEmailChange}
              autoFocus
            />
          </label>
          <label className={styles.formLabel}>
            <span className={styles.inputName}>Password</span>
            <input
              className={passwordClassName}
              type="password"
              name="password"
              placeholder="your password"
              value={password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
