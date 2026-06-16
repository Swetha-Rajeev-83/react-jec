import React from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {
  return (
    <>
    <h1>Parent Comp</h1>
    <ChildComp name="Anjali" dept="CSE"></ChildComp>
    </>
  )
}

export default ParentComp