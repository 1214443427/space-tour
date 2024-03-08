import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import DestinationLayout from './layouts/DestinationLayout'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route
      path='/' 
      element={<MainLayout />}
      >
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
  ))

  return (
      <RouterProvider router={router}/>
  )
}

export default App
