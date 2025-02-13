import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Read() {
    const [estimate, setEstimate] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3002/Read/:id')
            .then(estimate => setEstimate(estimate.data))
            .catch(err => console.log(err))
    }, [])


    return ( <div className="d-flex w-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {estimate.map(user => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  {/* You can add the Action column content here */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default Read;
