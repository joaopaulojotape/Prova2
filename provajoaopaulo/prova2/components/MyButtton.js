import React from 'react';
import {Button, StyleSheet} from 'react-native';

export default function MyInput({titulo, cor, apertar}){
  return (
     <Button
      title={titulo}
      color={cor}
      onPress={apertar}       
    />      
  )
}
