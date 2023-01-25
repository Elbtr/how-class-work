import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  // cara menggunakan useState didalam class
  // disini kita menggunakan constructor

  constructor() {
    // saat kita menggunakan constructor kita harus memanggil even super()
    super();
    // penulisan state itu bebas tergantung anda akan tetapi akan lebi bagus jika penulisan nya kita sama kan dengan nama useState agar kita lebih mudah paham
    //
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users Provided!");
    }
  }

  // cara menggunakan this.state
  toggleUsersHandler() {
    this.setState((curState) => {
      // bisa dibanding kan dengan fungsi const yang dibawah perbedaan penggunaan state
      //disini fungsi curState tidak menimpah showUsers melaikan menggabungkan
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
