
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = ({id})=> {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    employeeFirstname: "",
    employeeLastname: "",
    employeeEmail: "",
    employeeDesignation: "",
  });

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    await axios
      .get(`http://localhost:5000/api/editemployee/${id}`)
      .then((res) => 
        console.log(res.data.result)
      )
      .catch((error) => console.log(error));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    await axios
      .put(`http://localhost:5000/api/editemployee/${id}`, editData)
      .then((res) => console.log(res.data.result))
      .catch((error) => console.log(error));
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="employeeFirstname">Firstname</label>
          <input
            id="employeeFirstname"
            type="text"
            name="employeeFirstname"
            placeholder="enter your firstname"
            value={editData.employeeFirstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="employeeLastname">Lastname</label>
          <input
            id="employeeLastname"
            type="text"
            name="employeeLastname"
            placeholder="enter your lastname"
            value={editData.employeeLastname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="employeeEmail">Email</label>
          <input
            id="employeeEmail"
            type="email"
            name="employeeEmail"
            placeholder="enter your email"
            value={editData.employeeEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="employeeDesignation">Designation</label>
          <input
            id="employeeDesignation"
            type="text"
            name="employeeDesignation"
            placeholder="enter your Designation"
            value={editData.employeeDesignation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
