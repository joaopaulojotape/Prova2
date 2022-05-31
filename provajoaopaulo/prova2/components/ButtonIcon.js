import React from 'react';
import {Button, TouchableOpacity, Text,View, Image} from 'react-native';
import Styles from '../Style/styles';

type Props = TouchableOpacityProps & {
    title: string;
}
const myButton = ({title, ...rest}: Props) => {
  return (
     <TouchableOpacity style={Styles.buttonHome}     
      {... rest} >  
      <Text style={Styles.titleHome}>
           {title}
        </Text>
        
    </TouchableOpacity>    
  )
};

export default myButton;