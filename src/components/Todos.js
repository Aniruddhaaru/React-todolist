import React from "react";
import { useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { removeTodo, handleCheckBox } from "../redux/todoapp/action";

export const Todos = ({ todos, handleEditClick, editFormVisibility, showCompleted }) => {
  const dispatch = useDispatch();

  // Filter tasks based on completion status and showCompleted state
  const filteredTodos = showCompleted ? todos.filter(todo => todo.completed) : todos.filter(todo => !todo.completed);

  return filteredTodos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        {editFormVisibility === false && (
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(handleCheckBox(todo.id))}
          ></input>
        )}
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="actions-box">
        {editFormVisibility === false && (
          <>
            <span onClick={() => handleEditClick(todo)}>
              <Icon icon={edit2} />
            </span>
            <span onClick={() => dispatch(removeTodo(todo.id))}>
              <Icon icon={trash} />
            </span>
          </>
        )}
      </div>
    </div>
  ));
};


  