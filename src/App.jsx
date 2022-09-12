import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Student from "./components/student";
import Teacher from "./components/teacher";
import Groups from "./components/groups";
import AddUser from "./components/addUser";


const App = () => {
  return(<>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path="/group" element={<Groups />} />
        <Route path="/adduser" element={<AddUser />} />
    </Routes>

    </>)
}

export default App;