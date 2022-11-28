import React from 'react'
import './icon.css'

function Icon({ src, alt, size = "", text, link, onClick, style, enabled = true }) {

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
        <div
            style={style}
            onClick={onClick ? onClick : () => window.open(link, "_self")}
            className='icon'>
            <img src={src}
                alt={alt ? alt : ""}
                style={{
                    height: wh + "px", width: wh + "px",
                }}
            />
            {text ? <span>{text}</span> : null}
        </div>
    )
}

export default Icon