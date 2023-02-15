import React from "react"
import { AppContext } from "./Appcontext"

export default function Remaining(){
const {budget,expenses}=React.useContext(AppContext);

const totalAmount=expenses.reduce((total,item) => {
    return (total = total + item.cost);
}, 0)



    return (


        <>
             <div className="Remain">
             <span>remain:€{budget - totalAmount}</span>

            </div>
        </>
    )
}