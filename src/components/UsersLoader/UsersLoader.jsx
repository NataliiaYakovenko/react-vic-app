import React from "react";

class UsersLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { id: 1, name: "Nataliia" },
        { id: 2, name: "Roland" },
      ],
      isFetching: false,
      error: null,
      currentPage: 1,
    };
  }
  componentDidMount(){
     const {currentPage}=this.state

    this.setState({isFetching: true});
    fetch(`https://randomuser.me/api?results=5&seed=pe2022&page=${currentPage}`)
    .then(response=>response.json())
    .then(data=>this.setState({users:data.results, isFetching:false}))
    .catch(err=>this.setState({error:err}))
    .finally(()=>this.setState({isFetching:false}))
  }
 
  render() {
    const { users, isFetching, error } = this.state;
    return (
      <>
        {error && <div>!!!ERROR!!!</div>}
        {isFetching && <div>Loading. Please wait</div>}
        {!error && !isFetching && (
          <ul>
            {users.map((user) => {
              return <li key={user.id}>{JSON.stringify(user)}</li>;
            })}
          </ul>
        )}
      </>
    );
  }
}

export default UsersLoader;
