"use client"

import React, { useContext, useEffect, useState } from 'react'
import { AppTable } from '../shared/AppTable'
import { AppForm } from '../shared/AppForm'
import Ajax from '@/services/ajax'
import { appCtx } from '@/context/appCtx'
import { updateStoreData } from '@/services/functions'
import { VendorForm } from './VendorForm'
export const Vendors = () => {
  const [vendorsList,setVendorsList] = useState([])
  const[isShowForm,setIsShowForm] = useState(false)
  const[rowData,setRowData] = useState({})
  const[isEdit,setIsEdit] = useState(false)
  

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
  const fnEdit = (row:any)=>{
    // console.log(row)
    setIsEdit(true)
    setRowData(row)
    setIsShowForm(true)

  }
  const fnDelete = ()=>{
    alert("Delete")
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
         handleEdit={fnEdit}
         handleDelete={fnDelete}
         
      />
      {isShowForm && 
      <AppForm setIsShowForm={setIsShowForm}>
        <VendorForm setIsShowForm={setIsShowForm} getVendorsList={getVendorsList} rowData={rowData} isEdit={isEdit}/>
      </AppForm>}
    </div>
  )
}
