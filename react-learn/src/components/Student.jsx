import React from 'react'

const Student = ({name,age,gender,dept,email}) => {
  return (
    <>
    <h1>Student</h1>
    <h2>Name : {name}</h2>
    <h2>Age : {age}</h2>
    <h2>Gender : {gender}</h2>
    <h2>Department : {dept}</h2>
    <h2>Email : {email}</h2>

    </>
    
  )
}

export default Student