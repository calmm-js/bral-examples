import B     from "bacon.react.html"
import Bacon from "baconjs"
import React from "react"

const source = Bacon.sequentially(500, [1, 2, 3, 4, 5, 6, 7, 8])
const result = source.scan([], (prev, next) => prev.concat(next))
const data = result.map(xs => xs.map(x => x * 2))

export default () =>
  <B.ul>
    {B(data, data => data.map((x, i) => <li key={i}>{x}</li>))}
  </B.ul>
