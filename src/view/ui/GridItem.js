import React from 'react';
import "../../../src/App.css"




const GridItem = ({ name, email, image, dob }) => {
    return (
        <div className="col-4">
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    )
};

export { GridItem };