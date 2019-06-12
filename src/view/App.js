import React from 'react';
import { Header } from "./Header";
import { User } from "./Main";
import { UsersList } from "./Main"
import { Footer } from "./Footer"


import './App.css';


const App = () => (
    <div>
        <Header title="React Users" />
        <UserList users={users} />
        <Footer />
    </div>
);


