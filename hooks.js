import {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useColors = () => {
  const [colors, setColors] = useState([]);
  const loadColors = async () => {
    const colorData = await AsyncStorage.getItem('@ColorListStore:Colors');
    console.log(`value is ${colorData}`);
    if (colorData) {
      const colors = JSON.parse(colorData);
      setColors(colors);
    }
  };
//load colors initially
  useEffect(() => {
    if (colors.length) {
      return;
    }
    loadColors();
  }, []);

  //save color
  useEffect(() => {
    AsyncStorage.setItem('@ColorListStore:Colors', JSON.stringify(colors));
  }, [colors]);

  const addColor = (color) => {
    const newColor = {id: nanoid(), color};
    setColors([newColor, ...colors]);
  };
  return {colors, addColor};
};
