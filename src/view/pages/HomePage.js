import React from "react";
import { fetchUsers } from "../../services/userService"
import { Grid } from "../ui/Grid"
import { List } from "../ui/List"
import { Header } from "../Header";
import { Footer } from "../Footer";


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listView: false,
            users: []
        };
        this.onIconClick = this.onIconClick.bind(this);
        this.reloadClick = this.reloadClick.bind(this)
    }

    onIconClick() {
        this.setState((prevState) => ({ listView: !prevState.listView }))
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
                {
                    this.state.listView
                        ? <List users={this.state.users} />
                        : <Grid users={this.state.users} />
                }
                <Footer />
            </div>
        );
    }

}

export { HomePage }