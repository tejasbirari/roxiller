import React from 'react';
import {Link} from 'react-router-dom';


const Topbar = () => {
  return (
   <div className=' h-18 bg-violet-900 flex items-center  px-6'>

    <div className='max-md:basis-11/12 max-xl:basis-4/12 basis-3/12 flex items-center justify-between'>
    
    <Link to='/' className='text-xl font-semibold text-white cursor-pointer hover:scale-110' >
        Dashboard
    </Link>

    <Link to='/statistics' className='text-xl font-semibold text-white cursor-pointer hover:scale-110' >
        Statistics
    </Link>

    <Link to='/charts' className='text-xl font-semibold text-white cursor-pointer hover:scale-110' >
        Charts
    </Link>

    </div>

   </div>
  )
}

export default Topbar
