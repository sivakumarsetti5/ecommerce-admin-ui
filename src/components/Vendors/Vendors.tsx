"use client"

import React, { useContext, useEffect, useState } from 'react'
import { AppTable } from '../shared/AppTable'
import { AppForm } from '../shared/AppForm'
import Ajax from '@/services/ajax'
import { appCtx } from '@/context/appCtx'
import { updateStoreData } from '@/services/functions'

export const Vendors = () => {
  const [vendorsList,setVendorsList] = useState([])
  const[isShowForm,setIsShowForm] = useState(false)

  const{dispatch}= useContext(appCtx)

  const fnAddVendor = () =>{
    setIsShowForm(true)
  }
  const getVendorsList = async () =>{
    try{
      updateStoreData(dispatch,'LOADER',true)
      const res =  await Ajax.get('vendor/get')
      //console.log(res.data)
      setVendorsList(res?.data)
    }catch(ex:any){
      console.error(`Vendor: ${ex.message}`)
    }finally{
      updateStoreData(dispatch,'LOADER',false)
    }
  }

  useEffect(()=>{
    getVendorsList()
  },[])

  return (
    <div>
      <div className='text-end p-3'>
         <button onClick={fnAddVendor} className='btn btn-primary'>Add vendor</button>
      </div>
      <AppTable
         ths = {["Id","Uid","Password","Phone","Address"]}
         data={vendorsList}
         tds={["_id","uid","pwd","phone","address"]}
      />
      {isShowForm && 
      <AppForm setIsShowForm={setIsShowForm}>
        <div>SivaKumar</div>
      </AppForm>}
    </div>
  )
}
