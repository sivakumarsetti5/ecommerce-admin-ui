import React, { useContext } from 'react'
import {appCtx} from '../context/appCtx'
import { Input } from '@/common/components/Input'
import config  from './config.json'

export const Login = () => {
    const ctxData = useContext(appCtx)
    const fnLogin = () => {
        ctxData.dispatch({
            type: "LOGIN",
            payload: true
        })
    }
    return (
        <div className='container-fluid'>
            <h3 className='text-center mt-3 mb-3'>Login</h3>
            {config.map(obj=>{
                return <Input {...obj}/>
            })}
            <div className='row'>
                <div className='offset-sm-5 col-sm-7'>
                   <button className='btn btn-primary' onClick={fnLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}
