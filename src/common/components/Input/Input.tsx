import React from 'react'

export const Input = ({lbl,lblCols,inputCols,errorMsg,type,name,errMsgCols,handleChange}:any) => {
  return (
    <div className='row mb-3'>
        <div className={`col-sm-${lblCols} text-end`}>
            <b>{lbl}:</b>
        </div>
        <div className={`col-sm-${inputCols}`}>
            <input type={type} className='form-control'/>
        </div>
        <div className={`col-sm-${errMsgCols}`}>
            <b className='text-danger'>{errorMsg}</b>
        </div>
    </div>
  )
}
