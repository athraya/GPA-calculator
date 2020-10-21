import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, Input, Button,
} from 'react-native';

const GradeFields = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [total, setTotal] = useState(0);

  return(
  <View>   
    <Input class = "grade" id = "c1" type="number" 
    value={num1.toString()}
        onChangeText={
          (text) => {
            setNum1(text);
          }}
    />;

    <Input class = "grade" id = "c2" type="number" />;
    <Input class = "grade" id = "c3" type="number" />;
  

  <View>
     <Button
        mode="contained"
        onPress={() => {

        }}
      >
        Calculate
    </Button>
  </View>
</View>
  )};

export default GradeFields;

