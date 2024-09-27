import React from 'react'

export const AppTable = ({ths,data,tds}:any) => {
  return (
    <div className='table-responsive'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    {ths?.map((val:any,index:any)=>{
                        return <th id={`th ${index}`}>{val}</th>
                    })}
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((obj:any,index:any)=>{
                    return <tr id={`tr ${index}`}>
                        {tds?.map((val:any,index:any)=>{
                            return <td id={`td ${index}`}>{obj[val]}</td>
                        })}
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
