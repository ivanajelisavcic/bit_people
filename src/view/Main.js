import React from 'react';


const User = (props) => {
    return (
        <div className="singleUser">
            <h4>name: {props.userName}</h4 >
            <p>e-mail: {props.userEmail}</p>
            <p>date of birth: {props.dob}</p>
        </div>
    )
}


const UserList = (props) => {
    return (
        <div>
            {props.users.map((user, i) => {
                return <User userName={user.name} userGender={user.gender} key={i} />
            })}
        </div>
    )

}

export {
    User,
    UserList
}