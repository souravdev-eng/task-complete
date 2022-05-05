import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Button = ({title, active, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={!active ? styles.container : styles.containerActive}>
      <Text style={!active ? styles.text : styles.activeText}>{title}</Text>
      <Ionicons
        name={!active ? 'add' : 'close'}
        size={20}
        color={!active ? '#555' : 'tomato'}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 22,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#555',
    flexDirection: 'row',
  },
  containerActive: {
    paddingHorizontal: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 22,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'tomato',
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 4,
  },
  text: {
    color: '#555',
    fontSize: 16,
  },
  activeText: {
    color: 'tomato',
    fontSize: 16,
  },
});
