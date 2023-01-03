import React from 'react'
import { Link, Outlet } from 'react-router-dom'
  
const Contact = () => {
  return (
    <div className="Page">
            <h1>welcom to Contact page</h1>
      <center>      <h1>selectionner soit :
        <h5>Create_&_Display_Contact  Or  Delet_New_Contacts </h5></h1>
      </center>
<div className="Contact-nav">
        <Link to="/Contact/Delet_new_Contacts">Delet_new_Contacts</Link>
        <Link to="/Contact/Create_Contact">Create_&_Display_Contact</Link>
      </div>
      <Outlet />
    </div>
  )
}
  
export default Contact