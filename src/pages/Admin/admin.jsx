import React, {useEffect, useState} from "react";
import AddUser from "../../components/addUser";
import AddCourse from "../../components/addcourse";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GetStudents from "../../components/student";
import "./admin.scss"
import {Link} from 'react-router-dom'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
  };


const Admin = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);






    return<>
        <div className="admin__section">
            <div className="menu">
                
                <AddUser />
            </div>

            <div>
                <AddCourse />
            </div>

            <div className="menu__student">
            <Button onClick={handleOpen}>Students list</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                     Students
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <GetStudents />
                </Typography>
            </Box>
            </Modal>
            </div>

        </div>
    </>
}


export default Admin;