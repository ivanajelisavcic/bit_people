
import { SingleUser } from "../entities/singleUser"
import axios from "axios"




export const fetchUsers = () => {
    return axios.get("https://randomuser.me/api/?results=15")
        .then(response => response.data.results)
        .then(userData => adaptData(userData))



}

function adaptData(array) {
    return array.map(user => {
        //console.log(user);

        const name = user.name.first;
        const gender = user.gender;
        const image = user.picture.large;
        const email = user.email;
        const lastName = user.name.last;
        const dob = user.dob.date;

        return new SingleUser(gender, name, image, email, lastName, dob);
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

