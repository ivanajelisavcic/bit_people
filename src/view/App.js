import React from 'react';
import "../App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { UserList } from './Main';
import { fetchUsers } from '../services/userService';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetchUsers()
            .then((data) => {
                this.setState({ users: data });  //stari state (users) se update-uje svaki put kad u novi state-u (data) stignu novi podaci, svaki put se trigeruje render()
            })
    }

    render() {
        return (
            <div>
                <Header title="React Users" />
                <UserList users={this.state.users} />
                <Footer />
            </div>
        );
    }
}


export default App