import React from "react";

class UsersLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      error: null,
      currentPage: 1,
    };
  }

  loading = () => {
    const { currentPage } = this.state;

    this.setState({ isFetching: true });
    fetch(`https://randomuser.me/api?results=5&seed=pe2022&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.results, isFetching: false }))
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isFetching: false }));
  };

  componentDidMount() {
    this.loading();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;

    if (currentPage !== prevState.currentPage) {
      this.loading();
    }
  }

  prevPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };

  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };

  render() {
    const { users, isFetching, error } = this.state;
    return (
      <>
        {error && <div>!!!ERROR!!!</div>}
        {isFetching && <div>Loading. Please wait</div>}
        {!error && !isFetching && (
          <>
            <button onClick={this.prevPage}>{"<"}</button>
            <button onClick={this.nextPage}>{">"}</button>
            <ul>
              {users.map((user) => {
                return <li key={user.id}>{JSON.stringify(user)}</li>;
              })}
            </ul>
          </>
        )}
      </>
    );
  }
}

export default UsersLoader;
