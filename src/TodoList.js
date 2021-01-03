import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
          };
        this.addItem = this.addItem.bind(this);
      }
      addItem(e) {
        var inputValue = e.target[0].value;
        if (inputValue !== "") {
          var newItem = {
            text: inputValue,
            key: Date.now()
          };
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
         
          e.target[0].value = "";
        }
           
        e.preventDefault();
      }
    render() {
      return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input placeholder="enter task">
              </input>
              <button type="submit">add</button>
            </form>
          </div>
          <TodoItems entries={this.state.items}/>
        </div>
      );
    }
  }
 
export default TodoList;