import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css'

import AnimatedRoutes from './components/AnimatedRoutes'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='*' element = {<AnimatedRoutes />} />
    )
  )

  return (
      <RouterProvider router={router}/>
  )
}

export default App
