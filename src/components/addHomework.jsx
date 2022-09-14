import React from "react";
import Button from '@mui/material/Button';
import "./addhomewors.scss"


const AddHomework = () => {

    
    function addClick(evt) {
        evt.preventDefault()

        let { title, groups } = evt.target.elements;


        title = title.value.trim()
        let group_id = groups.value.trim()



        fetch('http://localhost:8080/groups/' + group_id + '/homeworks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
             },
             mode: 'cors',
             body: JSON.stringify({
                title
             })

        }).then(data=> data.json()).then(data=>{
            if(data.status==201) {
                evt.target.reset()
            }
        })

    }

    const [posts, setPosts] = React.useState()

    React.useEffect(() => {
        fetch('http://localhost:8080/groups').then(data => data.json()).then(data=> {
            console.log(data);
            setPosts(data)
        } )
    }, [])
    






    return (
        <>
        <div className="homeworks">
            <form action="" onSubmit={addClick} className="homeworks__form">
                <input type="text" placeholder="homework" name="title" />
                <select className="homeworks__select" name="groups" id="">{
                    posts && posts.map(post => <option className="homeworks__option" key={post.id} value={post.id}>{post.group_name}</option>)
                }
                </select>

                <Button variant="contained" type="submit">Submit</Button>
                
            </form>
        </div>
        </>
    )
}


export default AddHomework;