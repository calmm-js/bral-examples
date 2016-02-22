import Atom      from "bacon.atom"
import B, {bind} from "bacon.react.html"
import Bacon     from "baconjs"
import R         from "ramda"
import React     from "react"

// The code below could be put into a library.

const setProps = template => {
  let dispose = null
  return e => {
    if (dispose) {
      dispose()
      dispose = null
    }
    if (e) {
      dispose = Bacon.combineTemplate(template).onValue(template => {
        for (const k in template)
          e[k] = template[k]
      })
    }
  }
}

const getProps = template => ({target}) => {
  for (const k in template)
    template[k].set(target[k])
}

const bindProps = ({ref, mount, ...template}) =>
  ({[ref && "ref" || mount && "mount"]: setProps(template),
    [ref || mount]: getProps(template)})

// The code above could be put into a library.

const ten = [0,1,2,3,4,5,6,7,8,9]

const Scroller = ({scrollTop, scrollLeft}) =>
  <div {...bindProps({ref: "onScroll", scrollTop, scrollLeft})}
       style={{display: "inline-block",
               overflowY: "scroll",
               overflowX: "scroll",
               height: "5em",
               width: "5em"}}>
    {ten.map(y =>
       <div key={y}>
         {ten.map(x => x.toString())}
         {ten.map(x => x.toString())}
      </div>)}
  </div>

export default ({scrollTop = Atom(0), scrollLeft = Atom(0)}) =>
  <div>
    <Scroller {...{scrollTop, scrollLeft}} />
    <Scroller {...{scrollTop, scrollLeft}} />
  </div>
