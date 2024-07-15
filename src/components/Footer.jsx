import React from 'react'

function Footer() {
  return (
    <footer className='flex bg-slate-300 h-10 items-center justify-center border-t border-black' >
        <p className='text-[14px] font-[600]'>Copyright{new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer