import React from "react";
import styles from './login.css.js';

function Login(props) {

  const loginFunc = (giatri) => {
    giatri.preventDefault();
    console.log("enter to submit sucess")
  }

  return (
    // giao dien cua trang Login
    <div style={styles.login_wrapper}>
      Giao dien Login
      <form onSubmit={loginFunc}>
        <label>Username : </label> <br></br>
        <input type="text" placeholder="username"/><br></br>
        <label>Pasword : </label> <br></br>
        <input type="password" placeholder="password"/><br></br>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Login

