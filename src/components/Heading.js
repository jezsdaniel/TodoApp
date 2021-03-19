import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Heading = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>things 2 do</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 60,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 56,
    color: 'rgb(81,175,47)',
    fontWeight: '100',
  },
});

export default Heading;
