import React, { useState } from "react";
import { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Createuser() {

  const [users, setUsers] = useState([]);  
    const[loading,setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    let fetchData = async()=>{
     let userData = await axios.get("https://63036c3a9eb72a839d806b52.mockapi.io/demo")
      setUsers(userData.data)
    }
    fetchData()
  }, []);

  
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: "",
    },

    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "please enter name";
      }
      else if (values.name.length < 5){
        errors.name = "please enter greater than 5";
      }

      if (values.position === "") {
        errors.position = "please enter position";
      }

      return errors;
    },

    onSubmit: async(values) => {
   try {
    setLoading(true)
    await axios.post("https://63036c3a9eb72a839d806b52.mockapi.io/demo", values)
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
              <label>name</label>
              <input
                className="form-control"
                type={"text"}
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
              <label>position</label>
              <input
                className={`form-control ${formik.errors.position ? 'input-errors':''}`}
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
            </div>{" "}
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

export default Createuser; 
