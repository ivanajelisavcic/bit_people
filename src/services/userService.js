
import { SingleUser } from "../entities/singleUser"
import axios from "axios"




export const fetchUsers = () => {
    return axios.get("https://randomuser.me/api/?results=12")
        .then(response => response.data.results)
        .then(userData => adaptData(userData))


}

function adaptData(array) {
    return array.map(user => {
        const name = user.name.first;
        const gender = user.gender;
        const image = user.picture.medium;
        const email = user.email;

        return new SingleUser(gender, name, image);
    });

}





// using fetch()
//
// export const fetchUsers = () => {
//     return fetch("https://randomuser.me/api/?results=10")
//         .then(response => response.json())
//         .then(userData => adaptData(userData.results))
// }

// function adaptData(array) {
//     return array.map(user => {
//         const name = user.name.first;
//         const gender = user.gender;
//         const id = user.id.name;

//         return new SingleUser(gender, name, id);
//     });

// }

