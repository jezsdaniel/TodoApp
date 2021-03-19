import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const SubmitButton = ({submitTodo}) => {
  return (
    <View>
      <TouchableHighlight
        underlayColor="#efefef"
        style={styles.button}
        onPress={submitTodo}>
        <Text style={styles.submit}>Add</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: '#666666',
    fontWeight: '600',
  },
});

export default SubmitButton;
