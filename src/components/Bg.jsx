import React from 'react'

function Bg() {
  return (
    <>
     <div className='w-full h-screen fixed z-[2]'>

     <div className='absolute top-[5%]  w-full py-10 flex justify-center text-xl text-zinc-300 font-semibold'>Documents.</div>
     <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vmin] leading-none tracking-tight font-semibold text-zinc-700'>Docs</h1>
     </div>
    </>
  )
}

export default Bg