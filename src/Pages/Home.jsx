import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = ({setId}) => {
  const [getallData, setGetallData] = useState([]);
  const [getallMsg, setGetallMsg] = useState("");
  const[deleteData,setDeleteData]=useState([])


  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    await axios
      .get("http://localhost:5000/api/getallemployee")
      .then((res) => {
     
       setGetallMsg(res.data.message),setGetallData(res.data.result);
      })
      .catch((error) => console.log(error));
  };
const navigate=useNavigate()

const handleEdit=(id)=>{
  setId(id)
  navigate(`/editemployee/${id}`)
}

  const handleDelete=async(id)=>{
await axios.delete(`http://localhost:5000/api/deleteemployee/${id}`)
.then((res)=>setDeleteData(res.data.result))
.catch((error)=>console.log(error))
  }
  return (
    <div>
        <h1>{getallMsg}</h1>
        <Link to='/create' className="btn btn-primary">Create</Link>
     
        {getallData.map((ele, index) => {
          return (
            
              <div className="card m-5" key={index}>
                <div className="card-header">{ele.employeeDesignation}</div>
                <div className="card-body">
                  <p className="card-title">{ele._id}</p>
                  <p className="card-title">{ele.employeeFirstname}</p>
                  <p className="card-title">{ele.employeeLastname}</p>
                  <p className="card-title">{ele.employeeEmail}</p>
                </div>
               <button className="btn btn-success" onClick={()=>handleEdit(ele._id)}>Edit</button>
               <button className="btn btn-danger" onClick={()=>handleDelete(ele._id)}>Delete</button>
              </div>
           
          );
        })}
      </div>
   
  );
};

export default Home;
