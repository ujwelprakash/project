const mongoose = require('mongoose');

const EstimateSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    text: String
})

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("events", EmployeeSchema);
const EstimateModel = mongoose.model("estimate", EstimateSchema);

module.exports = { EmployeeModel, EstimateModel }

  // <div className="w-10 d-flex justify-content-center align">
        //     <table className="table">
        //         <thead>
        //             <tr>
        //                 <th>Name</th>
        //                 <th>Email</th>
        //                 <th>Age</th>
        //                 <th>Actions</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {estimate.map(user => (
        //                 <tr key={user._id}>
        //                     <td>{user.name}</td>
        //                     <td>{user.email}</td>
        //                     <td>{user.age}</td>
        //                     <td>
        //                         <button className="btn btn-danger">
        //                             Deleteeeeeeeeeeeeeeeeeeeee
        //                         </button>
        //                         <button onClick={ e=>handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
        //                     </td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>

    
    // <div className="w-100  d-flex justify-content-center aligh" >
    //      <table className="table">
    //         <thead>
    //             <tr>
    //                 <th>
    //                     name
    //                 </th>
    //                 <th>
    //                     email
    //                 </th>
    //                 <th>
    //                     messgae
    //                 </th>
    //                 <th>

    //                     delet
    //                 </th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //         {
    //           estimate.map(user =>{
    //                 return<tr  key={user._id}>
    //                     <td>{user.name}</td>
    //                     <td>{user.email}</td>
    //                     <td>{user.phone}</td>
    //                    <td>
    //                             <button onClick={() => deleteUser(user._id)} className="btn btn-danger">
    //                                 Delete
    //                             </button>
    //                         </td>
    //                 </tr>
    //             })
    //         }
    //         </tbody>
    //       </table>

    //     </div>

    // const deleteUser = async (id) => {
//     try {
//         await axios.delete(`http://localhost:3002/delete/${id}`);
//         setEstimate(estimate.filter(user => user._id !== id)); // Remove the deleted user from state
//     } catch (err) {
//         console.error('Error deleting user:', err);
//     }
// };
