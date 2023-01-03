import React from 'react'
import { Link, Outlet } from 'react-router-dom'
  
const Blog = () => {
  return (
    <div className="Page">
            <h1>welcom to Blog page</h1>
      <center>      <h1>selectionner soit :
        <h5>Create_&_Display_Blog  Or  Delet_New_Blogs </h5></h1>
      </center>
      <div className="Blog-nav">
        <Link to="/Blog/Delet_new_Blogs">Delet_new_Blogs</Link>
        <Link to="/Blog/Create_Blog">Create_&_Display_Blog</Link>
      </div>
      <Outlet />
    </div>
  )
}
  
export default Blog