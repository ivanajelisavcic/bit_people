export class SingleUser {
    constructor(gender, name, image, email, lastName, dob) {
        this.gender = gender;
        this.name = name;
        this.lastName = lastName;
        this.image = image;
        this.email = email;
        this.dob = dob;
    }

    hideEmail() {

        const [email, domain] = this.email.split("@");
        const avg = email.length / 2;
        const emailUsername = email.substring(0, (email.length - avg));
        return emailUsername + "...@" + domain;
    }

    formatDate() {
        const date = new Date(this.dob);
        return date.toLocaleDateString("en-GB").split("/").join(".")

    }

    isFemale = () => {
        return this.gender === 'female'
    }

    getFullName = () => {
        const firstName = this.name
        const surname = this.lastName
        return `${firstName} ${surname}`
    }

}
