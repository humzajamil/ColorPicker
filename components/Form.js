/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const Form = ({onNewColor = (f) => f}) => {
  const [inputValue, setValue] = useState('');
  const input = useRef('');
  return (
    <View style={styles.container}>
      <TextInput
        ref={input}
        style={styles.textInput}
        autoCapitalize="none"
        value={inputValue}
        onChangeText={setValue}
        placeholder="enter color name.."
      />
      <Button
        title="add"
        onPress={() => {
          input.current.blur(); //removing focus from TextInput
          onNewColor(inputValue);
          setValue('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: 22,
    padding: 5,
    borderWidth: 3,
    borderRadius: 10,
    margin: 5,
    marginLeft: 10,
  },
});

export default Form;
