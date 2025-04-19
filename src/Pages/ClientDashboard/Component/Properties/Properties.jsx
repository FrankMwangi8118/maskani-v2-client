import "./Propeties.css"
import service from "../../Services/service.jsx";

const Properties = () => {
  const allBuildings=()=>{
    const res=service.getBuildingService().then(r => {
      console.log(r);
    }).catch(err=>{console.log(err)})
  }
  return(
      <>
        <h1>My properties</h1>
      <button
          onClick={()=>{allBuildings()}}
      >all</button>
      </>

  )
}
export default Properties;