import '../../asset/css/manageUsers.css'
import { useState } from "react";
import NewUser from './NewUser';
import { Modal } from '@mui/material';

function ManageUsers() {
     const userArr = [
        {
          name:"Rahul Sharma",
          role:"Admin",
          email:'rs094@gmail.com',
          status:"invited"
        },
        {
            name:"Rahul Sharma",
            role:"User",
            email:'rs094@gmail.com',
            status:"Registered"
          },
          {
            name:"Rahul Sharma",
            role:"Admin",
            email:'rs094@gmail.com',
            status:"invited"
          }
    ];
    const [users,setUsers]= useState(userArr);
    const [popupVal,setPopup] = useState(false);
    const [temp,setTemp] = useState({});
    function popupNewUser(){
        setPopup(!popupVal);
    }

    function submit(newUserObj){
      const person = JSON.parse(newUserObj);
      person.status = "invited"
      users.push(person);
      setUsers((arr)=>[...arr]);
    }

    function editPerson(index){
      console.log("Inside Edit");
      const userData = users[index];
      setTemp(userData);
      popupNewUser();
    }
    function removeUser(index){
      users.splice(index,1);
      setUsers((arr)=>[...arr])
    }
    function updateUser(user){
      let convertedUser = JSON.parse(user);
      let findIndexUser =users.findIndex((u)=>u.name===temp.name);
      users.splice(findIndexUser,1);
      convertedUser.status = "invited";
      users.splice(findIndexUser,0,convertedUser);
      setTemp({});
      setUsers((arr)=>[...arr]);
    }

    return ( 
        <div className="container bg-color-setting">
            {/* {popupVal===true && <NewUser></NewUser>} */}
          <div className="d-flex justify-content-between">
            <h5>User Access</h5>
            <button className="btn btn-primary" onClick={()=>popupNewUser()}>+ New User</button>
            <Modal
  open={popupVal}
  onClose={popupNewUser}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <NewUser closeFun={popupNewUser} submit={submit} userData={temp} updateUser={updateUser}></NewUser>
</Modal>
          </div>
          <div className="user-table">
            <div className='user-heading d-flex'>
              <p className='col-2'>Name</p>
              <p className='col-3'>Email</p>
              <p className='col-2'>Role</p>
              <p className='col-2'>Status</p>
              <p className='col-3'>Action</p>
            </div>
            <hr></hr>
            {users.map((u,index)=>{
                return <><div className='user d-flex'>
                         <p className='col-2 text-center'>{u.name}</p>
                         <p  className='col-3 text-center'>{u.email}</p>
                         <p  className='col-2 text-center'>{u.role}</p>
                         <p  className='col-2 text-center'>{u.status}</p>
                         <div className='d-flex justify-content-center col-3'>
                            <button className='btn edit-btn' onClick={()=>editPerson(index)}>Edit</button>
                            <button className='btn delete-btn' onClick={()=>removeUser(index)}>Delete</button>
                         </div>
                     </div>
                     <hr></hr>
                     </>
            })}
          </div>
        </div>
     );
}

export default ManageUsers;