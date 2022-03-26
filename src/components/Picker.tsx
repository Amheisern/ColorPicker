import React, { useState } from 'react'

export function Picker() {
  const [hueValue, hueSetValue] = useState<string | number>(
    Math.floor(Math.random() * 361)
  )
  const [saturationValue, saturationSetValue] = useState<string | number>(
    Math.floor(Math.random() * 101)
  )
  const [lightnessValue, lightnessSetValue] = useState<string | number>(
    Math.floor(Math.random() * 101)
  )
  const [alphaValue, alphaSetValue] = useState<string | number>(
    Math.floor(Math.random() * 101)
  )
  const newBackgroundColor = `hsla(${hueValue},${saturationValue}%,${lightnessValue}%,${alphaValue}%)`
  const newStyle = { backgroundColor: newBackgroundColor }

  // Declares we are going to use some state (e.g. useState)
  // • Sets initial value (e.g. 0)
  // useState always returns an array with two entries
  // const hueValue = useState(0)
  // • The first value of the array is the current value
  // • The second value is a function used to change the value
  function handleClickRandomColorButton() {
    // console.clear()
    hueSetValue(Math.floor(Math.random() * 361))
    saturationSetValue(Math.floor(Math.random() * 101))
    lightnessSetValue(Math.floor(Math.random() * 101))
    alphaSetValue(Math.floor(Math.random() * 101))
    // console.log(newBackgroundColor)
    // console.log(newStyle)
  }

  function handleSaturationValue(event: React.ChangeEvent<HTMLInputElement>) {
    saturationSetValue(event.target.value)
    console.log(saturationValue)
  }
  function handleHueSlideValue(event: React.ChangeEvent<HTMLInputElement>) {
    // event.preventDefault()
    hueSetValue(event.target.value)
    console.log(hueSetValue)
  }
  function handleLightnessValue(event: React.ChangeEvent<HTMLInputElement>) {
    lightnessSetValue(event.target.value)
    console.log(lightnessValue)
  }
  function handleAlphaValue(event: React.ChangeEvent<HTMLInputElement>) {
    alphaSetValue(event.target.value)

    console.log(alphaValue)
  }

  return (
    <div>
      <header>
        <h1>Color Picker</h1>
        <div className="box" style={newStyle}>
          {alphaValue < 100 ? <p>{newBackgroundColor}</p> : <p></p>}
        </div>
        <h3>
          <button onClick={handleClickRandomColorButton}>Random Color</button>
        </h3>
      </header>
      <body>
        <section>
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
        </section>
        <section>
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
        </section>
        <section>
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
        </section>
        <section>
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
        </section>
      </body>
    </div>
  )
}
