import React, { useContext, useEffect, useState } from 'react'
import { Input } from '../shared/Input'
import { TextArea } from '../shared/TextArea'
import { handleFieldLevelValidation, handleFormLevelValidation,setFormData } from '@/services/validations'
import config from './config.json'
import { appCtx } from '@/context/appCtx'
import Ajax from '@/services/ajax'
import { updateStoreData } from '@/services/functions'

export const VendorForm = ({setIsShowForm,getVendorsList,rowData,isEdit}:any) => {
    const[inputControls,setinputControls] = useState(config)
    const {dispatch}=useContext(appCtx)
    const handleChange = (event:any) =>{
        handleFieldLevelValidation(event,inputControls,setinputControls)
    }

    const fnSubmitBtn = async() =>{
        const[isInvalid,data]:any = handleFormLevelValidation(inputControls,setinputControls)
        if (isInvalid) return
        try{
          updateStoreData(dispatch,"LOADER",true)
          const res = await Ajax.post('vendor/save',{data})
          const{acknowledged,insertedId} = res?.data
          if(acknowledged && insertedId){
            setIsShowForm(false)
            getVendorsList()
            updateStoreData(dispatch, 'TOASTER', {
                isShowToaster: true,
                toasterMsg: 'Registered !!!',
                color: 'green'
            })
          }

        }catch(ex){
          console.error('vendor form',ex)
          updateStoreData(dispatch, 'TOASTER', {
            isShowToaster: true,
            toasterMsg: 'Not Registered !!!',
            color: 'red'
        })
        }finally{
          updateStoreData(dispatch,"LOADER",false)
        }
      }
    const fnUpdateBtn = async()=>{
      const[isInvalid,data]:any = handleFormLevelValidation(inputControls,setinputControls)
        if (isInvalid) return
        try{
          updateStoreData(dispatch,"LOADER",true)
          const res = await Ajax.put(`vendor/update?id=${rowData._id}`,{data})
          const{acknowledged,modifiedCount} = res?.data
          if(acknowledged && modifiedCount){
            setIsShowForm(false)
            getVendorsList()
            updateStoreData(dispatch, 'TOASTER', {
                isShowToaster: true,
                toasterMsg: 'Updated !!!',
                color: 'green'
            })
          }
        }catch(ex){
          console.error('vendor form',ex)
          updateStoreData(dispatch, 'TOASTER', {
            isShowToaster: true,
            toasterMsg: 'Not Updated !!!',
            color: 'red'
        })
        }finally{
          updateStoreData(dispatch,"LOADER",false)
        }
    }
      
    useEffect(()=>{
      setFormData(inputControls,setinputControls,rowData,isEdit,'uid')
    },[rowData])

  return (
    <div className='container-fluid mt-5' >
        {inputControls.map(obj=>{
                switch(obj.tag){
                  case 'input':
                    return <Input {...obj} key={obj.name} handleChange={handleChange}/>
                  case 'textarea':
                    return <TextArea {...obj} key={obj.name} handleChange={handleChange}/>
                  default:
                    return <></>  
                }
                
            })}
        <div>
          {isEdit ? <button className='btn btn-primary form-control' onClick={fnUpdateBtn}>Update</button> :
                    <button className='btn btn-primary form-control' onClick={fnSubmitBtn}>Submit</button> 
          }
        </div>
        </div>
  )
}
