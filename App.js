import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GradeFields from './boxs.jsx';
import styles from './AssetExample.js'; 

export default function App() {
  return(
  <View style={{margin: 'auto'}}>
    <Text>
      <h1>GPA Calcualtor</h1>
    </Text>
    <GradeFields/>
  </View>
  )}
