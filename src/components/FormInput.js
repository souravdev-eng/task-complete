import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const FormInput = props => {
  const {format, value, onChangeText, title} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
        <Text>V</Text>
        <Text style={styles.text}>{format}</Text>
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
    alignSelf: 'center',
    marginVertical: 16,
    justifyContent: 'space-between',
    height: 30,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderBottomWidth: 0.8,
    width: 50,
    height: 40,
    borderBottomColor: '#777',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingLeft: 20,
    color: '#777',
  },
});
