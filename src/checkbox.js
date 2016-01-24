import Atom      from "bacon.atom"
import B, {bind} from "bacon.react.html"
import React     from "react"

export default () => {
  const checked = Atom(false)
  return <div>
      <label><B.input type="checkbox" {...bind({checked})}/>Toggle me</label>
      <B.p>{B(checked, c => c ? "ON" : "off")}</B.p>
    </div>
}
