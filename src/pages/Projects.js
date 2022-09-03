import React from 'react';
import pjdata from "../project_data/projects.json";
import ProjectItem from '../components/Projectitem';

import { useState } from 'react';

function Projects(){    
    
 return(
    <div className="bg-black w-full h-full">
        <h1 className='text-white font-mono text-5xl text-center pt-16'>Projects</h1>
        < ProjectItem projects={pjdata} /> 
    </div>
    )
      
}

export default Projects