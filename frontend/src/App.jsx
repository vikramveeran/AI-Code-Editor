import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import { me } from './features/me'
function App() {

   const dispatch=useDispatch()
    useEffect(()=>{
     const fetch=async () => {
      const data=await me()
      dispatch(setUserData(data))
     }
     fetch()
    },[])

  return(
  
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
     </Routes>
     </BrowserRouter>
    
  )
}

export default App
