import React, { useState, useEffect } from 'react'
import { Notices } from './Notices'

const NoticesSearch = () => {
    const [keyData, setkeyData] = useState("")
    const [Search, setSearch] = useState([])


    
        const handleKeyData = (e) =>{

            const value = e.target.value
            setkeyData(value)
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            setSearch( [keyData]);
            setkeyData("");
          }


  

  return (
    <>
    <div
    className='text-white w-full h-[30vh] flex justify-center items-center gap-5 '>
<div className='pb-7 text-lg font-mono'>
    <h2>Buscar Noticias Por titulo</h2>    
</div>      
<div className="mb-3 lg:w-1/2  ">

    <form onSubmit={handleSubmit} className="relative mb-4 flex w-full flex-wrap items-stretch">

    <input
    onChange={handleKeyData}
    value={keyData}
    type="search"
    className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
    placeholder="Search"
    aria-label="Search"
    aria-describedby="button-addon1" />
    
    <button
      className="relative z-[2] flex items-center rounded-r bg-sky-700 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="submit"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd" />
      </svg>
    </button>
          </form>

</div>
    </div>
    <Notices search={Search} />
    </>
  )
}

export default NoticesSearch