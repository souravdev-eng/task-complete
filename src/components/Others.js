import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Others = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <Text style={styles.text}>Other</Text>
      <TextInput placeholder="type..." style={styles.input} />
    </View>
  );
};

export default Others;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    width: '60%',
    marginLeft: 18,
    fontSize: 16,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
    color: '#111',
  },
});
