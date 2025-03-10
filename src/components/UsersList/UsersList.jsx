import React from "react";
import styles from "./UsersList.module.css";

const usersData = [
  { id: 1, firstName: "Nataliia", lastName: "Yakovenko" },
  { id: 2, firstName: "Roland", lastName: "Simonyan" },
  { id: 3, firstName: "Den", lastName: "Braun" },
];

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersData.map((u) => ({ ...u, isSelected: false })),
    };
  }

  selectUser = (id) => {
    const { users } = this.state;
    const findUser = users.findIndex((u) => {
    return  u.id === id;
    });
    const newUsers = [...users];
    newUsers[findUser] = {
      ...users[findUser],
      isSelected: !newUsers[findUser].isSelected,
    };
    this.setState({users:newUsers})
  };


  mapUsers = (u, id) => {
    const inlineStyle = {
      backgroundColor: u.isSelected ? "yellow" : "transparent",
    };
    return (
      <li key={u.id} style={inlineStyle} onClick={() => this.selectUser(u.id)}>
        {u.firstName} {u.lastName}
      </li>
    );
  };

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUsers)}</ul>;
  }
}

export default UsersList;
