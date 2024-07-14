import React, {useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null)
    const data = [
        {decs: "bccdd hfhfhfhfh hfhfhfhf ",
            filesize:".9mb",
            close:true,
            tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"

            }
        },

        {decs: "kiya likhu ",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true, tagTitle:"Upload", tagColor:"blue"

            }
        },

        {decs: "wha wha kiya baat hai ek show hai ",
            filesize:".10mb",
            close:true,
            tag:{isOpen:false, tagTitle:"Upload", tagColor:"green"

            }
        },

        {decs: "Hii I am Deepanshi",
            filesize:".9mb",
            close:false,
            tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"

            }
        }
    ]
    useState()
  return (
     <>
       <div ref={ref} className='w-full h-full fixed z-[3] top-0 left-0 flex gap-5 flex-wrap p-10'>
         {data.map((item,index)=>(
            <Card data ={item} reference={ref}/>
         ))}
        </div>
     </>
  )
}

export default Foreground