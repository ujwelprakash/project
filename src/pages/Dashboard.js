import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import axios from "axios";


function Dashboard() {
    const [estimate, setEstimate] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3002/Dashboard')
            .then(estimate => setEstimate(estimate.data))
            .catch(err => console.log(err))
    }, [])

    const deleteUser = async(id) => {
        try {
            await axios.delete(`http://localhost:3002/delete/${id}`);
            setEstimate(estimate.filter(user => user._id !== id)); // Update state to remove the deleted user
        } catch (err) {
            console.error('Error deleting user:', err);
        }
    };

    return ( <div className="container mt-5 d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
            <div className="table-responsive">
                <table className="table table-hover table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Text</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            estimate && estimate.length > 0 ? (
                                estimate.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.text}</td>
                                        <td>
                                            <button 
                                                onClick={() => deleteUser(user._id)} 
                                                className="btn btn-sm btn-danger">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No users found
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )

}

export default Dashboard;
