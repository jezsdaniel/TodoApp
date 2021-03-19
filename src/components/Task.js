import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TaskButton from './TaskButton';

const Task = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <View style={styles.todoContainer}>
      <Text
        style={[
          styles.todoText,
          todo.complete ? styles.todoCompleteText : null,
        ]}>
        {todo.title}
      </Text>
      <View style={styles.buttons}>
        <TaskButton
          name="Done"
          complete={todo.complete}
          onPress={() => toggleComplete(todo.todoIndex)}
        />
        <TaskButton name="Delete" onPress={() => deleteTodo(todo.todoIndex)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 17,
  },
  todoCompleteText: {
    textDecorationLine: 'line-through',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Task;
