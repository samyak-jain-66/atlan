import React from 'react'

const Community = ({heading, subHeading}) => {
  return (
        <div className='px-8 py-6 bg-[#f6f5f4] rounded-xl w-[280px] border-[2px] border-[#f6f5f4]'>
          <h2 className='text-[#0057A8] antialiased md:text-[53px] text-[35px] font-bold'>
           {heading}
          </h2>
          <h6 className='text-[16px] text-[#121212] antialiased'>
            {subHeading}
          </h6>
        </div>
  )
}

export default Community
