import React from 'react'
import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id)
  return(
    <li>
      <div className="view">
      <input className="toggle" type="checkbox" onChange={handleToggle} checked={props.isComplete} /> <label>{props.name}</label>
      </div>
    </li>
  )
}


TodoItem.propTypes ={
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}
