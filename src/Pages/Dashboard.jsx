import React from 'react'
import './Dashboard.css'
import Sidebar from '../Components/Header/Sidebar/Sidebar'

function Dashboard() {
  return (
    <div className='container'>
      <div className='side-bar'>
        <Sidebar/>
      </div>
      <div className='body-container'>

      </div>
      <div className='right-icons'></div>
    </div>
  )
}

export default Dashboard