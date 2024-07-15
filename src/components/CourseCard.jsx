import React from 'react'
function CourseCard(props) {
  return (
    <div className='flex items-center flex-col gap-2 w-44 border justify-center border-black h-44 cursor-pointer'>
        <h1 className='text-[15px] font-[600]'>{props.title}</h1>
        <img className=' w-28' src={props.img} alt=''/>
    </div>
  )
}

export default CourseCard