import React from 'react';
import '../styles/projects.css';
import pjdata from "../project_data/projects.json";
import ProjectItem from '../components/VerticalProjectitem'
import { useState } from 'react';

function Projects(){
    const skills= ["html","css","javascript", "sql"];
    const [checked, setchecked] = useState([])
    const [portfolio, setPortfolio] = useState("")

    const check_boxes = (e) =>{   
        let updatedList= [...checked];
        if (e.target.checked){
            updatedList=[...checked, e.target.value];
            
        }else{
            updatedList.splice(checked.indexOf(e.target.value), 1);
        }
        setchecked(updatedList)

        let filteredList=[]
        // updatedList.forEach(listItem=>{
        //     const res = pjdata.filter(item => item.skills.includes(listItem));
        //     console.log(res)

            pjdata.forEach(listItem=>{
                console.log(listItem.skills)
                const res = updatedList.filter(item => item.includes(listItem.skills));
                console.log(res)

                
            if(res.length>0 ){
                // filteredList.push(...res)
                filteredList= [...res]

                // console.log(checked)
            }

        })
    
        setPortfolio(filteredList)

    } 
    
    
    
 return(
    <div className ="projects-page" id="projects">
        <h2>Projects</h2> 
            <div className="filter-container">
                <table className="skills-buttons"  >
                    <tbody onChange={check_boxes}>
                        <tr>
                        <td><p>Filter by skills:</p></td>
                        {skills.map((skill) => (
                            <td><input type="checkbox" id={skill} name="selector" value={skill} /><label className="selector option-a" htmlFor={skill}> {skill} </label></td>
                        ))} 
                        </tr>
                    </tbody>
                </table>
            </div>
            {portfolio && portfolio.map((project)=>(
                < ProjectItem key={project.id} project={project}/> 
            ))}
    </div>
    )
      
}

export default Projects