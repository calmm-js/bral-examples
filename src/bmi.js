import Atom               from "bacon.atom"
import B, {bind, classes} from "bacon.react.html"
import React              from "react"

const Slider = ({title, units, value, ...props}) =>
  <div>
    <B.div>{title}: {value}{units}</B.div>
    <B.input type="range" {...bind({value})} {...props}/>
  </div>

const Control = ({model: {weight, height, bmi, classification}}) =>
  <B.div {...classes("bmi", classification)}>
    <Slider title="Weight" units="kg" min={40}  max={140} value={weight}/>
    <Slider title="Height" units="cm" min={140} max={210} value={height}/>
    <B.div>BMI: <B.span className="bmi-value">{bmi}</B.span></B.div>
  </B.div>

Control.model = ({weight = Atom(80), height = Atom(180)} = {}) => {
  const bmi = B(weight, height, (w, h) => Math.round(w/(h * h * 0.0001)))
  const classification =
    B(bmi, bmi =>
        bmi < 15   ? "bmi-underweight bmi-underweight-severely"
      : bmi < 18.5 ? "bmi-underweight"
      : bmi < 25   ? "bmi-normal"
      : bmi < 30   ? "bmi-overweight"
      : bmi < 35   ? "bmi-obese"
      : bmi < 40   ? "bmi-obese bmi-obese-severely"
      :              "bmi-obese bmi-obese-very")
  return {weight, height, bmi, classification}
}

export default Control
