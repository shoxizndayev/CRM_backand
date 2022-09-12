import { useState, useEffect } from 'react';

const AddUser = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      fetch('http://localhost:8080/users')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
      <>
         <div className="add-post-container">
            <form>
               <input type="text" className="form-control" placeholder='name'/>
               <input type="text" className="form-control" placeholder='surname' />
               <input type="text" className="form-control" placeholder='username' />
               <input type="number" className="form-control" placeholder='password' />
               <input type="number" className="form-control" placeholder='phone_number' />
               <input type="text" className="form-control" placeholder='course' />
               <input type="text" className="form-control" placeholder='role' defaultValue={'student'}/>
               <textarea className="form-control" cols="10" rows="8"></textarea>
               <button type="submit">Add Post</button>
            </form>
         </div>
         <div className="posts-container">
            {posts.map((post) => {
               return (
                  <div className="post-card" key={post.id}>
                     <h2 className="post-title">{post.name}</h2>
                     <p className="post-body">{post.surname}</p>
                     <p className="post-body">{post.username}</p>
                     <p className="post-body">{post.password}</p>
                     <p className="post-body">{post.phone_number}</p>
                     <p className="post-body">{post.course}</p>
                     <p className="post-body">{post.role}</p>
                     <div className="button">
                        <div className="delete-btn">Delete</div>
                     </div>
                  </div>
               );
            })}
         </div>
      </>
   );
};

export default AddUser;