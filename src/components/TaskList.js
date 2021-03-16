import React from 'react';
import {View} from 'react-native';
import Task from './Task';

const TaskList = ({type, todos, toggleComplete, deleteTodo}) => {
  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case 'All':
        return todos;
      case 'Complete':
        return todos.filter((t) => t.complete);
      case 'Active':
        return todos.filter((t) => !t.complete);
    }
  };

  todos = getVisibleTodos(todos, type);

  todos = todos.map((todo, i) => {
    return (
      <Task
        key={todo.todoIndex}
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    );
  });
  return <View>{todos}</View>;
};

export default TaskList;
