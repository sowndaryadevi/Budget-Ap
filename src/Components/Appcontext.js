import React from "react"
import { createContext,useReducer } from "react"


function reduce(state,action){
    switch(action.type){
        case 'Add_Expense':
            return {...state,expenses:[...state.expenses,action.payload]}
       case 'Delete':
        return{
            ...state,
            expenses:state.expenses.filter((ex)=>ex.id!==action.payload)
        }
        case 'budget':
            return{
                ...state,
                budget:action.payload
            }
       
            default:
            return state;
    }
}

const initialState={
    budget:0,
    expenses:[
        
    ]
}

export const AppContext=createContext()

export const AppProvider=(props)=>{
    const[state,dispatch]=useReducer(reduce,initialState)

    return(
        <AppContext.Provider value={
            {budget:state.budget,
            expenses:state.expenses,
            dispatch}
        }>
        
        {props.children}

        </AppContext.Provider>
    )


}