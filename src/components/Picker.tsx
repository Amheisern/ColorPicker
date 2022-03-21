import React, { useState } from 'react'

export function Picker() {
  // Declares we are going to use some state (e.g. useState)
  // • Sets initial value (e.g. 0)
  // useState always returns an array with two entries
  // const hueValue = useState(0)
  // • The first value of the array is the current value
  // • The second value is a function used to change the value
  //const hueCounter = hueValue[0]
  // const hueSetCounter = hueValue[1]

  // Simplify (using Destructuring Assignment)
  const [hueValue, hueSetValue] = useState(0)
  return (
    <body>
      <h1>Color Picker</h1>
      <div>
        <input type="range" id="Hue" name="Hue" min="0" max="360" />
        <label htmlFor="Hue">H {hueValue}</label>
      </div>
      <div>
        <input
          type="range"
          id="Saturation"
          name="Saturation"
          min="0"
          max="100"
        />
        <label htmlFor="Saturation">S </label>
      </div>
      <div>
        <input type="range" id="Lightness" name="Lightness" min="0" max="100" />
        <label htmlFor="Lightness">L</label>
      </div>
      <div>
        <input type="range" id="Alpha" name="Alpha" min="0" max="100" />
        <label htmlFor="Alpha">A</label>
      </div>
    </body>
  )
}
