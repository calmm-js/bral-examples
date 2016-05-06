import * as L       from "partial.lenses"
import * as R       from "ramda"
import Atom         from "bacon.atom"
import B, {fromIds} from "bacon.react.html"
import React        from "react"
import uuid         from "uuid"

const TextInput = ({value = Atom("")}) => {
  const editing = Atom(false)
  const exit = () => editing.set(false)
  const save = e => {value.set(e.target.value); exit()}
  return <B.span onDoubleClick={() => editing.set(true)}>
      {B(editing, e =>
         e ? <B.input key="1"
                      type="text"
                      autoFocus
                      onFocus={({target: t}) => t.selectionStart = t.value.length}
                      defaultValue={value}
                      onKeyDown={e => e.key === "Enter"  && save(e)
                                   || e.key === "Escape" && exit()}
                      onBlur={save}/>
           : <B.input key="2"
                      type="text"
                      disabled
                      {...{value}}/>)}
    </B.span>
}

const Contact = ({model}) =>
  <div>
    <TextInput value={model.lens("name")}/>
    <TextInput value={model.lens("number")}/>
    <button onClick={() => model.set()}>Remove</button>
  </div>

const PhoneBook = ({model = PhoneBook.model()}) =>
  <div>
    <button onClick={() => model.addNew()}>New</button>
    <B.div>
      {fromIds(B(model.contacts, R.map(R.prop("id"))), id =>
       <Contact key={id}
                model={model.contacts.lens(L.find(R.whereEq({id})))}/>)}
    </B.div>
  </div>

const defaultContacts =
  [{id: uuid.v4(), name: "Mr Digits", number: "1-23-456789"}]

PhoneBook.model = ({contacts = Atom(defaultContacts)} = {}) => ({
  contacts: contacts.lens(L.define([])),
  addNew: ({id = uuid.v4(), name = "", number = ""} = {}) =>
    contacts.modify(R.append({id, name, number}))
})

export default PhoneBook
