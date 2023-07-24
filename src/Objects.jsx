import React from 'react'

function Objects() {

  const zuko = {
    firstName: 'zuko',
    age: 3,
    email: 'abc@123.com'
  }

  const {firstName, age, email} = zuko;
  zuko.firstName = 'Azula' //mutating object

  return Object.keys(zuko).map((key, index)=> {
    return (
      <h2>
        {key}: {zuko[key]}
      </h2>
    )
  })

}

export default Objects