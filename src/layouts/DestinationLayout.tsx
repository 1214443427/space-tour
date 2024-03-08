import React, { useRef } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom';
import moonImg from '../assets/destination/image-moon.png'
import marsImg from '../assets/destination/image-mars.png'
import europaImg from '../assets/destination/image-europa.png'
import titanImg from '../assets/destination/image-titan.png'


function DestinationLayout() {
  const ref = useRef(null);
  const param = useParams()
  const id:number = parseInt(param.id || '0');
  const imgArray = [moonImg,marsImg,europaImg,titanImg]
  return (
    <div className='bg-container grid-container grid-container--destination'>
      <div className='flex-container column destination-upper-div'>
        <h2 className='numbered-titles uppercase fs-700 ff-sans-cond'><b className='text-lightblue' aria-hidden="true" style={{opacity:"25%"}}>01</b>Pick your destination</h2>
        <img className='destination-image' ref={ref} src={imgArray[id]}></img>
      </div>
      <div className='flex-container column destination-content-div' style={{"--gap":"1.5rem"} as React.CSSProperties}>
        <div className='flex underline-indicators links' style={{"--underline-gap":"0.5rem", justifyContent:"center"} as React.CSSProperties}>
          <NavLink to={'0'} className={'uppercase text-white'}>Moon</NavLink>
          <NavLink to={'1'} className={'uppercase text-white'}>Mars</NavLink>
          <NavLink to={'2'} className={'uppercase text-white'}>Europa</NavLink>
          <NavLink to={'3'} className={'uppercase text-white'}>Titan</NavLink>
        </div>
        <Outlet context={id}/>
      </div>
    </div>
  )
}

export default DestinationLayout