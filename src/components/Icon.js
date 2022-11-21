import React from 'react'
import './icon.css'

function Icon({ src, alt, size = "", text, link, enabled = true }) {

    let wh = 0
    switch (size) {
        case "small":
            wh = 24
            break
        case "big":
            wh = 48
            break
        default:
            wh = 32
            break
    }

    return (
        <div className='icon'>
            <img src={src}
                alt={alt ? alt : ""}
                style={{ height: wh + "px", width: wh + "px",
             }}
            />
            <a href={link}>{text}</a>
        </div>
    )
}

export default Icon