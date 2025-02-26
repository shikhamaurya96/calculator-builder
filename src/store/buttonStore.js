import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
const buttonStore = (set) => ({
    calculation:"",
    cardBounding:{},
    isDragging:false,
    dragItem:{},
    toolPanelList: [
        {
            id: 0,
            label: "Output",
            type: "OUTPUT",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 1,
            label: "0",
            type: "NUMBER",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 2,
            label: "1",
            type: "NUMBER",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 3,
            label: "2",
            type: "NUMBER",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 4,
            label: "3",
            type: "NUMBER",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 5,
            label: "4",
            type: "NUMBER",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 6,
            label: "5",
            type: "NUMBER",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 7,
            label: "6",
            type: "NUMBER",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 8,
            label: "7",
            type: "NUMBER",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 9,
            label: "8",
            type: "NUMBER",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 10,
            label: "9",
            type: "NUMBER",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 11,
            label: "+",
            type: "SYMBOL",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 12,
            label: "-",
            type: "SYMBOL",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 13,
            label: "*",
            type: "SYMBOL",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 14,
            label: "/",
            type: "SYMBOL",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 15,
            label: "=",
            type: "SYMBOL",
            isInitialised: false,
            x:0,
            y:0
        },
        {
            id: 16,
            label: "C",
            type: "SYMBOL",
            isInitialised: false,
            x:0,
            y:0
        }
    ],
    calculatorList: [],

    onDragStart: (item) => set((state) => ({
        dragItem : item,
        isDragging : true
    }
    )),
    onDragStop: (item) => set((state) => ({
        dragItem : {},
        isDragging : false
    }
    )),
    onItemClick: (item) => set((state) => ({
        calculation : doCalculation(state.calculation, item)
    }
    )),
    changeButtonState: (item) => set((state) => ({
         toolPanelList: state.toolPanelList.map((n) => (n.id === item.id)? item : n)
    }
    )),
    setCardBounding: (bound) => set((state) => ({
        cardBounding : bound
    }
    ))
})
function doCalculation(oldValue, item){
    try {
        if(item.label==="="){
            return eval(oldValue);
          } else if(item.label==="C"){
            return ""
          }else{
            return oldValue + item.label;
          } 
    } catch (error) {
        return error.message;
    }
}

const useButtonStore = create(
    devtools(
        persist(buttonStore, {
            name: "buttons"
        })

    )
)

export default useButtonStore;