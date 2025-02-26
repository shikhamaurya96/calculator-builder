
import React from 'react';
import useButtonStore from '../../store/buttonStore';
import DraggableComponent from './DraggableComponent';

const ToolPanel = () => {
  const toolPanelList = useButtonStore((state) => state.toolPanelList);
  return (
    <div className="flex  flex-wrap p-2 shadow-sm bg-gray-100 h-full" key={"tool"}>
      <h6 className="mb-4 font-bold mr-4">Tool Panel</h6>
      {
        toolPanelList.length > 0 && (toolPanelList.map((item => (
          <DraggableComponent item={item} key={item.id+"_"}/>
        )))) 
      }

    </div>
  )
}

export default ToolPanel