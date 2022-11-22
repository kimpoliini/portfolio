import React from 'react'
import './project.css'

function Project({ title, description, thumbnail, links }) {



    return (
        <div className='project-list-item'>
            <img src={thumbnail} />

            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='link-list'>
                    {links}
                </div>
            </div>
        </div>
    )
}

export default Project