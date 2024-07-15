import React from 'react'
import profile_pic from "../assets/images/pp.jpg"
function NavBar() {
  return (
    <div className='flex h-32 justify-between items-center w-screen p-2 bg-slate-300 border-b border-black'>
        <div className='flex gap-2 items-center'>
            <div>
                <img className=' rounded-full w-20 h-20' src={profile_pic} alt=''/>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-[20px] sm:text-[30px] font-[700]'>John Doe</h1>
                <p className='text-[16px] sm:text-[18px]'>John@gmail.com</p>
            </div>
        </div>
        <div>
            <button className='p-1 w-28 sm:w-40 h-12 text-[14px] sm:text-[16px] font-[600] mr-3 bg-black text-white'>Add A Course</button>
        </div>
    </div>
  )
}

export default NavBar