import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import DestinationLayout from '../layouts/DestinationLayout'
import Destination from '../pages/Destination'
import Crew from '../pages/Crew'
import Technology from '../pages/Technology'
import MainLayout from '../layouts/MainLayout'

import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    //const location = useLocation();
    
    return (
    <>
        <AnimatePresence>
            <Routes >
                <Route
                path='/'
                element={<MainLayout/>}>
                <Route
                index
                element={<Home />}/>
                <Route
                    path='destination'
                    element={<DestinationLayout />}
                    >
                    <Route index element={<Navigate to="0" />} />
                    <Route
                        path=':id' 
                        element={<Destination />}
                        />
                </Route>
                <Route
                    path='crew'
                    element={<Navigate to="0" />}/>
                <Route
                    path='crew/:id'
                    element={<Crew />}
                    />
                    <Route
                    path='technology'
                    element={<Navigate to="0" />}/>
                <Route
                    path='technology/:id'
                    element={<Technology />}
                    />
                </Route>
            </Routes>
        </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes