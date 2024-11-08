import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect( ()=> {
    //     fetch("https://api.github.com/users/Bishwash3")
    //     .then( res => res.json())
    //     .then( data =>  setData(data))
    // })
  return (
    <div className='bg-gray-600 text-center text-white py-6'>
      Followers: {data.followers}
      <img className='' src= {data.avatar_url} alt="Github Image" width={300}/>
    </div>
  )
}

export default Github

export  const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Bishwash3')
    return response.json()
}
