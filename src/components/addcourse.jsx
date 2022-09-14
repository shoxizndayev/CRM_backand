import React from "react";
import Button from '@mui/material/Button';
import "./addcourse.scss"

const AddCourse = () => {


    function handleClick(evt) {
        let {course_name, description, price, duration} = evt.target.elements;

        course_name = course_name.value.trim()
        description = description.value.trim()
        price = price.value.trim()
        duration = duration.value.trim()


        fetch('http://localhost:8080/course', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         mode: 'cors',
         body: JSON.stringify({
            course_name,
            description,
            price,
            duration
         })
      })
    }

    return (
        <>
            <h4>
                Add Course
            </h4>

            <div>
                <form action="" onSubmit={handleClick}>
                    <input type="text" placeholder="Course Name" name="course_name" />
                    <input type="text" placeholder="description" name="description" />
                    <input type="number" placeholder="price" name="price" />
                    <input type="text" placeholder="duration" name="duration" />
                   <Button variant="contained" type="submit">Add user</Button>
                </form>
            </div>
        </>
    )
}

export default AddCourse;