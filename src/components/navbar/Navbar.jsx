import React, { useState } from 'react'
import { FaTelegram } from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'
import { RiCloseLine } from 'react-icons/ri'
import { TfiMenu } from 'react-icons/tfi'
import Mobile from './Mobile'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const [appOpen, setAppOpen] = useState(false);
    return (
        <>
            <nav className="w-full custom-container p-[40px] text-black flex flex-row items-center justify-between bg-[#636363] py-6 relative">
                <h1 className='text-blue'>Data Camp</h1>
                <div className='flex gap-[30px] justify-end items-center'>
                    <ul className="xl:flex hidden flex-row gap-8 font-tahomaRegular">
                        <li className="text-[14px]">
                            Asosiy
                        </li>
                        <li className="text-[14px]">
                            Kurslar
                        </li>
                        <li className="text-[14px]">
                            Bog’lanish
                        </li>
                    </ul>
                    <div className="flex flex-row items-center justify-end">
                        <ul className="flex flex-row items-center gap-6">
                            <button
                                className="button-hover w-[80px] h-[60px] rounded-xl border border-sky-500 flex flex-row items-center justify-center"
                                onClick={() => setAppOpen(!appOpen)}
                            >
                                Eng
                            </button>
                        </ul>
                        <div className="xl:hidden flex items-center justify-center w-[40px] h-[40px] ml-4">
                            {open ? (
                                <RiCloseLine
                                    className="text-4xl text-yellow cursor-pointer"
                                    onClick={() => setOpen(!open)}
                                />
                            ) : (
                                <TfiMenu
                                    className="text-3xl text-yellow cursor-pointer"
                                    onClick={() => setOpen(!open)}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <Mobile open={open} />
            </nav>
        </>
    )
}

export default Navbar