import React from 'react'

const Portal = () => {
    let myNumber = 1
    const increase = () =>{
        alert("its worked")
        myNumber = myNumber + 1
    }
  return (
    <>
    <h1>Student Portal</h1>
    <h1>{myNumber}</h1>
    <button onClick={increase}>+</button>
    </>
  )
}

export default Portal