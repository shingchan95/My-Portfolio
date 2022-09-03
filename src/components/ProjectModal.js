import { data } from 'autoprefixer'
import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(105, 105, 105, .1)',
  zIndex: 1000
}

export default function ProjectModal ({data, children, open, onClose}) {
  if (!open) return null
  else{
    return(
      <>
      <div style={OVERLAY_STYLES} onClick={onClose} className="cursor-pointer"/>
        <div style={MODAL_STYLES} className="md:w-3/6 md:h-3/5">
            <div className='text-black'>
              <img src= {data.image} className="w-3/6 h-3/5" alt="project"/>
                <p>{data.title}</p>
                <p>{data.description}</p>
                <p>{data.github}</p>
                <p>{data.deployment}</p>
                <p>{data.skills}</p>

            </div>
        </div>  
      </>
    )
  }
}