import React from 'react'

function InputCheck(props) {
    function handleChange(event) {
        console.log("changed");
        console.log("name of field is: ", props.name ,"box is: ", event.target.checked);
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