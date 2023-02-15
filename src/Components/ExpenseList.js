import React from "react"
import ExpenseItem from "./ExpenseItem"
import { AppContext } from "./Appcontext"


export default function ExpenseList() {


    const{expenses}=React.useContext(AppContext)
    const[filterExpense,setFilterExpense]=React.useState(expenses || [])


	React.useEffect(() => {
		setFilterExpense(expenses);
	}, [expenses]);


function change(e){
   const res=expenses.filter((pre)=>pre.name.includes(e.target.value))
    setFilterExpense(res)
}


    return (
        <>
         <input 
         className="search-input"
         placeholder="Type to search..."
         type="text" 
         onChange={change} 
         ></input>
       { filterExpense.map(pre => {
         return <ul >
                <ExpenseItem id={pre.id} name={pre.name} price={pre.cost} />
            </ul>
        })}
        </>
    )
}