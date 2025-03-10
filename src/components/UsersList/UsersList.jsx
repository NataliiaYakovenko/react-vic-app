import React from 'react';
import styles from'./UsersList.module.css'

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        users:[1,2,3,4]

    };
  }



  render() {
     const usersElements = this.state.users.map((user,id)=><li key={id}>{user}</li>)
    console.log(usersElements);
    return <ul>{usersElements}</ul>;
  }
}

export default UsersList;
