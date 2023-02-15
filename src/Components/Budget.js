import React,{useContext} from "react"
import { AppContext  } from "./Appcontext"
export default function Budget(){
    const{budget,dispatch}=useContext(AppContext);
const[show,setShow]=React.useState(true);
const[num,setnum]=React.useState('')
    function change(){
        setShow((pre)=>!pre)
    }
    function changesave(e){
        console.log("click")  
        console.log(num)  
        dispatch({
            type:'budget',
            payload:num
          
        })
        setShow((pre)=>!pre)

    }



    return (
        <>
            <div className="bud">
              {show ? <span>Budget:€{budget}</span>:
              <input 
                type="number"
                value={num}
                onChange={(e)=>setnum(e.target.value)}  
              ></input>
              } 
              {show ? <button onClick={change}>Edit</button>:<button onClick={changesave}>save</button>} 
            </div>
        </>
    )
}