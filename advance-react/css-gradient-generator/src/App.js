import './App.css';
import { useState } from 'react';
import Box from './Box'
import ColorChoice from './ColorChoice'

function App() {

  const [colors, setColors] = useState([
    {
      title: "Color 1",
      value: "#1f1f4d",
      name: "color1"
    },
    {
      title: "Color 2",
      value: "#ac3333",
      name: "color2"
    }
  ])

  const [angle, setAngle] = useState(50)

  function changeColor(name, updatedColors){
    setColors(prevColors=>{
      return prevColors.map(item =>{
        if (item.name === name){
          console.log('working')
          return{
            ...item,
            ...updatedColors
          }
        }
        return item
      })
    })
  }

  const colorValues = colors.map(items =>{
  return items.value
  })


  const colorOptions = colors.map(info =>{
    return(
      <ColorChoice 
        info = {info}
        key = {info.title}
        onChange = {changeColor}
        delete = {deleteColor}
      />
    )
  })

  function changeAngle(e){
    setAngle(e.target.value)
  }

  function deleteColor(name){
    if (colors.length > 2){
      setColors(prevColors => {
        return prevColors.filter(item => item.name !== name)
      })
    } 
  }

  const backgroundPreview = {
    background: `linear-gradient(${angle}deg, ${colorValues})`,
    height: "70%",
    width: '80%',
    alignSelf: "center",
    marginBottom: '15px',
    borderRadius: '8px'
  }

  const textAreaValue= `background: ${backgroundPreview.background} \n-moz-background: ${backgroundPreview.background} \n-webkit: ${backgroundPreview.background}`

  function addColor(){
    if (colors.length < 5)
    setColors(prevColors => ([
      ...prevColors,
      {
        title: `Color ${prevColors.length + 1}`,
        value: "#ffffff",
        name: `color${prevColors.length + 1}`

      }
    ]))
  }

  const buttonStyle= {
    alignSelf: "center",
    background: "lightcoral",
    fontSize: "20px",
    borderRadius: "15%",
  }

  const angleStyle= {
    textAlign: "center",
    alignSelf: "center",
    width: "35px",
    borderRadius: "15%",
    margin: "2%",
    paddingLeft: "3%",
    fontSize: "15px",
  }
  
  console.log(backgroundPreview)
  
  return (
    <div className="App">
      <Box>
          <div style={backgroundPreview}></div>
          <textarea readOnly rows='5' value={textAreaValue}/>
      </Box>

      <Box>
        <h1>Options</h1>

        {colorOptions}

        <input 
        type="number" 
        name="angle"
        value={angle}
        onChange={changeAngle}
        style={angleStyle}
        />

        <button style={buttonStyle} onClick={addColor}>+</button>
      </Box>
    </div>
  )
}

export default App