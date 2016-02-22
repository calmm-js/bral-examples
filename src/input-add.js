import Atom      from "bacon.atom"
import B, {bind} from "bacon.react.html"
import R         from "ramda"
import React     from "react"

export default ({elems = Atom([]), entry = Atom("")}) =>
  <div>
    <div>
      <B.input type="text" {...bind({value: entry})}/>
      <button onClick={() => {
        elems.modify(R.append(entry.get()))
        entry.set("")
      }}>Add</button>
    </div>
    <B.ul>
      {B(elems, elems => elems.map((elem, i) => <li key={i}>{elem}</li>))}
    </B.ul>
  </div>
