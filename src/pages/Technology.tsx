import React from 'react'
import data from '../data.json'
import { NavLink, useOutletContext, useParams } from 'react-router-dom'
import launchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import launchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg'
import spaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg'
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg'
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg'

function Technology() {
  const param = useParams()
  const id:number = param.id;
  const imgList = [
    {landscape: launchVehicleLandscape,
     portrait: launchVehiclePortrait},
    {landscape: spaceportLandscape,
    portrait: spaceportPortrait},    
    {landscape: spaceCapsuleLandscape,
    portrait: spaceCapsulePortrait},
    ]
  return (
    <div className='grid-container grid-container--technology'>
        <h4 className='numbered-titles uppercase fs-700 ff-sans-cond'><b className='text-lightblue' aria-hidden="true" style={{opacity:"25%"}}>03</b>Space Launch 101</h4>
        <picture>
            <source media='(min-width:45rem)' srcSet={imgList[id].portrait} />
            <img src={imgList[id].landscape} />
        </picture>
        <div className="technology-text-area">
            <div className='tab-list flex-container tab-list--technology'>
                <NavLink className='circle-indicators text-white ff-serif' to={"../technology/0"}> <p>1</p> </NavLink>
                <NavLink className='circle-indicators text-white ff-serif' to={"../technology/1"}> <p>2</p> </NavLink>
                <NavLink className='circle-indicators text-white ff-serif' to={"../technology/2"}> <p>3</p> </NavLink>
            </div>
            <div>
                <h3 className='uppercase ff-serif text-lightblue' >The terminology...</h3>
                <h2 className='uppercase ff-serif fs-500'>{data.technology[id].name}</h2>
                <p className='text-lightblue fs-600' style={{lineHeight:1.5}}>{data.technology[id].description}</p>
            </div>
          </div>
    </div>
  )
}

export default Technology