import React from "react"
import { AppContext } from "./Appcontext";
import{v4 as uuidv4} from "uuid"


export default function AddExpense(){
    const{dispatch}=React.useContext(AppContext)
    const[name,setName]=React.useState('')
    const[cost,setCost]=React.useState('')

function submit(event){
    event.preventDefault();
   
    const expense={
        id:uuidv4(),
        name:name,
        cost:parseInt(cost)   
     }
    dispatch({
        type:'Add_Expense',
        payload:expense
    })
}



    return(
        <form onSubmit={submit}>
            <label for="name">Name</label>
            <input
            className="input"
            type="text" 
            value={name}
            onChange={(event)=>{setName(event.target.value)}}
            id="name"
            required="required">  
            </input>
       
            <label for="cost">Cost</label>
            <input className="input"
            type="text" 
            onChange={(event)=>{setCost(event.target.value)}}
            value={cost}
            id="cost"
            required="required">  
            </input>
            <br />
            <button className="button-save">Save</button>
        </form>
    )
}