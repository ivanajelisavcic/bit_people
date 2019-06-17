import React from 'react';
import { ListItem } from './ListItem';


const List = ({ users }) => {

    const listJSX = users.map((user, index) => {


        return <ListItem
            user={user}
            key={index}
        // fullName={user.getFullName()}
        // email={user.hideEmail()}
        // dob={user.dob}
        // image={user.image}
        // key={index}
        />
    });

    return (
        <div className="collection">
            {listJSX}
        </div>
    );
}

export { List };
