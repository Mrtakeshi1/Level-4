import { useState } from "react"

function ColorChoice(props){

    const [inputColors, setInputColors] = useState({
        name: props.info.name,
        value: props.info.value
    })

    function handleInput(e){
      const {name, value} = e.target
      setInputColors(prevColors => ({
        ...prevColors,
        name: name, 
        value: value
      }))
      props.onChange(props.info.name, inputColors)
    }
    
    return(
        <div className="color-choice">
            <h3>{props.info.title}</h3>
            <h3>{props.info.value}</h3>
            <input onChange={handleInput} type="color" name={props.info.name} value={inputColors.value}/>
            <button className="x-box" onClick={()=>props.delete(props.info.name)}>X</button>
        </div>
    )
}

export default ColorChoice