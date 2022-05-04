import React from "react";

const API_URL = "http://localhost:8080/rest/api/auth/";

class AuthService {

    async signIn (object) {
         let requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        };

         await fetch(API_URL + "signin", requestOptions)
            .then((response) => {
                if (response.status === 200) {
                    response.json().then((data) => {
                        this.setCredentials(data);
                    });
                }
            })
            .catch(error => console.log(error));


    }

    signUp (object) {
        let requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(object)
        };

        fetch(API_URL + "signup", requestOptions)
            .then((response) => {
                if (response.status == 200) {
                    response.json().then((data) => {
                    });
                }

            });
    }

    logout() {
         localStorage.removeItem("user");
    }

    setCredentials(data) {
        localStorage.setItem("user", JSON.stringify(data));
    }

    getCredentials() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();