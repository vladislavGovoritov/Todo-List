import React from "react";

export default class ItemStatusInfo extends React.Component {
  
  buttons= [
    {name: 'all', label: 'All'},
    {name: 'done', label: 'Done'},
    {name: 'active', label: 'Active'}
  ]
  
  render() {
   
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = this.props.filter === name
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
      return (
      <button 
      type="button" 
      className={`btn ${clazz}`}
      key={name}
      onClick={() => this.props.onFilterChange(name)}
      >
      {label}
    </button>
      )
    })
    return (
      <div className="btn-group">
       {buttons}
      </div>
    );
  }
}
