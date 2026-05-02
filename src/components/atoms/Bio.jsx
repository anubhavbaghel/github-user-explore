import React from 'react'
import mockUsers from '../../Data/mockData'
import useGlobalStore from "../../Data/globalStore"

const Bio = () => {
    const userInfo = useGlobalStore((state) => (state.userInfo))

  return (
    <div className='flex flex-col justify-start'>
        <h1>{userInfo.name}</h1>
        <p>{userInfo.login}</p>
        <p>{userInfo.bio}</p>
    </div>
  )
}

export default Bio
