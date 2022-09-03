import React, {useState, useEffect} from 'react';
import '../styles/projectItem.css'
import ProjectModal from './ProjectModal'

function ProjectItem({projects}) {  
    const [isOpen, setIsOpen] = useState(false)
    const [clickData, setClickData] = useState("")


    return (
    <>
        <div className='text-white md:container md:mx-auto md:w-5 md:h-4/6 p-5 lg:w-10/12 text-center flex items-center justify-center flex-wrap'>
            {projects.map((project) => {
                return project.id %2===0 ?(
                    <>
                    <div key={project.id} className="cursor-pointer relative transition duration-300 hover:scale-125 border-4 rounded-lg m-5 w-64 h-96 font-mono left-fly z-1" onClick={() => {setIsOpen(true); setClickData(project);}} >
                        <div className='w-40 h-40'> 
                            <img src={projects.image} alt="project"/>
                        </div>
                        <div className='pt-5'>
                            <p className='text-xl font-bold'> {project.title}</p>
                        </div>
                    </div>
                    <ProjectModal data={clickData} open={isOpen} onClose={() => setIsOpen(false)} />
                    </>
                    )
                    :
                    (
                    <>
                    <div key={project.id} className="cursor-pointer relative ransition duration-300 hover:scale-125 border-4 rounded-lg m-5 w-96 h-80 font-mono z-1"  onClick={() => {setIsOpen(true); setClickData(project);}} >
                        <div className='flex items-center justify-center'>
                            <div className='w-40 h-40'> 
                                <img src={projects.image} alt="project"/>
                            </div>
                        </div>
                        <div>
                        <p className='text-xl font-bold'> {project.title}</p>
                        </div>
                    </div>
                    <ProjectModal data={clickData} open={isOpen} onClose={() => setIsOpen(false)} />
                    </>
                    )
                })
            }   
        </div>
    </>
    
    )
}

export default ProjectItem