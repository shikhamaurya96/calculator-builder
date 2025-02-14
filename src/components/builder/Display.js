import React, {useRef} from 'react'
import Draggable from 'react-draggable';

const Display = ({ calculation, item , onStart, onStop, onDrag}) => {
   const myRef = useRef();
  return (
    <Draggable nodeRef={myRef} onStart={onStart} onStop={onStop} onDrag={onDrag} position={item.isInitialised ? { x: item.x, y: item.y } : null} >
      <div ref={myRef}>
        <div className='w-72 h-16 border border-black bg-white p-4 text-center text-lg'>
          {calculation}
        </div>
      </div>
    </Draggable>
  )
}

export default Display