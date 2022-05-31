import React from 'react';
import { useState } from 'react';
import {Text, View, Switch} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import ButtonCriar from '../components/ButtonCriar'
import Style from '../Style/Style'
import Size from '../Style/size'
import MyInput from '../components/MyInput';

 export default function CriarConta() {

  const [name, setName] = useState("");
  const [idade, setIdade] = useState(0);
  const [limite, setlimite] = useState(0); 
  const [selectedGeneroSelecionado, setGeneroSelecionado] = useState();
  const [isEnabled, setEnable] = useState(false);

  const alernaerSwitch =() =>{
    setEnable(previousState => !previousState)  
  }

  const estudante = isEnabled ? 'Sim' : 'Não';

   function reset(){
    setName('')
    setIdade(0)
    setlimite(0)
    setGeneroSelecionado(0)    
}
  const navigation = useNavigation();  
  
  function navegar(){
    navigation.navigate('CriarConta')

  }

  function alerta(){
    if((name != '') && (idade != 0) && (limite != 0) && (selectedGeneroSelecionado != '') && (estudante != '')){
      alert("Olá: " + name + "\nVocê tem: " + idade + " anos  \nSeu limite é de: R$" + limite + "  \nGenero: "+ selectedGeneroSelecionado + "\nEstudante: " + estudante )

    }else{
      alert('Preencha todos os campos nulos')
    }
  }
  
  const title = 'Genero';



  return (
    <View style={Style.container}>
      <Text style={Size.tamanho}>Nome:</Text>
      <MyInput 
      texto='Digite seu nome'
      mudar={(text)=>setName(text)}
      value={name}
      />
      <Text style={Size.tamanho}>Idade:</Text>
      <MyInput style={Style.input}
      texto='Digite sua Idade'
      keyboardType="numeric"
      mudar={(text)=>setIdade(text)}
      value={idade}    
      />

    <View>
      <Text style={Size.tamanho}>Seu Limite: R${limite}</Text>
      <Slider
      style={{width: 230, height: 40}}
      minimumValue={0}
      maximumValue={1000}
      step={1}         
      onValueChange={(value)=>setlimite(value)}
      />    
    </View> 
    {title}
      <Picker      
      selectedValue={selectedGeneroSelecionado}
      onValueChange={(itemValue, itemIndex) =>
      setGeneroSelecionado(itemValue)
      }>

      <Picker.Item label="Masculino" value="Masculino" />
      <Picker.Item label="Feminino" value="Feminino" />
      </Picker> 
    <View>
      <Text>Estudante: {estudante}</Text>
      <Switch
      trackColor={{ false: "#FF6347", true: "#00FF00" }}
      thumbColor={!isEnabled ? "red" : "#00FF00"}       
      onValueChange={alernaerSwitch}
      value={isEnabled}
      />
    </View> 
    <View style={Style.title2}> 
    <ButtonCriar
    title="Criar Conta Digital"
    activeOpacity={0.7}
    onPress={alerta}
    />

    <ButtonCriar 
    title="Limpar"
    activeOpacity={0.7}
    onPress={reset}
    />

    <ButtonCriar
    title="Voltar"
    activeOpacity={0.7}
    onPress={() => {
    navigation.goBack();
    }}
    />
    </View>       
    </View>
  );
}

