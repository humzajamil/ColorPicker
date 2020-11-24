/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default function ColorButton({
  backgroundColor,
  onPress = (f) => f,
  Color_name,
}) {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => onPress(backgroundColor)}
      underlayColor="orange">
      <View style={styles.row}>
        <View style={[styles.sample, {backgroundColor}]} />
        <Text style={styles.buttonText}>{Color_name}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,.8)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
  },
  sample: {
    margin: 5,
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
