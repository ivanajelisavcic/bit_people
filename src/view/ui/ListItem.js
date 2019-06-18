import React from 'react';
import "../../../src/App.css"

const ListItem = (props) => {
    console.log(props)

    const { name, lastName, email, image, isFemale } = props.user;
    const cardColor = isFemale() ? "red" : ""

    return (

        <div className={`listItem collection-item avatar ${cardColor}`} >
            <img src={image} className="listAvatar" />
            <p className="fullName">{name} {lastName}</p>
            <p><i class="fas fa-envelope"></i> {email}</p>
            <p><i class="fas fa-birthday-cake"></i> {props.user.formatDate()}</p>
        </div >

    );
}

export { ListItem };