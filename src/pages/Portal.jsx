import React, { useState } from 'react'

const Portal = () => {
    const [ourNumber, setourNumber] = useState(0);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [passowrd, setpassword] = useState("");
    const[allStudent, setallStudent] = useState ([]);

    const signUp = ()=>
    {
        let newStudent = {firstName, lastName, email, passowrd}
        setallStudent([...allStudent, newStudent]) //... mean spread operator
        setfirstName(""); setlastName(""); setemail(""); setpassword("");
        console.log(allStudent)
    }
    const deleteStudent = (studentIndex)=>
    { 
        console.log(studentIndex)
        let newAllStudent = [...allStudent]
        let found = newAllStudent.filter((stud,index)=>(index != studentIndex))
        setallStudent(found)
    }
  return (
    < >
    <div className='col-7 mx-auto shadow-sm'>
        <h1 className='text-center'> Sign Up Page </h1>
        <input type='text' placeholder='First Name' className='form-control my-2' onChange={(e)=>setfirstName(e.target.value)} value={firstName} />
        <input type="text" placeholder=' Last Name' className='form-control my-2' onChange={(e)=>setlastName(e.target.value)} value={lastName} />
        <input type="email" placeholder='Email' className='form-control my-2' onChange={(e)=>(setemail(e.target.value))} value={email} />  
        <input type='password' placeholder='Passowrd' className='form-control my-2' onChange={(e)=>(setpassword(e.target.value))} value={passowrd} /> <hr></hr>
        <button className='btn btn-lg btn-info my-1 px-1' onClick={signUp}> Submit </button>
    </div>
    
    <div className='align-center'>
    <h1>All Students</h1>
    <table className='table'>
        <tbody>
        <tr>
            <th>S/N</th>
            <th>F-Name</th>
            <th>L-Name</th>
            <th> Email </th>
            <th> Password </th>
        </tr>
        
        {allStudent.map((stud, index)=>(
        <tr key={index}>
            <td> {index+1} </td>
            <td>{stud.firstName}</td>
            <td>{stud.lastName}</td>
            <td>{stud.email}</td>
            <td>{stud.passowrd}</td>
            <td><button className='btn btn-small btn-danger'>Edit</button> </td>
            <td ><button onClick={()=> deleteStudent(index)} className='btn btn-small btn-warning'>Delete</button></td>
        </tr>
        ))}
        </tbody>
    </table>
    
    </div>
        
   
    
    </>
 )
}

export default Portal
