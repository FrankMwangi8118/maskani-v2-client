import axios from "axios";

const BASE_API="http://localhost:8081/maskani/api/v1";
const service = {




    getBuildingService: async () => {
       const response= axios.get(`${BASE_API}/building/test`,{
           Authorization: `Bearer ${localStorage.getItem('jwt')}`,
       })
           .then(res=>{
               console.log(res)
           })
        return response;



    },
    getUnitsService: async () => {

    },

    createBuildingService: async (building) => {

    }

}
export default service;