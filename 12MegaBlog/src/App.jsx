import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth.js'
import './App.css'
import {login, logout} from './store/authSlice.js'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect( () => {
    authService.getCurrentUser()
    .then( (userData) => {
      if(userData){
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  return (
    <>
      <h1>A blog app with appwrite</h1>
    </>
  )
}

export default App
