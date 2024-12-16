import React from 'react'

function SelectCartButton({isSelected=false}) {
  return <div className='flex flex-col justify-end items-end flex-grow-0 flex-shrink-0 h-[74px] gap-[15px] pt-1'>
         {
            isSelected ? 
            <button
               className="flex justify-center items-end flex-grow-0 flex-shrink-0 h-10 relative gap-2.5 px-5 py-1.5 rounded-[25px] bg-[#7baed5]"
             >
               <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">Select</p>
               <svg
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                 preserveAspectRatio="none"
               >
                 <path
                   d="M19 12H12M12 12H5M12 12V5M12 12V19"
                   stroke="white"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                 ></path>
               </svg>
             </button> :
 
             <button className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative gap-2.5 px-5 py-1.5 rounded-[25px] bg-[#e77e3a]">
               <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-white">In Cart</p>
               <svg
                 width={24}
                 height={24}
                 viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                 preserveAspectRatio="none"
               >
                 <path
                   fill-rule="evenodd"
                   clip-rule="evenodd"
                   d="M4.36517 4.3637C4.71664 4.01223 5.28649 4.01223 5.63796 4.3637L12.0016 10.7273L18.3652 4.3637C18.7166 4.01223 19.2865 4.01223 19.638 4.3637C19.9894 4.71517 19.9894 5.28502 19.638 5.63649L13.2744 12.0001L19.638 18.3637C19.9894 18.7152 19.9894 19.285 19.638 19.6365C19.2865 19.988 18.7166 19.988 18.3652 19.6365L12.0016 13.2729L5.63796 19.6365C5.28649 19.988 4.71664 19.988 4.36517 19.6365C4.01369 19.285 4.01369 18.7152 4.36517 18.3637L10.7288 12.0001L4.36517 5.63649C4.01369 5.28502 4.01369 4.71517 4.36517 4.3637Z"
                   fill="white"
                 />
               </svg>
             </button>
       }</div>
}

export default SelectCartButton