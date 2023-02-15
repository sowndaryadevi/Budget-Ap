import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "./Appcontext"


export default function ExpenseItem(props) {

    const{dispatch}=React.useContext(AppContext)




    function handleChange(){
        dispatch({
            type:'Delete',
            payload:props.id
        }
        )
            
        
    }

    return (
        
        
        <li className="items">
            <h4>{props.name}</h4>
            <div className="align">
                <span>€{props.price}</span>
                <FontAwesomeIcon icon={faCircleXmark} className="color" onClick={handleChange}/>
            </div>
        </li>

        
      
    )
}