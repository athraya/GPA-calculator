import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, Button,
} from 'react-native';


const inputSanitizer = (text, setter) => {
  // const tmp = parseFloat(text);
  if (text.length === 0 || Number.isNaN(text)) {
    setter(0);
    return 0;
  }
  return parseFloat(text);
};


const GradeFields = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [total, setTotal] = useState(0);
  const three = 3;

  return(
  <View>
    <Text>Course 1</Text>   
      <TextInput class = "grade" id = "c1" type="number" placeholder="Grade"
      value={num1.toString()}
          onChangeText={
            (text) => {
              setNum1(text);
            }}
      />

    <Text>Course 2</Text>
      <TextInput class = "grade" id = "c2" type="number"  placeholder="Grade"
        value={num2.toString()}
          onChangeText={
            (text) => {
              setNum2(text);
            }}
      />
      <Text>Course 3</Text>
      <TextInput class = "grade" id = "c3" type="number"  placeholder="Grade"
        value={num3.toString()}
          onChangeText={
            (text) => {
              setNum3(text);
            }}
      />

  
     <Button
        mode="contained"
        onPress={() => {
          setTotal(inputSanitizer(num1, setNum1) + inputSanitizer(num2, setNum2) + inputSanitizer(num3, setNum3) / three);
          
        }}
        Title="Calculate GPA"
      />
      <View>
        <Text>
          Result =
          {' '}
          {total}
        </Text>
      </View>
    
  
</View>
  )};

export default GradeFields;

