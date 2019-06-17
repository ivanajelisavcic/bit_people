import React from 'react';
import "../../../src/App.css"




const GridItem = (props) => {
    console.log(props);


    const { name, email, image, isFemale } = props.user;
    const cardColor = isFemale() ? "red" : ""


    return (

        <div className="col-4 gridItem ">
            <div className={`card ${cardColor}`} >
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{email}</p>
                    <p>Birth date: {props.user.formatDate()}</p>
                </div>
            </div>
        </div>
    )
};

export { GridItem };