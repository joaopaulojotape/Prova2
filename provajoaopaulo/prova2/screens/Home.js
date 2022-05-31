import React,{useState,useEffect} from 'react';
import { Image, Text, View, Animated} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../Style/Style';
import ButtonIcon from '../components/ButtonIcon';

 export default function Home() {  
  const navigation = useNavigation(); 

  function navegar(){
    navigation.navigate('CriarConta');
  }

  function navegarSobre(){
    navigation.navigate('SobreNos');
  }

  const [offset] = useState(new Animated.ValueXY({x:0, y:100}));
   useEffect(() => {
   Animated.spring(offset.y,
    {
     toValue: 0,
     speed: 0.1,
     bounciness: 3
   }).start();
  },[]);  
  return (
    <Animated.View 
      style={
      [
      {transform:[{translateY:offset.y}]}          
      ]

      }>
    <View style={Style.container}>  

      <Image 
      style={Style.logo}
      source={require('../img/logo.png')}      
      />    

    <View style={Style.content}>
      <Text style={Style.titulo}>
      Banco Digital
      </Text>
      <Text style={Style.subtitle}>
      Organize seus Gastos Online
      </Text>  
      <ButtonIcon
      title="Criar Conta Digital"
      activeOpacity={0.7}
      onPress={navegar}
      />
      <ButtonIcon
      title="Sobre nós"
      activeOpacity={0.7}
      onPress={navegarSobre}
      />     
    </View>           
    </View>
    </Animated.View>
  );
}



