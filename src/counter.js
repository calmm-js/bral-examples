import B     from "bacon.react.html"
import R     from "ramda"
import React from "react"

export default ({value}) => <div>
  <B.div>Count: {value}</B.div>
  <button onClick={() => value.modify(R.add(+1))}>+</button>
  <button onClick={() => value.modify(R.add(-1))}>-</button>
</div>
