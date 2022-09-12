import React, { useEffect, useState } from "react"

const Teacher = () => {

    const [users, setUsers] = useState("")

    const fetchData = async () => {
        fetch("http://localhost:8080/teacher")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })

    }

    return<>
        <div>

            <h1>
                Teacher
            </h1>
            <button onClick={fetchData}>Fetch Users</button>
            {users.length > 0 && 
                users.map(users => {
                    return (
                    <ul>
                        <li key={users.id}>{users.name}</li>
                        <li>{users.surname}</li>
                        <li>{users.phone_number}</li>
                        <li>{users.course}</li>

                    </ul>
                    )})
            }
        </div>
    </>
}

export default Teacher;