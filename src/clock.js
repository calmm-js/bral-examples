import B     from "bacon.react.html"
import Bacon from "baconjs"
import React from "react"

const seconds = Bacon.once().merge(Bacon.interval(1000))

export default () => <B.div>{B(seconds, () => new Date().toString())}</B.div>
