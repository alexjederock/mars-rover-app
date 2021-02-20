import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

export default function Home() {
  return (
    <div className='home-container'>
      <Link className='link' to='/nasaphoto'>Check it out stargazer.</Link>
    </div>
  )
}
