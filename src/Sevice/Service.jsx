import axios from "axios";

const BASE_URL="http://localhost:8081/maskani/api/v1/security";
const Service = {
    loginCall: async (loginData) => {
        try {
            // console.log(response.data);
            return await axios.post(BASE_URL, loginData, {
                headers: {
                    "Content-Type": "application/json"
                },
            });

        }catch(err) {
            console.log(err);
        }
        },

    signUpCall: async (signUpData) => {

        try {
            return await axios.post(`${BASE_URL}/register`, signUpData, {
                headers: {
                    "Content-Type": "application/json"
                },
            })
        }catch (err) {
            console.log(err)
        }

    }
};

export default Service;
