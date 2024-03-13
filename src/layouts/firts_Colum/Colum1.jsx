import React from 'react'
import { Profile } from '../../Components/Profile/Profile'
import { Navbar } from '../../Components/Navbar/Navbar'
import './Colum1.css'

export const Colum1 = () => {
  return (
    <div className='colum1'>
       <Profile/>
       <h1 className='name'>DUNGEON</h1>
       <hr className='line'/>
       <Navbar/>
    </div>
  )
}
