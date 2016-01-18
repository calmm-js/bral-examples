import Atom  from "bacon.atom"
import React from "react"

import Counter from "./counter"
import * as BMI from "./bmi"

const Src = ({src}) => <a target="_blank" href={`../src/${src}`}>{src}</a>

export default () => <main>
  <h1>Bacon+React+Atom Examples</h1>

  <section>
    <h2>Simple counter</h2>
    <Counter value={Atom(0)}/>
    <Src src="counter.js"/>
  </section>

  <section>
    <h2>BMI control</h2>
    <BMI.Control model={BMI.model()}/>
    <Src src="bmi.js"/>
  </section>

  <section>
    <h2>BMI controls with a shared model</h2>
    <div style={{display: "flex"}}>{(() => {
      const shared = BMI.model()
      return [<BMI.Control key="1" model={shared}/>,
              <BMI.Control key="2" model={shared}/>]
    })()}</div>
  </section>
</main>
