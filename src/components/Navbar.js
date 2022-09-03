import React, { useState }from 'react';
import pdf from '../images/CV.pdf'


function Navbar(){
    let Links =[
        {name:"ABOUT ME", link:"/aboutme"},
        {name:"PROJECTS", link:"/projects"},
        {name:"CONTACT", link:"/"},
        {name:"VIEW MY CV", link: pdf},

    ]

    let [open,setOpen]=useState(false);

    return (
        <div className='shadow-md w-full sticky top-0 left-0'>
          <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
          <div className='text-2xl cursor-pointer flex items-center font-mono font-bold text-white'>
            <span className='text-2xl mr-1 pt-2'>
                HOME
            </span>
          </div>
          
          <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon style={{color:"white"}} name={open ? 'close':'menu'}></ion-icon>
          </div>
    
          <ul className={`bg-black md:flex md:items-center absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in font-mono font-bold ${open ? 'top-20 ':'top-[-490px]'}`}>
            {
              Links.map((link)=>(
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                  <a href={link.link} className='text-white hover:text-gray-400 bg-black duration-500'>{link.name}</a>
                </li>
              ))
            }
          </ul>
          </div>
        </div>
      )
    }


export default Navbar