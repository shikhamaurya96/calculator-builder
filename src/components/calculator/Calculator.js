import React, { useRef, useEffect } from 'react'
import useButtonStore from '../../store/buttonStore'

const Calculator = () => {
  const isDragging = useButtonStore((state) => state.isDragging);
  const divRef = useRef(null);
  const setCardBounding = useButtonStore((state) => state.setCardBounding);
  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setCardBounding(rect)
    }
  }, [setCardBounding]);

  return (
    <div key={"cal"} className={(isDragging ? "bg-yellow-100" : "bg-gray-300") + " p-2 border shadow-lg  min-h-[500px] h-full"} ref={divRef}>
      <p className='m-4 text-lg'>Drop the panel tools here to make your own <span className='text-red-600'>Calculator</span></p>
    </div>

  )
}

export default Calculator