import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import {styles} from '../assets/styles/styles.js';
import { useNavigation } from '@react-navigation/native';
import shape1 from '../assets/imgs/blob.svg';
import shape2 from '../assets/imgs/blob2.svg'

export function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true} />
        
      <View style={styles.homeMenu}>
        <View>
          <Text style={styles.tituloHome}>O que deseja fazer?</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('CategoriaScreen')}>
            <Text style={styles.btnHome}>Categoria</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CadastroScreen')}>
            <Text style={styles.btnHome}>Cadastrar categoria</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('DevScreen')}>
            <Text style={styles.btnHome}>Desenvolvedores</Text>
          </TouchableOpacity>
        </View>
      </View>
      
        <Image source={shape1} style={styles.shape1} />
        <Image source={shape2} style={styles.shape2} />
    </View>
  );
}