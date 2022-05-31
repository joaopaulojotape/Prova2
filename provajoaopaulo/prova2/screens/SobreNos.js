import React,{useState} from 'react';
import {Text, View, TextInput,Animated} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../Style/Style';
import MyInput from '../components/MyInput';
import MyButton from '../components/MyButtton';
import Color from '../Style/color'
 
export default function SobreNos() {     

   const navigation = useNavigation(); 

  function navegar(){
    navigation.navigate('CriarConta');
  }

   const [tamanho] = useState(new Animated.Value(12));   
   Animated.timing(tamanho, {toValue: 30, delay:100, duration: 1000}).start();
  return (
    <Animated.View>   

    <View style={[Style.titulo,]}>     
    <Animated.Text  style={{fontSize: tamanho, fontWeight:'bold', color: 'white'}}>Sobre nós</Animated.Text> 
      <Text style={Color.branca}>Deixe um feedback</Text>

      <MyInput style={Style.input}
      texto='Digite seu nome'

      />
      <MyInput style={Style.input}
      texto='Digite seu Telefone'

      />
      <MyInput style={Style.input}
      texto='Digite seu E-Mail'

      />
      <MyInput
      multiline={true}
      numberOfLines={10}   
      texto='Deixe sua mensagem'
      />
      <MyButton
      titulo="voltar"
      cor="blue"
      apertar={() => {
      navigation.goBack();
      }}
      />       
    </View>
    </Animated.View>
  );
}


