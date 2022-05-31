import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Style from '../Style/Style';

export default function MyInput({texto, mudar}){
  return (
    <TextInput style={Style.input} 
        
        placeholder={texto}
        onChangeText={mudar}
               
      />     
  )
}

