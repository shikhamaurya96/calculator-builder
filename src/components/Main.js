import React from 'react'
import ToolPanel from './builder/ToolPanel'
import Calculator from './calculator/Calculator'

const Main = () => {
    return (
        <div className="grid sm:grid-cols-12 sm:p-8 gap-4 h-screen">
            <div className='sm:col-span-4 h-full'>
                <ToolPanel />
            </div>
            <div className='sm:col-span-8 h-full'>
                <Calculator/>
            </div>
        </div>
    )
}

export default Main