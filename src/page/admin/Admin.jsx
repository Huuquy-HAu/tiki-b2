import React, { useState } from 'react'
import Category from './categoryManagement/Category'
import ManuAdmin from './manuAdmin/ManuAdmin'
import styles from './Admin.module.css'
import { Outlet } from 'react-router-dom'

function Admin() {
  const [data, setData] = useState('')
  return (
    <div className={styles.admin}>
        { <ManuAdmin setData= {setData}/>}
        <div className={styles.Outlet}>
          <Outlet context={data}/>
        </div>
    </div>
    
  )
}

export default Admin