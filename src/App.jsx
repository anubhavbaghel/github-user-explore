import { useState } from 'react'
import './App.css'
import UserCard from './components/molecules/UserCard'
import Navbar from './components/molecules/Navbar'
import UserSection from './components/organism/UserSection'
import RepositorySection from './components/organism/RepositorySection'
import useGlobalStore from "./Data/globalStore";


function App() {

  const userInfo = useGlobalStore((state) => state.userInfo);
  const userRepoInfo = useGlobalStore((state) => state.userRepoInfo);
  return (
    <>
      <Navbar/>
      {(userInfo) ? (<UserSection/>) : (<p>Enter username in search bar to get details</p>)}
      {(userRepoInfo.length !== 0)? <RepositorySection/> : <p className='text-center text-3xl'>No repositories found for the user</p>}
    </>
  )
}

export default App
