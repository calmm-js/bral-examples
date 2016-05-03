import Atom                    from "bacon.atom"
import React                   from "react"
import makeStored, {expireNow} from "atom.storage"

import BMI       from "./bmi-control"
import * as BM   from "./bmi-meta"
import Checkbox  from "./checkbox"
import Clock     from "./clock"
import Counter   from "./counter"
import DynList   from "./dyn-list"
import InputAdd  from "./input-add"
import Phonebook from "./phonebook"
import Scroll    from "./scroll"
import {pass}    from "./util"

const Stored = ({key, ...props}) =>
  makeStored({key: `bral-examples:${key}`,
              storage: localStorage,
              time: 15*60*1000, // 15 minutes
              Atom,
              debounce: 250, ...props})

expireNow({storage: localStorage, regex: /^bral-examples:/})


const Src = ({src}) => <a target="_blank" href={`../src/${src}`}>{src}</a>

export default () =>
  <main>
    <h1>Bacon+React+Atom Examples</h1>

    <section>
      <h2>Simple counter</h2>
      <Counter/>
      <Src src="counter.js"/>
    </section>

    <section>
      <h2>Dynamic list</h2>
      <DynList/>
      <Src src="dyn-list.js"/>
    </section>

    <section>
      <h2>Simple clock</h2>
      <Clock/>
      <Src src="clock.js"/>
    </section>

    <section>
      <h2>Simple checkbox</h2>
      <Checkbox/>
      <Src src="checkbox.js"/>
    </section>

    <section>
      <h2>Input Add</h2>
      <InputAdd/>
      <Src src="input-add.js"/>
    </section>

    <section>
      <h2>Scroll</h2>
      <Scroll/>
      <Src src="scroll.js"/>
    </section>

    <section>
      <h2>Phonebook</h2>
      <Phonebook/>
      <Src src="phonebook.js"/>
    </section>

    <section>
      <h2>BMI control</h2>
      <BMI/>
      <Src src="bmi.js"/>
    </section>

    <section>
      <h2>BMI controls with a shared model</h2>
      <div style={{display: "flex"}}>
        {pass(Stored({key: "bmi-shared", value: BM.mock}), bmi =>
              [<BMI key="1" bmi={bmi}/>,
               <BMI key="2" bmi={bmi}/>])}
      </div>
    </section>
  </main>
