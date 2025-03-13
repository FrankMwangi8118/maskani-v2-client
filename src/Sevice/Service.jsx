import axios, {Axios} from "axios";

const BASE_URL="http://localhost:8081/maskani/api/v1/security";
const Service = {
    loginCall: async (loginData) => {
        try {

            const response = await axios.post(BASE_URL, loginData,{
                headers: {
                    "Content-Type": "application/json"
                },

            });
            // console.log(response.data);
            return response;

        }catch(err) {
            console.log(err);
        }


        },

    registerCall: () => {

    }
};

export default Service;
