import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-700  text-white text-center py-6'>
      User: {userId}
    </div>
  )
}

export default User
