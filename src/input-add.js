import Atom      from "bacon.atom"
import B, {bind} from "bacon.react.html"
import * as R    from "ramda"
import React     from "react"

export default ({elems = Atom([]), entry = Atom("")}) =>
  <div>
    <div>
      <B.input type="text" {...bind({value: entry})}/>
      <button onClick={() => {const elem = entry.get().trim()
                              if (elem) {
                                elems.modify(R.append(elem))
                                entry.set("")}}}>
        Add
      </button>
    </div>
    <B.ul>
      {B(elems, elems => elems.map((elem, i) => <li key={i}>{elem}</li>))}
    </B.ul>
  </div>
