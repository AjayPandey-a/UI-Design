import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full font-bold text-2xl h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel illum iusto modi. Obcaecati, qui sunt?</p>
                <div className='flex justify-between'>
                    <button style={{background:props.color}} className=' text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                    <button className=' text-white font-medium px-5 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>

        </div>
  )
}

export default RightCardContent
