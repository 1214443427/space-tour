import React from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='grid-container grid-container--home bg-container'>
        <div>
            <h1 className='uppercase ff-sans-cond fs-500 text-lightblue '>{data.home.subtitle}
            <br/>
            <span className='uppercase fs-900 ff-serif text-white'>{data.home.title}</span>
            </h1>
            <p className='ff-sans-normal text-lightblue'>{data.home.text}</p>
        </div>
        <Link 
          to={'destination'}
          className='large-button uppercase ff-serif text-darkblue bg-white' 
          tabIndex={0}>EXPLORE</Link>
    </div>
  )
}

export default Home