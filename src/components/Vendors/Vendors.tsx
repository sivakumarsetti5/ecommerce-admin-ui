import React from 'react'
import { AppTable } from '../shared/AppTable'

export const Vendors = () => {
  return (
    <div>
      <div className='text-end p-3'>
         <button className='btn btn-primary'>Add vendor</button>
      </div>
      <AppTable
         ths = {["Name","Phone"]}
         data={[{name:"sivakumar",phone:9985280640},{name:"giri",phone:9618564798}]}
         tds={["name","phone"]}
      />
    </div>
  )
}
