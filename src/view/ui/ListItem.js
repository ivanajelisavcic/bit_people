import React from 'react';

const ListItem = ({ fullName, email, dob, image }) => {

    return (

        <div className="collection-item avatar">
            <img src={image} />
            <p>{fullName()}</p>
            <p> {email}</p>
            <p> {dob}</p>
        </div>

    );
}

export { ListItem };