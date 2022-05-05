import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import SubmitButton from './src/components/SubmitButton';
import FormInput from './src/components/FormInput';
import Button from './src/components/Button';
import Others from './src/components/Others';

import {DATA} from './src/constant/Button.data';

const defaultValue = {
  weight: '',
  height: '',
};

const App = () => {
  const [values, setValues] = useState(defaultValue);
  const [data, setData] = useState(DATA);

  const handelActive = index => {
    const newData = [...data];
    newData[index].active = !newData[index].active;
    setData(newData);
  };

  return (
    <>
      <FormInput
        value={values.weight}
        title="Weight"
        format="kgs"
        onChangeText={t => setValues({...values, weight: t})}
      />
      <FormInput
        value={values.height}
        title="Height"
        format="cms"
        onChangeText={t => setValues({...values, height: t})}
      />
      <View style={styles.buttonContainer}>
        {data.map((item, index) => (
          <Button
            key={item.title}
            active={item.active}
            onPress={() => handelActive(index)}
            title={item.title}
          />
        ))}
      </View>
      <Others />
      <SubmitButton />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignSelf: 'center',
  },
});
