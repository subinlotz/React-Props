import React from 'react'
import './Cards.css'

function Cards({data}) {
  
  return (

    <div className='flex justify-center gap-20 max-w-7xl flex-wrap'>
      {
      data.map((item, index)=>(
        <div className='gradient-border bg-black w-72 h-80 flex flex-col  justify-center items-center border-4'>
          <img className='w-44 h-32' src={item.image}/>
          <h2 className='text-2xl text-blue-500'>{item.name}</h2>
          <p className='text-blue-500'>{item.description}</p>
    </div>
      ))
     }
    </div>
    
  )
}

export default Cards
