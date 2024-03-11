import React from 'react'
import data from '../data.json'
import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion';

function Destination() {
  const id:number = useOutletContext();
  return (
    <motion.div className='flex-container column destination-div'
    initial = {{translateX: "-100%"}}
    animate = {{translateX: "0%"}}
    exit = {{translateX: "100%"}}>
      <h1 className='uppercase ff-serif fs-800'>{data.destinations[id].name}</h1>
      <p className='text-lightblue ff-sans-normal fs-400' style={{lineHeight:2}}>{data.destinations[id].description}</p>
      <div className='divider'></div>
      <div className='destination-bottom-div flex-container column'>
        <div className='flex-container column' style={{"--gap":"0.5rem"} as React.CSSProperties}>
          <h4 className='uppercase text-lightblue ff-sans-cond'>Avg. Distance</h4>
          <h2 className='ff-serif fs-700 uppercase'>{data.destinations[id].distance}</h2>
        </div>
        <div className='flex-container column' style={{"--gap":"0.5rem"} as React.CSSProperties}>
          <h4 className='uppercase text-lightblue ff-sans-cond'>EST. Travel time</h4>
          <h2 className='ff-serif fs-700 uppercase'>{data.destinations[id].travel}</h2>
        </div>
      </div>
    </motion.div>
  )
}

export default Destination