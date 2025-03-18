import axios from "axios";

const BASE_SECURITY_URL="http://localhost:8081/maskani/api/v1/security";
const Service = {
    loginCall: async (loginData) => {
        try {
            // console.log(response.data);
            return await axios.post(BASE_SECURITY_URL, loginData, {
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
            return await axios.post(`${BASE_SECURITY_URL}/register`, signUpData, {
                headers: {
                    "Content-Type": "application/json"
                },
            })
        }catch (err) {
            console.log(err)
        }

    },

    logoutCall:async()=>{

        try {
            const res= await axios.post(`${BASE_SECURITY_URL}/logout`,{},{
                withCredentials: true,
                headers: {
                    "Content-Type":"application/json"
                }
            })
            console.log(res.data)
            return res.data;

        }catch (e) {
            console.log(e)
        }

    }

};

export default Service;
