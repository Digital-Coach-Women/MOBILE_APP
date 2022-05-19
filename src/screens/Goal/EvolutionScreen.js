import { View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { colors, constants, images } from '../../utils'
import { Text } from '@rneui/themed';
import {Button} from '@rneui/base'
import LottieView from 'lottie-react-native';


export class EvolutionScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
        icon={{
            name: 'arrow-left',
            type: 'font-awesome-5',
            size: 30,
            color: 'black',
        }}
        buttonStyle={{
            backgroundColor: colors.white,
            borderRadius: 10,
        }}
        containerStyle={{
            backgroundColor: colors.white,
            elevation: 4,
            borderRadius: 10,
            width: 60,
            paddingVertical: 5
        }}
        onPress={() => {
            this.props.navigation.goBack()
        }}
        />
        <Text style={{fontSize: 28, fontFamily: constants.openSansBold, marginTop: 17, marginBottom: 20}}>Mi Nivel es 1 (Junior)</Text>  
        <LottieView 
            style={{ width: 230, height: 230, marginBottom: 10}}
            source={require('../../assets/animations/girl-junior.json')} 
            autoPlay 
            loop />
        <Text style={{textAlign: 'center', fontFamily: constants.openSansRegular, fontSize: 16}}>
        Son los usuarios que ya han superado al menos 2 cursos en el nivel básico. Y el ícono de la mujer estudiante representa el inicio del escalon en el empoderamiento, ya que recien estan adquiriendo conocimientos en temas de Tecnología.
        </Text>
        <Text style={{textAlign: 'center', fontFamily: constants.openSansRegular, fontSize: 16, marginTop: 20}}>
        Actualmente llevas 3 días en este nivel 
        </Text>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    display: 'flex',
    padding: 20
  },
  imageEnable: {
    resizeMode: 'contain', width: 40, height: 40
  },
  imageDisable: {
    resizeMode: 'contain', width: 40, height: 40, tintColor: colors.grayLight
  }
})

export default EvolutionScreen;