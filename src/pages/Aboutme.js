import React from 'react';
import '../styles/aboutme.css';
import ProfilePic from '../images/my_pic.png';

function Aboutme(){
    return(
        <div className="bg-black w-full h-screen text-center pt-20 align-baseline">
            <div className='pb-20'>
                <img className='h-48 md:mx-auto' src={ProfilePic} alt="profilepic" />
            </div>
            <div className="text-white md:container md:mx-auto md:w-4/12 p-5 lg:w-8/12">
                <h1 className="font-mono text-5xl">About me</h1>
                <div className='type-effect'>
                    <p className="font-mono typing1">Hi!, my name is Tommy, BA Marketing Graduate with an innovative </p>
                    <p className="font-mono typing2">tech mind, started coding Bootcamp by Univeristy of Manchester </p>
                    <p className="font-mono typing3">in 2022 March, capable of working with a variety of technology </p>
                    <p className="font-mono typing4">and software, Web Developer + Creative Thinker, i am a teamplayer </p>
                    <p className="font-mono typing5">with unique ideas and passionate to contribute in the field. </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutme