import React, { useContext } from 'react'
import { languageContext } from '../context'
import { localization } from '../localization'
import Icon from './Icon'
import './project.css'

function Project({ title, description, thumbnail, links }) {

    localization.setLanguage(useContext(languageContext).lang)


    return (
        <div className='project-list-item'>
            <div className='image-wrapper' style={!thumbnail ? { marginBottom: 0 } : null}>
                {thumbnail ? <img src={thumbnail} />
                    : <p>{localization.noImage}</p>
                }
            </div>

            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='link-list'>
                    {links.map((l, i) => <Icon {...l.props} key={i} />)}
                </div>
            </div>
        </div>
    )
}

export default Project