import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {

const [userData, setUsers] = useState([]);  
const[loading,setLoading] = useState(false);
let params= useParams()
let navigate = useNavigate()

useEffect(() => {
  let fetchData = async()=>{
   let userData = await axios.get(`https://63036c3a9eb72a839d806b52.mockapi.io/demo/${params.id}`)
    // setUsers(userData.data)
    console.log(userData)
    formik.setValues(userData.data)
  }
  fetchData()
}, []);

const formik = useFormik({
  initialValues: {
    username: "",
    position: "",
    office: "",
    age: "",
    startDate: "",
    salary: "",
  },

  validate: (values) => {
    let errors = {};

    if (values.username === "") {
      errors.username = "please enter username";
    }

    if (values.username.length < 5) {
      errors.username = "please enter greater than 5";
    }

    if (values.position === "") {
      errors.position = "please enter position";
    }

    return errors;
  },

  onSubmit: async(values) => {
    try {
      setLoading(true)
      await axios.put(`https://63036c3a9eb72a839d806b52.mockapi.io/demo/${params.id}`)
    console.log(values);
    navigate("/Portal/Users")
    } catch (error) {
      alert("error")
    }

  },
});



   
  return (
    <>
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>username</label>
            <input
              className="form-control"
              type={"text"}
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <span style={{ color: "red" }}>{formik.errors.username}</span>
          </div>
          <div className="col-lg-6">
            <label>position</label>
            <input
              className={`form-control ${formik.errors.position ? `input-errors`:``}`}
              type={"text"}
              name="position"
              value={formik.values.position}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-6">
            <label>office</label>
            <input
              className="form-control"
              type={"text"}
              name="office"
              value={formik.values.office}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-6">
            <label>age</label>
            <input
              className="form-control"
              type={"text"}
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-6">
            <label>start Date</label>
            <input
              className="form-control"
              type={"text"}
              name="startDate"
              value={formik.values.startDate}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-6">
            <label>salary </label>
            <input
              className="form-control"
              type={"text"}
              name="salary"
              values={formik.values.salary}
              onChange={formik.handleChange}
            />
          </div>
         <input className="btn btn-primary mt-2"
         type={"submit"}
         value="submit"
         disabled={!formik.isValid}
         />
        </div>
      </form>
    </div>
  </>
  );
}

export default EditUser;
