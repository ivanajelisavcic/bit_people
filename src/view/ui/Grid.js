import React from 'react';
import { GridItem } from './GridItem';

const Grid = ({ users }) => {

    const gridJSX = users.map((user, index) => {

        return <GridItem
            name={user.name}
            email={user.hideEmail()}
            dob={user.dob}
            image={user.image}
            key={index}
        />
    });

    return (
        <div className="row">
            {gridJSX}
        </div>
    );
}

export { Grid };