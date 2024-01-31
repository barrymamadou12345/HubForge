import React from 'react'
import { PageAccueil } from '../components/composPageAccueil/PageAccueil'

export const Template = () => {
  return (
    <div>
      <div className=''>
        <PageAccueil/>
      </div>
      <div className="">
        <Outlet/>
      </div>
    </div>
  )
}
