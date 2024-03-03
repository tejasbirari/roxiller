
const Statistics = ({month, totalSales, totalSoldItem, totalNotSoldItem}) => {

  const m = new Date(month);
  const monthName = m.toLocaleString('en-US', { month: 'long' })

  console.log(monthName);
  
  return (
    <div className='mt-12 mb-32 mx-16 flex flex-col items-center max-md:mx-2'>

      <div className='flex items-center justify-center mb-8'>

        <div className='text-2xl font-semibold'>Statistics - &nbsp;</div>

        <div className='text-2xl font-semibold underline'> 
            {monthName === "Invalid Date" ?  'Select Month' : monthName }
        </div>

      </div>

      <div className='border-2 border-violet-400 md:w-3/12 max-md:w-full rounded-xl font-semibold'>

        <div className='flex items-center justify-between py-4 mx-6'>
          <div className='text-lg '>Total Sale</div>
          <div>{totalSales}</div>
        </div>

        <div className='flex items-center justify-between py-4 mx-6'>
          <div className='text-lg '>Total sold item</div>
          <div>{totalSoldItem}</div>
        </div>

        <div className='flex items-center justify-between py-4 mx-6'>
          <div className='text-lg '>Total not sold items</div>
          <div>{totalNotSoldItem}</div>
        </div>

      </div>

    </div>
  )
}

export default Statistics