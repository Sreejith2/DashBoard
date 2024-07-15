import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LinkIcon from '@mui/icons-material/Link';
import CourseCard from '../components/CourseCard';
import { PieChart } from '@mui/x-charts/PieChart';
import study from "../assets/images/studying.svg"
import scrum from "../assets/images/scrum_board.svg"
import reading from "../assets/images/reading_book.svg"
import analytics from "../assets/images/analytics.svg"

function DashBoard() {
    const [collapse,setCollapse] = useState(true)
    const pieChartData = [
        { id: 1, value: 10, label: 'Maths' },
        { id: 2, value: 20, label: 'Science' },
        { id: 3, value: 30, label: 'Physics' },
    ];
  return (
    <div className='grid grid-cols-12 flex-1'>

        <div className={`${collapse?' col-span-3 sm:col-span-1 ':' col-span-4  sm:col-span-2 '} bg-slate-300 border-r border-black `}>
            <div className={`${collapse?'items-center':'pl-2'} flex flex-col gap-6 pt-5`}>
                <MenuIcon fontSize='large' onClick={()=>setCollapse((prev)=>!prev)} className=' cursor-pointer' />
                <ul className='flex flex-col gap-10 '>
                    <div className='flex gap-2 items-center cursor-pointer '>
                        <AccountBoxIcon fontSize='large'/>
                        {!collapse?<li className=' text-[14px] sm:text-[16px] font-[600]'>My Profile</li>:null}
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer '>
                        <SchoolIcon fontSize='large' />
                        {!collapse?<li className=' text-[14px] sm:text-[16px] font-[600]'>Enrolled Courses</li>:null}
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer '>
                        <QuizIcon fontSize='large'/>
                        {!collapse?<li className=' text-[14px] sm:text-[16px] font-[600]'>My Quiz Attempts</li>:null}
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer '>
                        <NotificationsIcon fontSize='large'/>
                        {!collapse?<li className=' text-[14px] sm:text-[16px] font-[600]'>My Course Activity</li>:null}
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer '>
                        <LinkIcon fontSize='large'/>
                        {!collapse?<li className=' text-[14px] sm:text-[16px] font-[600]'>My Account</li>:null}
                    </div>
                </ul>
            </div>
        </div>

        <div className={`${collapse?' col-span-9 sm:col-span-11':' col-span-8 sm:col-span-10'}`}>
            <div className=' flex flex-col items-center md:grid gap-3 md:grid-cols-4 p-3'>
                <CourseCard img={study} title='Upcoming Classes'  />
                <CourseCard img={analytics} title='Courses Enrolled'  />
                <CourseCard img={reading} title='Resources'  />
                <CourseCard img={scrum} title='Upcoming tasks' />
            </div>
            <hr className=' w-[100%] h-[1px] bg-black ' />
            <div className='sm:p-3 grid grid-cols-1 md:grid-cols-3 gap-2 p-3'>
                <div className='flex flex-col justify-center bg-slate-200 text-center p-3'>
                    <h1 className=' text-[16px] font-[600]'>Marks</h1>
                    <PieChart
                        series={[
                            {
                                data:pieChartData,
                            },
                        ]}
                        width={300}
                        height={150}
                    />
                </div>
                <div className='flex flex-col justify-center bg-slate-200 text-center p-3'>
                    <h1 className=' text-[16px] font-[600]'>Course Completion</h1>
                    <PieChart
                        series={[
                            {
                                data:pieChartData,
                            },
                        ]}
                        width={300}
                        height={150}
                    />
                </div>
                <div className='flex flex-col justify-center bg-slate-200 text-center p-3'>
                    <h1 className=' text-[16px] font-[600]'>Time Spend</h1>
                    <PieChart
                        series={[
                            {
                                data:pieChartData,
                            },
                        ]}
                        width={300}
                        height={150}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoard