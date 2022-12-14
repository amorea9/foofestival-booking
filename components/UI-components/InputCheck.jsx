import React from 'react'

let setUp = false
let green = false

function InputCheck(props) {
    function handleChange(event) {
        if (props.name === "TentSetup") {
           setUp = event.target.checked
        } else if (props.name === "TentGreen") {
           green = event.target.checked
        }
        props.setOptions(setUp, green)
    }
    return (
        <div className="input-box box">
        <div className='input-text'>
          <h3>{props.title}</h3>
          <h4>{props.subtitle}</h4>
          <p>{props.description}</p>
        </div>
        <div>
          <h3>{props.price}</h3>
          {/* insert input type depending on props.type */}
          <input type="checkbox"  onChange={handleChange}/>
        </div>
      </div>
    )
}

export default InputCheck