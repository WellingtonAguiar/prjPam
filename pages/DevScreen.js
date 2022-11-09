import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import {stylesDevs} from '../assets/styles/styles.js'
import well from '../assets/imgs/well.jpg'
import yuri from '../assets/imgs/yuri.jpg'
import instagram from '../assets/imgs/icones/instagram.png'
import linkedin from '../assets/imgs/icones/linkedin.png'
import github from '../assets/imgs/icones/github.png'

import { useNavigation } from '@react-navigation/native';

export function DevScreen() {

  const navigation = useNavigation();

  return (
    <View style={stylesDevs.container}>
      <StatusBar
        animated={true} />
      <View style={stylesDevs.containerDev}> 
        <Image source={well} style={stylesDevs.imgDev} />
        <Text style={stylesDevs.nomeDev}> Wellington Augusto</Text>
        <View style={stylesDevs.containerRedes}>
          <Image source={instagram} style={stylesDevs.redesSociais} />
          <Image source={github} style={stylesDevs.redesSociais} />
          <Image source={linkedin} style={stylesDevs.redesSociais} />
        </View>
      </View>

    <View style={stylesDevs.containerDev}> 
      <Image source={yuri} style={stylesDevs.imgDev} />
      <Text style={stylesDevs.nomeDev}> Yuri Oliveira</Text>
      <View style={stylesDevs.containerRedes}>
        <Image source={instagram} style={stylesDevs.redesSociais} />
        <Image source={github} style={stylesDevs.redesSociais} />
        <Image source={linkedin} style={stylesDevs.redesSociais} />
      </View>
    </View>
    </View>
  );
}