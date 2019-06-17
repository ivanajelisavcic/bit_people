import React from "react";
import "../App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { UserList } from "./Main";
import { fetchUsers } from "../services/userService";
import { Grid } from "./ui/Grid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
    this.onIconClick = this.onIconClick.bind(this);
  }

  onIconClick() {
    this.setState(prevState => {
        // localStorage.setItem("state", !prevState.listView)
      return { listView: !prevState.listView };
    });
  }

  componentDidMount() {
    fetchUsers().then(data => {
      this.setState({ users: data });
    });
  }

  render() {
    return (
      <div>
        <Header
          onChangeLayout={this.onIconClick}
          listView={this.state.listView}
          title="React Users"
        />
        <Grid users={this.state.users} />
        {/* <UserList users={this.state.users} changeLayout="Grid" /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
