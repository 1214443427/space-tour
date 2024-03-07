import React, { useEffect, useRef, useState } from 'react'
import {NavLink, Outlet, useLocation, useParams} from 'react-router-dom'
import logo from '../assets/shared/logo.svg'
// import hamburger from '../assets/shared/icon-hamburger.svg'
// import homeBackground from '../assets/home/background-home-desktop.jpg'
// import homeBackgroundMobile from '../assets/home/background-home-mobile.jpg'
// import homeBackgroundTablet from '../assets/home/background-home-tablet.jpg'
// import destinationBackground from '../assets/destination/background-destination-desktop.jpg'
// import destinationBackgroundMobile from '../assets/destination/background-destination-mobile.jpg'
// import destinationBackgroundTablet from '../assets/destination/background-destination-tablet.jpg'

function MainLayout() {
    // const width = window.screen.width;
    // const height = window.screen.height;
    // const desktop = width >= 1440;
    // const tablet = width >= 768;
    // const [background, setBackground] = useState(homeBackgroundMobile)
    // const location = useLocation()
    // console.log(location)
    // useEffect(()=>{
    //     const destination = location.pathname.match('destination')
    //     const crew = location.pathname.match('crew')
    //     if(tablet){
    //         if(destination) setBackground(destinationBackground);
    //         else if(crew) setBackground('');
    //         else setBackground(homeBackgroundTablet);
    //     }
    //     if(desktop){
    //         if(destination) setBackground(destinationBackgroundTablet);
    //         else if(crew) setBackground('');
    //         else setBackground(homeBackground);
    //     }
    //     if(!tablet && !desktop){
    //         if(destination) setBackground(destinationBackgroundMobile);
    //         else if(crew) setBackground('');
    //         else setBackground(homeBackgroundMobile);
    //     }
    // },
    // [location.pathname])
    const menuRef = useRef(null);

    const toggleMenu = ()=>menuRef.current.classList.toggle('active');

    useEffect(()=>{
        
    },

    )

    return (
        <div className='flex main-layout' >
            <header className='flex header'>
                <img src= {logo} />
                <div className='header-line'>
                </div>
                <button 
                    className='mobile-nav-toggle hamburger' 
                    aria-controls='primary-navigation'
                    onClick={toggleMenu}>
                    <span className='sr-only' aria-expanded='false'>Menu</span></button>
                <div id='primary-navigation' className='flex underline-indicators primary-navigation'>
                    <NavLink to='/'>
                        <p className='uppercase ff-sans-cond'><b aria-hidden="true">00</b> Home</p>
                    </NavLink>
                    <NavLink to='destination'>
                        <p className='uppercase ff-sans-cond'><b aria-hidden="true">01</b> Destination</p>
                    </NavLink>
                    <NavLink to='crew'>
                        <p className='uppercase ff-sans-cond'><b aria-hidden="true">02</b> Crew</p>
                    </NavLink>
                    <NavLink to='technology'>
                        <p className='uppercase ff-sans-cond'><b aria-hidden="true">03</b> Technology</p>
                    </NavLink>
                </div>
            </header>
            <div className='mobile-nav-menu' ref={menuRef}>
                <button 
                    className='mobile-nav-toggle close'
                    onClick={toggleMenu}>
                </button>
                <ul>
                    <li>
                        <NavLink to='/' onClick={toggleMenu}>
                            <p className='uppercase ff-sans-cond'><b aria-hidden="true">00</b> Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='destination' onClick={toggleMenu}>
                            <p className='uppercase ff-sans-cond'><b aria-hidden="true">01</b> Destination</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='crew' onClick={toggleMenu}>
                            <p className='uppercase ff-sans-cond'><b aria-hidden="true">02</b> Crew</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='technology' onClick={toggleMenu}>
                            <p className='uppercase ff-sans-cond'><b aria-hidden="true">03</b> Technology</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
  )
}

export default MainLayout