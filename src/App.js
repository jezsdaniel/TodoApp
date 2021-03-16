/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Heading from './components/Heading';
import Input from './components/Input';
import SubmitButton from './components/SubmitButton';
import TaskList from './components/TaskList';
import TabBar from './components/TabBar';

let todoIndex = 0;

const App: () => React$Node = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState('All');

  const submitTodo = () => {
    if (inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    setTodos([...todos, todo]);
    setInputValue('');
  };

  const deleteTodo = (index) => {
    let tempTodos = [...todos];
    tempTodos = tempTodos.filter((todo) => todo.todoIndex !== index);
    setTodos(tempTodos);
  };

  const toggleComplete = (index) => {
    let tempTodos = [...todos];
    tempTodos.forEach((todo) => {
      if (todo.todoIndex === index) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(tempTodos);
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <Heading />
        <Input
          inputValue={inputValue}
          inputChange={(text) => setInputValue(text)}
        />
        <TaskList
          type={type}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          todos={todos}
        />
        <SubmitButton submitTodo={submitTodo} />
      </ScrollView>
      <TabBar type={type} setType={setType} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
