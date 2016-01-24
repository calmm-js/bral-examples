import Atom      from "bacon.atom"
import B, {bind} from "bacon.react.html"
import React     from "react"

const Slider = ({title, units, value, ...props}) => <div>
  <B.div>{title}: {value}{units}</B.div>
  <B.input type="range" {...bind({value})} {...props}/>
</div>

const Control = ({model: {weight, height, bmi}}) => <div>
  <Slider title="Weight" units="kg" min={40}  max={140} value={weight}/>
  <Slider title="Height" units="cm" min={140} max={210} value={height}/>
  <B.div>BMI: {bmi}</B.div>
</div>

Control.model = () => {
  const weight = Atom(70)
  const height = Atom(170)
  return {weight,
          height,
          bmi: B(weight, height, (w, h) => Math.round(w/(h * h * 0.0001)))}
}

export default Control
