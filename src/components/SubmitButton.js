import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SubmitButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>let's begain</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    height: 48,
    width: '40%',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
