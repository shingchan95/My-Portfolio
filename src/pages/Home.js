import React from 'react';
import homepageBg from '../images/homepage_background.mp4'
import '../styles/Home.css'


function Homepage(){
    return (  
            <div className='relative'>
                <video className='object-cover w-full h-screen' src={homepageBg} autoPlay loop muted />
                <div className='text-white absolute absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-mono welcome-text text-center' >
                    <h1 className="text-7xl font-bold">HI I AM TOMMY </h1> 
                    <h1 className="text-3xl font-bold pt-2">WELCOME TO MY PORTFOLIO</h1> 
                    <div className='pt-8'>
                        <button className='rounded-full py-2 px-3 uppercase text-s font-bold cursor-pointer tracking-wider border border-4 font-mono'>
                           Explore About Me
                        </button>
                    </div> 
                </div>        
            </div>

    )
}


export default Homepage