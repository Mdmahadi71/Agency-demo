import { useState } from 'react'
import { createBrowserRouter,createRoutesFromElements ,Route ,RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={ <Layout/>}>
      <Route path='/' element={<Home/>}></Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
