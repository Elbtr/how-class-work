import { Component } from "react";
import classes from "./User.module.css";

//bisa dilihat dalam penggunaan extends artinya semua fungsi yang didalam component dapat digunakan didalam User
//component adalah even yang terdapat didalam reactjs
//cara menggunakan nya kita dapat menggunakan this Exampel:(this.props.name)

class User extends Component {
  componentWillUnmount() {
    console.log("User Will unmount");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>; // untuk menggunakan props kita harus memangil even yang terdapat didalam React yaitu component
  }
}

// disini dapat dibanding kan antara penggunaan class dan const atau function

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
