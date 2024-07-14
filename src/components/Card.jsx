import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints ={reference} whileDrag = {{scale:1.2}} className='relative w-52 h-72 rounded-3xl bg-zinc-500 text-[3vmin] p-[2vmin] overflow-hidden'>
        <FaFileAlt/>
        <p className='text-lg leading-none mt-4 font-medium'>{data.decs}</p>
        <div className='footer absolute bottom-0  w-full  left-0'>
            <div className='flex
            items-center justify-between  font-medium -mt-10 py-3 px-3'>
                <h5 className='text-lg'>{data.filesize}</h5>
                <span>
                  {data.close ? <IoIosCloseCircleOutline/> : <LuDownload/>}  
                </span>
            </div>
             {
                data.tag.isOpen && (<div className={`tag ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} w-full h-10 flex
                    items-center justify-center`}>
                    <h3 className='text-sm font-bold'>{data.tag.tagTitle}</h3>
                </div>) 
             }
        </div>
    </motion.div>
  )
}

export default Card