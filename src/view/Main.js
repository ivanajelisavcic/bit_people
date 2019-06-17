import React from 'react';


const User = (props) => {
    //console.log(props)




    return (
        <div className="singleUser">
            <img src={props.userImage} className="userAvatar" alt="avatar" />
            <h4>{props.userName} {props.userlastName}</h4 >
            <p>gender: {props.userGender}</p>
            <p>email: {props.userEmail}</p>
            <p>dob: {props.userDob}</p>

        </div>
    )
}


const UserList = (props) => {
    return (
        <div>
            {props.users.map((user, i) => {
                return <User userName={user.name}
                    userGender={user.gender}
                    userImage={user.image}
                    userEmail={user.hideEmail()}
                    userDob={user.formatDate()}
                    userlastName={user.lastName}
                    key={i} />
            })}
        </div>
    )

}

export {
    User,
    UserList
}