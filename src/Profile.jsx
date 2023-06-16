import React from 'react';
import { useContext } from 'react';
import UserContext from './UserContext';

function Profile() {
let context= useContext(UserContext)
const [name,setName]= useState("")
    let changeProfile = () => {
        context.setUsername(name)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
                <label>username</label>
                <input type="text" className="form-control" value={name} onChange={(e)=>{ setName(e.target.value)
                context.setUsername(name)}} />
                <button onClick={changeProfile} className="btn bt-sm btn-primary mt-2">save</button>
            </div>
        </div>
      
    </div>
  );
}

export default Profile;
