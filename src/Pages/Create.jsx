import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [createData, setcreateData] = useState({
    employeeFirstname: "",
    employeeLastname: "",
    employeeEmail: "",
    employeeDesignation: "",
  });
  const [createmsg, setCreateMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcreateData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/createemployee", createData)
      .then((res) => setcreateData(res.data.result))
      .catch((error) => console.log(error));
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">Firstname</label>
          <input
            id="fname"
            type="text"
            name="employeeFirstname"
            placeholder="enter your firstname"
            value={createData.employeeFirstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lname">Lastname</label>
          <input
            id="lname"
            type="text"
            name="employeeLastname"
            placeholder="enter your lastname"
            value={createData.employeeLastname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="employeeEmail"
            placeholder="enter your email"
            value={createData.employeeEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="des">Designation</label>
          <input
            id="des"
            type="text"
            name="employeeDesignation"
            placeholder="enter your Designation"
            value={createData.employeeDesignation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
