import React, { useContext, useState } from 'react'
import {appCtx} from '../context/appCtx'
import { Input } from '@/common/components/Input'
import config  from './config.json'
import { handleFieldLevelValidation, handleFormLevelValidation } from '@/common/services/validations'

export const Login = () => {
    const[inputControls,setinputControls] = useState(config)
    const ctxData = useContext(appCtx)
    const fnLogin = () => {
        const[isInvalid,dataObj]:any = handleFormLevelValidation(inputControls,setinputControls)
        if (isInvalid) return
        alert(`Sending data to the server ${JSON.stringify(dataObj)}`)    //if valid form then send the data to server
        // ctxData.dispatch({     
        //     type: "LOGIN",
        //     payload: true
        // })
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
