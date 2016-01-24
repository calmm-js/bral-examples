import Atom  from "bacon.atom"
import React from "react"

import BMI       from "./bmi"
import Checkbox  from "./checkbox"
import Clock     from "./clock"
import Counter   from "./counter"

const Src = ({src}) => <a target="_blank" href={`../src/${src}`}>{src}</a>

export default () => <main>
  <h1>Bacon+React+Atom Examples</h1>

  <section>
    <h2>Simple counter</h2>
    <Counter value={Atom(0)}/>
    <Src src="counter.js"/>
  </section>

  <section>
    <h2>Simple clock</h2>
    <Clock/>
    <Src src="clock.js"/>
  </section>

  <section>
    <h2>Simple checkbox</h2>
    <Checkbox id="checkbox"/>
    <Src src="checkbox.js"/>
  </section>

  <section>
    <h2>BMI control</h2>
    <BMI model={BMI.model()}/>
    <Src src="bmi.js"/>
  </section>

  <section>
    <h2>BMI controls with a shared model</h2>
    <div style={{display: "flex"}}>{(() => {
      const model = BMI.model()
      return [<BMI key="1" {...{model}}/>,
              <BMI key="2" {...{model}}/>]
    })()}</div>
  </section>
</main>
