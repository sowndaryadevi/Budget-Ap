import React from "react"
import { AppContext } from "./Appcontext";

export default function Spend(){
    const{expenses}=React.useContext(AppContext)
    const totalAmount=expenses.reduce((total,item) => {
        return (total = total + item.cost);
    }, 0)
    return (
        <>
            <div className="spend">
            <span>spend:€{totalAmount}</span>
               </div>
        </>
    )
}