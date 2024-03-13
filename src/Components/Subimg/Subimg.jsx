import React from 'react'
import './Subimg.css'

export const Subimg = ({content,parrafo}) => {
  return (
    <>
    <div className="Content">
        <h2 className="subContent">{content}</h2>
        <p>{parrafo}</p>
    </div>
    <hr className="linegreen" />
    </>
  )
}
