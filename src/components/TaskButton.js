import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const TaskButton = ({onPress, complete, name}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="#efefef"
      style={styles.button}>
      <Text
        style={[
          styles.text,
          complete ? styles.complete : null,
          name === 'Delete' ? styles.deleteButton : null,
        ]}>
        {name}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    padding: 7,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
  },
  text: {
    color: '#666666',
  },
  complete: {
    color: 'green',
  },
  deleteButton: {
    color: 'rgba(175, 47, 47, 1)',
  },
});

export default TaskButton;
