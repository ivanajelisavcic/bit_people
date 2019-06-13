export class SingleUser {
    constructor(gender, name, image, email) {
        this.gender = gender;
        this.name = name;
        this.image = image;
        this.email = email;
    }

    hideEmail() {

        const [email, domain] = this.email.split("@");
        const avg = email.length / 2;
        const emailUsername = email.substring(0, (email.length - avg));
        return emailUsername + "...@" + domain;
    }

}

