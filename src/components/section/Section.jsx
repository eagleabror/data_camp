import React from 'react'
import vector from '../../assets/Vector 1.png' 
import sectionImg from '../../assets/Reading list 1.png'

const Section = () => {
  return (
    <div className='section w-full p-[40px]'>
        <div className="box-container grid md:grid-cols-2 sm:grid-cols-1 p-4">
            <div className="box p-4">
                <h1 className='text-[3rem] font-black'>Learn Any Skills to advance your career path</h1>
                <img src={vector} alt="" />
                <p className='leading-4 tracking-wide pt-10'>Want to improve your work skills? You need to study harder with the help of a great mentor to improve your performance at work</p>
                <button className='my-8 p-2 bg-[#DC4298] text-[#FFF] rounded-[2.696px]'>Contact</button>
            </div>
            <div className="box flex justify-center">
                <img src={sectionImg} alt="" />
                adaf
            </div>
        </div>
    </div>
  )
}

export default Section