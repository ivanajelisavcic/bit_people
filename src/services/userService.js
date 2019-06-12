
import { SingleUser } from "../entities/singleUser"

export const fetchUsers = () => {
    return fetch("https://randomuser.me/api/?results=10")
        .then(response => response.json())
        .then(userData => adaptData(userData.results))
}

function adaptData(array) {
    return array.map(user => {
        const name = user.name.first;
        const gender = user.gender;
        const id = user.id.name;

        return new SingleUser(gender, name, id);
    });

}

