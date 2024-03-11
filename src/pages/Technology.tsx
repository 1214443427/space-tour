import data from '../data.json'
import { NavLink, useParams } from 'react-router-dom'
import launchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg'
import launchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg'
import spaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg'
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg'
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg'
import { motion } from 'framer-motion'

function Technology() {
  const param = useParams()
  const id:number = parseInt(param.id || '0');
  const imgList = [
    {landscape: launchVehicleLandscape,
     portrait: launchVehiclePortrait},
    {landscape: spaceportLandscape,
    portrait: spaceportPortrait},    
    {landscape: spaceCapsuleLandscape,
    portrait: spaceCapsulePortrait},
    ]
  return (
    <motion.div 
      className='grid-container grid-container--technology'
      initial = {{translateX: "-100%"}}
      animate = {{translateX: "0%"}}
      exit = {{translateX: "100%"}}>
        <h4 className='numbered-titles uppercase fs-700 ff-sans-cond'><b className='text-lightblue' aria-hidden="true" style={{opacity:"25%"}}>03</b>Space Launch 101</h4>
        <motion.picture
          key = {id}
          initial = {{opacity: 0}}
          animate = {{opacity: 1, transition: {duration: 1}}}
          exit = {{opacity: 0}}>
            <source media='(min-width:45rem)' srcSet={imgList[id].portrait} />
            <img src={imgList[id].landscape} />
        </motion.picture>
        <div className="technology-text-area">
            <div className='tab-list flex-container tab-list--technology'>
                <NavLink className='circle-indicators text-white ff-serif' to={"../technology/0"}> <p>1</p> </NavLink>
                <NavLink className='circle-indicators text-white ff-serif' to={"../technology/1"}> <p>2</p> </NavLink>
                <NavLink className='circle-indicators text-white ff-serif' to={"../technology/2"}> <p>3</p> </NavLink>
            </div>
            <div>
                <h3 className='uppercase ff-serif text-lightblue' >The terminology...</h3>
                <h2 className='uppercase ff-serif fs-500'>{data.technology[id].name}</h2>
                <motion.p 
                  className='text-lightblue fs-600' 
                  style={{lineHeight:1.5}}
                  key = {id}
                  initial = {{opacity: 0}}
                  animate = {{opacity: 1, transition: {duration: 1}}}
                  exit = {{opacity: 0}}
                >{data.technology[id].description}</motion.p>
            </div>
          </div>
    </motion.div>
  )
}

export default Technology