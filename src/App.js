import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {MMKV} from 'react-native-mmkv';

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

  useEffect(() => {
    const keys = MMKV.getAllKeys();
    todoIndex = keys.length;
    if (keys.length > 0) {
      const dbTodos = [];
      for (let i = 0; i < keys.length; i++) {
        const jsonTodo = MMKV.getString(keys[i]);
        const objectTodo = JSON.parse(jsonTodo);
        dbTodos.push(objectTodo);
      }
      setTodos(dbTodos);
    }
  }, []);

  const submitTodo = () => {
    if (inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: inputValue,
      todoIndex,
      complete: false,
    };
    setTodos([...todos, todo]);
    MMKV.set(todoIndex.toString(), JSON.stringify(todo));
    setInputValue('');
    todoIndex++;
  };

  const deleteTodo = (index) => {
    let tempTodos = [...todos];
    tempTodos = tempTodos.filter((todo) => todo.todoIndex !== index);
    setTodos(tempTodos);
    MMKV.delete(index.toString());
  };

  const toggleComplete = (index) => {
    let tempTodos = [...todos];
    tempTodos.forEach((todo) => {
      if (todo.todoIndex === index) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(tempTodos);
    const jsonTodo = MMKV.getString(index.toString());
    const objectTodo = JSON.parse(jsonTodo);

    objectTodo.complete = !objectTodo.complete;
    MMKV.set(index.toString(), JSON.stringify(objectTodo));
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <Heading />
        <Input
          inputValue={inputValue}
          inputChange={(text) => setInputValue(text)}
        />
        <SubmitButton submitTodo={submitTodo} />
        <TaskList
          type={type}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          todos={todos}
        />
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
