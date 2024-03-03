import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const Charts = ({ barChartData, pieChartData } ) => {
  const { range, itemsSold } = barChartData;
  const { category, items } = pieChartData;

  
  console.log(pieChartData);

  return (
    <div className='mt-12 mb-32 mx-16 flex flex-col items-center max-md:mx-2'>

      <div className='flex items-center justify-center mb-8'>
        <div className='text-2xl font-semibold'>Charts</div>
      </div>

      <div className='flex items-center justify-between md:w-11/12 max-md:flex-col max-md:w-full'>

        <div className='border-2 border-violet-400 rounded-xl max-md:my-6 w-5/12 max-md:w-full'>
          <div className='mt-6 mb-12 ml-6 text-xl font-semibold'>Bar Chart</div>

          <div>
            <BarChart 
              xAxis={[{ scaleType: 'band', data: range }]}
              series={[{ data: itemsSold }]}
              height={300}
            />
          </div>
        </div>

        <div className='border-2 border-violet-400  rounded-xl font-semibold w-5/12 max-md:w-full'>
          <div className='mt-6 mb-12 ml-6 text-xl font-semibold'>Pie Chart</div>

          <div className='mb-8'>
            <PieChart
              series={[
                {
                  data: category.map((c, index) => ({ value: items[index], label: c }))
                }
              ]}
              height={200}
            />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Charts