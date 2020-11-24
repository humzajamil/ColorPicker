/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Color from 'color';

export default function ColorDetails({route}) {
  const {color: name} = route.params;
  const color = Color(name);
  const colorText = {
    fontSize: 24,
    color: color.negate().toString(),
  };
  return (
    <View style={[styles.container, {backgroundColor: name}]}>
      <Text style={colorText}>Color Details : {name} </Text>
      <Text style={colorText}>Color Details : {color.rgb().toString()} </Text>
      <Text style={colorText}>Color Details : {color.hsl().toString()} </Text>
      <Text style={colorText}>
        Color Details : {color.luminosity().toString()}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
