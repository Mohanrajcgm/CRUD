import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

function User() {
    const [users, setUsers] = useState([]);  
    const[loading,setLoading] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    let loadData = async () => {
        setLoading(true)
        let users = await axios.get(
            "https://63036c3a9eb72a839d806b52.mockapi.io/demo"
        )
            setUsers(users.data)
            setLoading(false)
    }

    let handledelete=async(id)=>{
        let ask = window.confirm("delete pani tu ponga!!!")
        if(ask){
        axios.delete(`https://63036c3a9eb72a839d806b52.mockapi.io/demo/${id}`)
        loadData()
    }
    }
    return (
        <div class="container-fluid">
     <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Users</h1>
                            <Link to="/Portal/createuser" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                    class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
                        </div>
           {
            loading ?
            <div className='mx-auto' style={{width:"200px"}}>
                 <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
            </div>: <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                        <th>SL</th> 
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                        <th>SL</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            users.map((user, index)=>{
                                return  <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.position}</td>
                                <td>{user.office}</td>
                                <td>{user.age}</td>
                                <td>{user.startDate}</td>
                                <td>{user.salary}</td>
                                <td>
                                    <Link to={`/Portal/Users/${user.id}`} className='btn btn-sm btn-warning mr-2'>view</Link>
                                    <Link to={`/Portal/Edit/${user.id}`} className='btn btn-sm btn-primary mr-2'>edit</Link>
                                    <button onClick={()=>handledelete(user.id)}className='btn btn-sm btn-info mr-2'>delete</button>
                                </td>
                            </tr>
                            })
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
           }
        </div>
      );
    }
    
   
 
export default User;
