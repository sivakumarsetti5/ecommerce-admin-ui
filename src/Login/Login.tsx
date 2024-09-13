import React, { useContext, useState } from 'react'
import {appCtx} from '../context/appCtx'
import { Input } from '@/common/components/Input'
import config  from './config.json'
import { handleFieldLevelValidation, handleFormLevelValidation } from '@/common/services/validations'
import axios from 'axios'
import Ajax from '@/common/services/ajax'
import { updateStoreData } from '@/common/services/functions'

export const Login = () => {
    const[inputControls,setinputControls] = useState(config)
    const {dispatch} = useContext(appCtx)
    const fnLogin = async() => {
        try{
        const[isInvalid,data]:any = handleFormLevelValidation(inputControls,setinputControls)
        if (isInvalid) return
        updateStoreData(dispatch,"LOADER",true)
        const response = await Ajax.post("auth/login",{data})
        //console.log(response)
        if(response?.data?.length >0){
            updateStoreData(dispatch,"LOGIN",true)
        }else{
            updateStoreData(dispatch,"TOASTER",{
                isShowToaster:true,
                toasterMsg:"Check the uid and pwd",
                color:'red'
            })
        }
    }catch(ex){

    }finally{
        updateStoreData(dispatch,"LOADER",false)
    }
    //alert(`Sending data to the server ${JSON.stringify(dataObj)}`)    //if valid form then send the data to server 
    }
    const handleChange = (event:any) =>{
        handleFieldLevelValidation(event,inputControls,setinputControls)
    }
    return (
        <div className='container-fluid'>
            <h3 className='text-center mt-3 mb-3'>Login</h3>
            {inputControls.map(obj=>{
                return <Input {...obj} key={obj.name} handleChange={handleChange}/>
            })}
            <div className='row'>
                <div className='offset-sm-5 col-sm-7'>
                   <button className='btn btn-primary' onClick={fnLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}
