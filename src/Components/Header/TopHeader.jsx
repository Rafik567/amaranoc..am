import React from 'react'

const TopHeader = () => {
  return (
    <>
      <div className='flex gap-[100px] justify-center flex-wrap '>
        <div className='flex gap[200px] flex-wrap'>
          <img src='https://amaranoc.am/images/logo.svg' />
        </div>
        <div className='flex gap-[35px] mt-[20px] flex-wrap'>
          <p>Գլխավոր</p>
          <p>Զեղչեր</p>
          <p>Ծառայություններ</p>
          <p>Մեր մասին</p>
        </div>
        <div className='mt-[20px] flex gap-[45px]'>
          <i className="fa fa-globe" style={{ fontSize: '24px' }}></i>
          <i className="fa fa-male" style={{ fontSize: '24px' }}></i>
        </div>
        <div className='mt-[15px]   '>
          <input className=' w-[250px] rounded-[20px] border-2 border-gray-300 p-[8px]' type="text" placeholder="Որոնում..." />
        </div>
      </div>


    </>
  )
}

export default TopHeader