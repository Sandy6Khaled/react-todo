import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

/* takes the todos and forEach item it will check
*on the checked properity in the object
*if it is true it will count add one to the count variable
*and return it
*/
export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);
  let count = 0;
  const calculateChecked = () => {
    todos.forEach((todo) => {
      if (todo.checked === true) {
        count += 1;
      }
    });
    return count;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
