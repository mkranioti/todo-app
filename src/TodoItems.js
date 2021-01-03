import React, { Component } from "react";
 
class TodoItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}
    <button >X</button>
    </li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ol className="theList">
          {listItems}
      </ol>
    );
  }
};
 
export default TodoItems;