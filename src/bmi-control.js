import Atom               from "bacon.atom"
import B, {bind, classes} from "bacon.react.html"
import React              from "react"

import * as M from "./bmi-meta"

const Slider = ({title, units, value, ...props}) =>
  <div>
    <B.div>{title}: {value}{units}</B.div>
    <B.input type="range" {...bind({value})} {...props}/>
  </div>

const BMI = ({bmi}) =>
  <B.div {...classes("bmi", B(bmi, M.BMI.classification))}>
    <Slider title="Weight" units="kg" min={40}  max={140} value={bmi.lens(M.BMI.weight)}/>
    <Slider title="Height" units="cm" min={140} max={210} value={bmi.lens(M.BMI.height)}/>
    <div>BMI: <B.span className="bmi-value">{B(bmi, M.BMI.bmi)}</B.span></div>
  </B.div>

export default ({bmi = Atom(M.mock)} = {}) => <BMI bmi={bmi.lens(M.BMI.augment)}/>
