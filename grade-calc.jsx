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

const getGPA = (text) => {
  parseFloat(text);
  
  if(text >= 93){
    return(4.0);
  } 
  else if (text >= 90){
    return(3.7);
  }
  else if (text >= 87){
    return(3.3);
  }
  else if (text >= 83){
    return(3.0);
  }
  else if (text >= 80){
    return(2.7);
  }
  else if (text >= 77){
    return(2.3);
  }
  else if (text >= 73){
    return(2.0);
  }
  else if (text >= 70){
    return(1.7);
  }
  else if (text >= 67){
    return(1.3);
  }
  else if (text >= 65){
    return(1.0);
  }
  
  else if (text < 65) {
    return(0.0);
  }
  
}


const GradeFields = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [total, setTotal] = useState(0);
  const [gpa, setGpa] = useState(0);

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
          setTotal(inputSanitizer(num1, setNum1) + inputSanitizer(num2, setNum2) + inputSanitizer(num3, setNum3));
          
          setGpa(getGPA(total/3));
        }}
        Title="Calculate GPA"
      />
      <View>
        <Text>
          Result =
          {' '}
          {gpa}
        </Text>
        {total/3}
      </View>
    
  
</View>
  )};
export default GradeFields;

