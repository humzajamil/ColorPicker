/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ColorButton from './ColorButton';
import Form from './Form';
import 'react-native-get-random-values';
import {useColors} from '../hooks';

export default function ColorList({navigation}) {
  const {colors, addColor} = useColors();
  return (
    <>
      <Form onNewColor={addColor} />
      <FlatList
        style={[styles.container]}
        data={colors}
        renderItem={({item}) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              Color_name={item.color}
              onPress={() =>
                navigation.navigate('Details', {color: item.color})
              }
            />
          );
        }}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});
