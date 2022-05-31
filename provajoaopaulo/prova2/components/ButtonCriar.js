import React from 'react';
import {Button, TouchableOpacity, Text,View, Image} from 'react-native';
import Styles from '../Style/styles';

type Props = TouchableOpacityProps & {
    title: string;
}
const buttonCriar = ({title, ...rest}: Props) => {
  return (
     <TouchableOpacity style={Styles.buttonCriar}     
      {... rest} >  
      <Text style={Styles.titleCriar}>
           {title}
        </Text>        
    </TouchableOpacity>    
  )
};

export default buttonCriar;