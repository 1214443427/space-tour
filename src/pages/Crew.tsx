import React from 'react'
import data from '../data.json'
import { NavLink, useOutletContext, useParams } from 'react-router-dom'
import crew0 from '../assets/crew/image-douglas-hurley.png'
import crew1 from '../assets/crew/image-mark-shuttleworth.png'
import crew2 from '../assets/crew/image-victor-glover.png'
import crew3 from '../assets/crew/image-anousheh-ansari.png'

function Crew() {
  const param = useParams()
  const id:number = param.id;
  const crewImagesList:string[] = [crew0, crew1, crew2, crew3]
  return (
    <div className='grid-container grid-container--crew'>
        <h4 className='numbered-titles uppercase fs-700 ff-sans-cond'><b className='text-lightblue' aria-hidden="true" style={{opacity:"25%"}}>02</b>Meet your crew</h4>
        <div className='crew-img-div'>
          <img src={crewImagesList[id]}></img>
        </div>
        <div className='tab-list flex-container'>
          <NavLink className='dot-indicators' to={"../crew/0"}> <div className="dot"></div> </NavLink>
          <NavLink className='dot-indicators' to={"../crew/1"}> <div className="dot"></div> </NavLink>
          <NavLink className='dot-indicators' to={"../crew/2"}> <div className="dot"></div> </NavLink>
          <NavLink className='dot-indicators' to={"../crew/3"}> <div className="dot"></div> </NavLink>
        </div>
          <div className="crew-text-area">
            <h3 className='uppercase ff-serif' style={{opacity:"0.4951"}}>{data.crew[id].role}</h3>
            <h2 className='uppercase ff-serif fs-500'>{data.crew[id].name}</h2>
            <p className='text-lightblue fs-600' style={{lineHeight:1.5}}>{data.crew[id].bio}</p>
          </div>
    </div>
  )
}

export default Crew