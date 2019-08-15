import React from "react";
import Table from "./components/Table";
import Details from "./components/Details";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: { data: [], error: null, loading: false },
      details: { data: [], error: null, loading: false }
    };
  }

  componentDidMount() {
    this.setState({ users: { ...this.state.users, loading: true } });
    axios.get("https://api.github.com/users?per_page=100")
      .then((res) => {
        console.log(res);
        this.setState({ users: { data: res.data, loading: false, error: null } });
      })
      .catch((err) => {
        this.setState({ users: { ...this.state.users, loading: false, error: err } });
      });
  }

  handleClick = (id) => {
    this.setState({details: {...this.state.details, loading: true}});
    axios.get(`https://api.githu.com/users/${id}`)
      .then((res) => {
        this.setState({ details: {...this.state.details, loading: false, data: res.data} });
      })
      .catch((err) => {
        this.setState({ details: {...this.state.details, loading: false, error: err} });
      });
  }

  render() {
    const { users, details } = this.state;
    return (
      <div className="container">
        <div>
          <h2>List</h2>
          {users.error && <div style={{color: "red"}}>Oops..........</div>}
          {users.loading ? <h1>loading...</h1> : <Table users={users.data} handleClick={this.handleClick} />}
        </div>
        <div>
          <h2>Details</h2>
          {details.error && <div style={{color: "red"}}>Oops..........</div>}
          {details.loading ? <h1>loading....</h1> : <Details details={details.data} />}
        </div>
      </div>
    );
  }
}

export default App;
