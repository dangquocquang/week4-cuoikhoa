import React from "react";
import styles from "./register.css.js";

function Register (props) {
    const loginFunc = (giatri) => {
    giatri.preventDefault();
    console.log("enter to submit sucess")
    }

  return (
     <div style={styles.register_dangky}>
     {/* <div className="register_dangky"> */}
      Giao dien dang ky
      <form onSubmit={loginFunc}>
        <label>Email : </label> <br></br>
        <input type="text" placeholder="Email"/><br></br>
        <label>ID : </label> <br></br>
        <input type="text" placeholder="ID"/><br></br>
        <label>Pasword : </label> <br></br>
        <input type="password" placeholder="password"/><br></br>
        <input type="submit"/>
      </form>
    </div>
  )


}
export default Register
