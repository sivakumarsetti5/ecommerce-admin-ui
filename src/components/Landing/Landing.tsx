"use client"

import { appCtx } from '@/context/appCtx'
import React, { useContext } from 'react'
import { Home } from '../Home'
import { Login } from '../Login'

export const Landing = () => {
    const { state } = useContext(appCtx)
    return (
    <div>
        {state?.isLoggedIn ? <Home/> :<Login/> }
    </div>
  )
}



