
import React, { useRef, useState, useEffect } from 'react'
import useButtonStore from '../../store/buttonStore';
import Button from './Button';
import Display from './Display';

const DraggableComponent = ({ item }) => {
    const calculation = useButtonStore((state) => state.calculation);
    const onDragStartStore = useButtonStore((state) => state.onDragStart);
    const onDragStopStore = useButtonStore((state) => state.onDragStop);
    const changeButtonState = useButtonStore((state) => state.changeButtonState);
    const cardBounding = useButtonStore((state) => state.cardBounding);
    const [dragging, setDragging] = useState(false);
    const [isClicked, setClicked] = useState(false);
    const [startTimeStamp, setStartTimeStamp] = useState(0);
    const timeoutRef = useRef(null);
    const onItemClick = useButtonStore((state) => state.onItemClick);

    function onDragStop(e, data) {
        const actualItemBound = data.node.getBoundingClientRect()
        setDragging(false);
        const obj = {
            ...item,
            isInitialised: actualItemBound.x > cardBounding.x,
            x: data.x,
            y: data.y
        }
        changeButtonState(obj)
        onDragStopStore(obj)
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        const now = Date.now();
        if (now - startTimeStamp < 250) {
            onclickButton()
        }
    }
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            if (dragging) {
                onDragStartStore(item);
            }
        }, 500);
    }, [dragging]);

    function onDragStart(e, data) {
        setStartTimeStamp(Date.now());
        if (!item.isInitialised) {
            onDragStartStore(item);
        } else {
            setDragging(true);
        }
    }

    function onclickButton() {
        if (item.isInitialised && item.type !== "OUTPUT") {
            onItemClick(item)
        }
    }

    function renderToolItem(item) {
        if (item.type === "NUMBER" || item.type === "SYMBOL")
            return <Button item={item} key={item.id + "_"} onStart={onDragStart} onStop={onDragStop} />
        else if (item.type === "OUTPUT")
            return <Display calculation={item.isInitialised ? calculation : ""} key={item.id + "_"} item={item} onStart={onDragStart} onStop={onDragStop} />
    }

    return (
        <div>
            {renderToolItem(item)}
        </div>
    )
}

export default DraggableComponent
