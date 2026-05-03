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
      {(userInfo.name) ? (<UserSection/>) : (<h3 className="text-3xl text-center py-[10%] bg-green-200 rounded-2xl mb-2">Enter Username in the Search bar</h3>)}
      {(userInfo.name && userRepoInfo.length !== 0) && <RepositorySection/>}
      {(userInfo.name && userRepoInfo.length == 0) && <h3 className='text-center py-[10%] bg-yellow-100 rounded-2xl text-3xl'>No repositories found for the user</h3>}
    </>
  )
}

export default App
