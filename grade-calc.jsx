import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, Button,
} from 'react-native';
import styles from './AssetExample.js'; 



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
  <View style = {styles.container}>
    <Text
        style = {{
          margin: 'auto'
        }}>
        <h3>Course 1</h3>
      </Text>   
      <TextInput class = "grade" id = "c1" type="number" placeholder="Grade"
      style={{
          margin: 'auto',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 130,
          marginBottom: 5}}
      value={num1.toString()}
          onChangeText={
            (text) => {
              setNum1(text);
            }}
      />

    <Text
        style = {{
          margin: 'auto'
        }}>
        <h3>Course 2</h3>
      </Text>
      <TextInput class = "grade" id = "c2" type="number"  placeholder="Grade"
      style={{
          margin: 'auto',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 130,
          marginBottom: 5}}
        value={num2.toString()}
          onChangeText={
            (text) => {
              setNum2(text);
            }}
      />
      <Text
        style = {{
          margin: 'auto'
        }}>
        <h3>Course 3</h3>
      </Text>
      <TextInput class = "grade" id = "c3" type="number"  placeholder="Grade"
      style={{
          margin: 'auto',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 130,
          marginBottom: 5}}
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
        title = 'Calculate GPA'
      />
      <View >
        <Text
        style = {{
          margin: 'auto'
        }}>
          <h2>GPA Result =
          {' '}
          {gpa}
          </h2>
        </Text>
      </View>
    
  
</View>
  )};
export default GradeFields;

