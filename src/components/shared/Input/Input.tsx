import React from 'react'

export const Input = ({lbl,lblCols,inputCols,errorMsg,hasError,value,isRequired,type,name,errMsgCols,handleChange}:any) => {
  return (
    <div className='row mb-3'>
        <div className={`col-sm-${lblCols} text-end`}>
            <b>{lbl}{isRequired && <span className='text-danger'>*</span>}:</b>
        </div>
        <div className={`col-sm-${inputCols}`}>
            <input type={type} name={name} className='form-control' onChange={handleChange}/>
        </div>
        <div className={`col-sm-${errMsgCols}`}>
            {errorMsg && <b className='text-danger'>{errorMsg}</b>}
        </div>
    </div>
  )
}

