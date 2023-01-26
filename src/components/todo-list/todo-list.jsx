import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
/* handleDelete filter on the todos list
*to get the deletedId and
*return array of the todos without this item
*/
  const handleDelete = (id) => {
    setTodos(
      todos.filter((deletedTodo) => deletedTodo.id !== id),
    );
  };

/* setTodos map on the previous todos in it
*and if the id of the mapping item = to the id
*it takes from the click it returns
*all the todos with the changed of the checked
*/
  const toggleCheck = (id) => {
    setTodos((todoslist) => {
      const checkedTodosList = todoslist.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      return checkedTodosList;
    });
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
