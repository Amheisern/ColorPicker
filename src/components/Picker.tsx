import React, { useState } from 'react'

export function Picker() {
  const [hueValue, hueSetValue] = useState<string | number>(0)
  const [saturationValue, saturationSetValue] = useState<string | number>(0)
  const [lightnessValue, lightnessSetValue] = useState<string | number>(0)
  const [alphaValue, alphaSetValue] = useState<string | number>(0)
  const newBackgroundColor = `hsla(${hueValue},${saturationValue}%,${lightnessValue}%,${alphaValue}%)`
  const newStyle = { backgroundColor: newBackgroundColor }
  // Declares we are going to use some state (e.g. useState)
  // • Sets initial value (e.g. 0)
  // useState always returns an array with two entries
  // const hueValue = useState(0)
  // • The first value of the array is the current value
  // • The second value is a function used to change the value
  //const hueCounter = hueValue[0]
  // const hueSetCounter = hueValue[1]

  // Simplify (using Destructuring Assignment)
  // const newBackgroundColor = `hsl(50,8%,20%)`
  // const newStyle = { backgroundColor: newBackgroundColor }
  function handleSaturationValue(event: React.ChangeEvent<HTMLInputElement>) {
    saturationSetValue(event.target.value)
    console.log('hue')
  }
  function handleHueSlideValue(event: React.ChangeEvent<HTMLInputElement>) {
    // event.preventDefault()
    hueSetValue(event.target.value)
    // const newHueValue = hueValue + 1
    // hueSetValue(newHueValue)
    console.log('hue')
  }
  function handleLightnessValue(event: React.ChangeEvent<HTMLInputElement>) {
    lightnessSetValue(event.target.value)
  }
  function handleAlphaValue(event: React.ChangeEvent<HTMLInputElement>) {
    alphaSetValue(event.target.value)
  }

  return (
    <div>
      <h1>Color Picker</h1>
      <h2 style={newStyle}></h2>
      <h3>
        <button>Random Color</button>
        <span id="color"></span>
      </h3>
      <div>
        <input
          value={hueValue}
          onChange={handleHueSlideValue}
          type="range"
          id="Hue"
          name="Hue"
          min="0"
          max="360"
        />
        <label htmlFor="Hue">H {hueValue}</label>
      </div>

      <div>
        <input
          value={saturationValue}
          onChange={handleSaturationValue}
          type="range"
          id="Saturation"
          name="Saturation"
          min="0%"
          max="100%"
        />
        <label htmlFor="Saturation">S {saturationValue}</label>
      </div>

      <div>
        <input
          value={lightnessValue}
          onChange={handleLightnessValue}
          type="range"
          id="Lightness"
          name="Lightness"
          min="0%"
          max="100%"
        />
        <label htmlFor="Lightness">L{lightnessValue}</label>
      </div>
      <div>
        <input
          value={alphaValue}
          onChange={handleAlphaValue}
          type="range"
          id="Alpha"
          name="Alpha"
          min="0"
          max="100"
        />
        <label htmlFor="Alpha">A {alphaValue}</label>
      </div>
    </div>
  )
}
