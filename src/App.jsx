import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Student from "./components/student";
import Teacher from "./components/teacher";
import Groups from "./components/groups";
import AddUser from "./components/addUser";
import AddHomework from "./components/addHomework";


const App = () => {
  return(<>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path="/group" element={<Groups />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/addhomework" element={<AddHomework />} />
    </Routes>

    </>)
}

export default App;