import React from "react";
import "../App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
// import { UserList } from "./Main";
import { fetchUsers } from "../services/userService";
import { Grid } from "./ui/Grid";
import { List } from "./ui/List";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
    this.onIconClick = this.onIconClick.bind(this);
    this.reloadClick = this.reloadClick.bind(this)
  }

  onIconClick() {
    this.setState(prevState => {
      return { listView: !prevState.listView };
    });
  }

  reloadClick() {
    this.fetchUsers();

  }

  reloadClick = () => {
    this.setState({ users: [] });
    this.loadUsers();
  }


  componentDidMount() {
    fetchUsers().then(data => {
      this.setState({ users: data });
    });
  }

  loadUsers() {
    fetchUsers()
      .then(users => this.setState({
        users: users
      }));
  }



  render() {
    return (
      <div>
        <Header
          onChangeLayout={this.onIconClick}
          listView={this.state.listView}
          onReload={this.reloadClick}
          title="React Users"
        />
        <Grid users={this.state.users} />
        <List users={this.state.users} />
        {/* <UserList users={this.state.users} changeLayout="Grid" /> */}


        <Footer />
      </div>
    );
  }
}

export default App;
