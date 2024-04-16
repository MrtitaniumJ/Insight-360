import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
const HeaderMaster = () => {
  return (
    <div className='flex justify-between items-center bg-gray-700 h-[10vh] fixed w-full '>
    <div  className="text-white  font-bold text-2xl p-4">
    <Typewriter
            words={["Khudka"]}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={2000}
          
          />
    </div>
    <div>
    {/* <Link to="loginmaster" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 mr-4 border border-gray-400 rounded shadow">Login as a Master</Link>
    <Link to="registermaster" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 mr-4 border border-gray-400 rounded shadow">Register as a Master</Link> */}
    </div>
    </div>
  )
}

export default HeaderMaster