import React from 'react'

const Button = ({ title, style }) => {
    return (
        <div className='mt-10 p-20 '>
            <button style={{ background: "red", padding: "24px", ...style  }}>{title}</button>
        </div>
    )
}

export default Button