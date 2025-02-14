import React, { useRef } from 'react'
import Draggable from 'react-draggable';

const Button = ({ item, onStart, onStop }) => {
    const myRef = useRef();
    

    return (
        <Draggable nodeRef={myRef} onStart={onStart} onStop={onStop} position={item.isInitialised ? { x: item.x, y: item.y } : null}>
            <div ref={myRef}>
                <button className={"text-white p-2 w-16 rounded-full m-4 text-xl border border-sky-900 " + (item.isInitialised ? "bg-cyan-500" : "bg-gray-700")}>
                    {item.label}
                </button>
            </div>
        </Draggable>
    )
}

export default Button