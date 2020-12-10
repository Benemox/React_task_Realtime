
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

export const Form = ({settask}) => {



    const [valueInput,SetValueInput] = useState("")


    //handle
    const handleInputChange = (e) =>{
        SetValueInput(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if( valueInput.trim().length > 1){
          settask(tasks => [...tasks,{taskE:valueInput,keyE:uuid()}])  
          SetValueInput("")
        }else(alert("Necesitas al menos 3 letras"))
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type= "text"
                value= {valueInput}
                onChange={handleInputChange}
                placeholder= "press enter when finish"
            />
        </form>
    )
}