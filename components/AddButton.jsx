import React from 'react'

const AddButton = ({setClose}) => {
  return (
    <div className='cursor-pointer border w-32 ml-2 mt-4 p-2 text-center rounded-lg bg-lime-600 text-white' onClick={()=>setClose(false)}>Add New Bowl</div>
  )
}

export default AddButton