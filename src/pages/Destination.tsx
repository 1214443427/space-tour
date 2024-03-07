import React from 'react'
import data from '../data.json'
import { useOutletContext } from 'react-router-dom'

function Destination() {
  const id:number = useOutletContext();
  return (
    <div className='flex-container column destination-div'>
      <h1 className='uppercase ff-serif fs-800'>{data.destinations[id].name}</h1>
      <p className='text-lightblue ff-sans-normal fs-400' style={{lineHeight:2}}>{data.destinations[id].description}</p>
      <div className='divider'></div>
      <div className='destination-bottom-div flex-container column'>
        <div className='flex-container column' style={{"--gap":"0.5rem"}}>
          <h4 className='uppercase text-lightblue ff-sans-cond'>Avg. Distance</h4>
          <h2 className='ff-serif fs-700 uppercase'>{data.destinations[id].distance}</h2>
        </div>
        <div className='flex-container column' style={{"--gap":"0.5rem"}}>
          <h4 className='uppercase text-lightblue ff-sans-cond'>EST. Travel time</h4>
          <h2 className='ff-serif fs-700 uppercase'>{data.destinations[id].travel}</h2>
        </div>
      </div>
    </div>
  )
}

export default Destination