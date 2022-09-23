import axios from "axios";

export class API {

    constructor(type = '', authorizationToken) {
        this.type = type;

        this.axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${authorizationToken}`,
            },
        };
    }

    url = {
        signup: 'https://akademia108.pl/api/social-app/user/signup',
        login: 'https://akademia108.pl/api/social-app/user/login',
        logout: 'https://akademia108.pl/api/social-app/user/logout',
        profile: 'https://akademia108.pl/api/social-app/user/profile',
    };

    postData = {};

    setData(data) {
        this.postData = data;
    }

    getData = (handler) => {
        axios
            .post(this.url[this.type], this.postData, this.axiosConfig)
            .then((res) => {
                handler(res);
            })
            .catch((err) => {
                console.log('AXIOS ERROR: ', err);
            });
    };
}