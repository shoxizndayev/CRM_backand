import React from "react";
import "./addusers.scss"
import Button from '@mui/material/Button';


const AddUser = () => {



   function handleClick(evt) {

      let { name, surname, username, password, phone_number, course, role} = evt.target.elements;


      name = name.value.trim()
      surname = surname.value.trim()
      username = username.value.trim()
      password = password.value.trim()
      phone_number = phone_number.value.trim()
      course = course.value.trim()
      role = role.value.trim()

      
      fetch('http://localhost:8080/users', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         mode: 'cors',
         body: JSON.stringify({
            name,
            surname,
            username,
            password,
            phone_number,
            course,
            role
         })
      })
      
   }
   return (
      <>

      <h4>
         Add User
      </h4>
         <div className="add-post-container">
            <form action="" onSubmit={handleClick}>
               <input type="text" className="form-control" placeholder='name' name='name'/>
               <input type="text" className="form-control" placeholder='surname' name='surname'/>
               <input type="text" className="form-control" placeholder='username' name='username'/>
               <input type="number" className="form-control" placeholder='password' name='password'/>
               <input type="number" className="form-control" placeholder='phone_number' name='phone_number'/>
               <input type="text" className="form-control" placeholder='course' name='course'/>
               <input type="text" className="form-control" placeholder='role' name='role' defaultValue={'student'}/>
               <Button variant="contained" type="submit">Add user</Button>
               
            </form>
         </div>
      </>
   );
};

export default AddUser;