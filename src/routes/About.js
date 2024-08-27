import React, { useContext, useEffect } from 'react'
import './about.css'
import { languageContext } from '../context'
import { localization } from '../localization'

function About() {
    
    localization.setLanguage(useContext(languageContext).lang)

    return (
        <div>
            <h2>{localization.aboutMeTitle}</h2>
            <p>{localization.aboutMeDesc}</p>

            <h2>{localization.knowledge}</h2>

            <ul>
                <h4>Frontend</h4>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript/TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Blazor/WebAssembly</li>
                <h4>{localization.mobile}</h4>
                <li>React Native</li>
                <li>Flutter</li>
                <li>Kotlin</li>
                <li>Swift</li>
                <h4>Backend</h4>
                <li>C#.NET</li>
                <li>Java</li>
                <li>SQLite</li>
                <li>SQL Server</li>
                <h4>{localization.miscellaneous}</h4>
                <li>Git/GitHub</li>
                <li>Scrum</li>
                <li>Figma</li>
                <li>Blender</li>
                <li>Photoshop</li>
                <li>Unity3D</li>
            </ul>

        </div>
    )
}

export default About