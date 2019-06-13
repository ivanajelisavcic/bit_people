import React from 'react';


const User = (props) => {
    console.log(props)
    return (
        <div className="singleUser">
            <img src={props.userImage} />
            <h4>name: {props.userName}</h4 >
            <p>gender: {props.userGender}</p>
            <p>email: {props.userEmail}</p>
        </div>
    )
}


const UserList = (props) => {
    return (
        <div>
            {props.users.map((user, i) => {
                return <User userName={user.name} userGender={user.gender} userImage={user.image} userEmail={user.email} key={i} />
            })}
        </div>
    )

}

export {
    User,
    UserList
}