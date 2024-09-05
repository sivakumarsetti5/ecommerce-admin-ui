import React, { useContext, useState } from 'react'
import {appCtx} from '../context/appCtx'
import { Input } from '@/common/components/Input'
import config  from './config.json'

export const Login = () => {
    const[inputControls,setinputControls] = useState(config)
    const ctxData = useContext(appCtx)
    const fnLogin = () => {
        const dataObj : any = {}
        const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
        clonedInputControls.forEach((obj :any) =>{                 //check each input field have data or not
            dataObj[obj.name] = obj.value
            obj.hasError = !obj.value                            //if data is there then update hasError is false otherwise true
        })
        const isInValid = clonedInputControls.some((obj:any)=> obj.hasError) //If any of the input object with hasError is true then it is invalid
        if(isInValid){                                    //if it is invalid then form is updated using setinputControl()   
            setinputControls(clonedInputControls)
            return
        }
        alert(`Sending data to the server ${JSON.stringify(dataObj)}`)    //if valid form then send the data to server
        // ctxData.dispatch({     
        //     type: "LOGIN",
        //     payload: true
        // })
    }
    const handleChange = (event:any) =>{
          const{name,value} = event?.target
          const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
          let inputObj :any = clonedInputControls.find((obj :any)=>obj.name === name)
          inputObj.value = value
          inputObj.hasError = !value
          setinputControls(clonedInputControls)
    }
    // console.log(inputControls)
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
