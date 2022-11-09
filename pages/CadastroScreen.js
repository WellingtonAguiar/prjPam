import React, {useState} from 'react';
import { View, Text,TextInput,Button } from 'react-native';

export function CadastroScreen() {
  
  const [categoria,setCategoria] = useState()
  const [dados,setDados] = useState()


  const verificar = ()=>{   
    const valores = categoria
    
		fetch('http://localhost/prjpw3/categoria/categoria-inserir-json.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				categoria: categoria,				
			})			
		})

    setDados(valores)        
  } 
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Cadastrar Categorias </Text>
      
      <TextInput                            
              placeholder='Categoria'
              placeholderTextColor='#f00'
              autoFocus={true}       

              onChangeText = {text =>setCategoria(text)}
            />      

      <Button
        title="Salvar"
        onPress= {()=> verificar()}
      />  

      <View style={{margin:15}}>
        <Text> {dados}  </Text>
      </View>

    </View>
  );
}