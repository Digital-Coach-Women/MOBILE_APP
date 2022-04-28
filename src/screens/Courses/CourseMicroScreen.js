import { View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { colors, constants, images } from '../../utils'
import { Button, Text } from '@rneui/themed';

export class CourseMicroScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{}}>
          <View style={{marginHorizontal: 20, marginTop: 20}}>
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
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 28, fontFamily: constants.openSansBold, marginTop: 17}}>Diseño UX</Text>  
            <View style={{backgroundColor: colors.white, elevation: 5, borderRadius: 10, marginTop: 10}}>
              <Image source={images.ux_cover} style={{width: '100%', height: 300, borderRadius: 10}} />
            </View>
            <Text style={{fontSize: 16, fontFamily: constants.openSansSemiBold, marginTop: 10}}>Los colores, la tipografía, las imágenes son algunos de los elementos con los que trabaja el diseñador UI para hacer que un producto sea atractivo. Pero de nada sirve tener un producto bonito si no satisface las necesidades de los usuarios para los que está pensado. Por eso, UX y UI deben ir de la mano para lograr un producto 100% pensado para los clientes. {'\n\n'}Veámoslo con un ejemplo. Piensa en la bandeja de entrada de tu correo electrónico. Todo lo que ves es el trabajo de un diseñador de UI. Ahora imagina que intentas abrir un correo pero la página tarda mucho o que no puedes encontrar ese contacto tan importante al que tienes que escribir. Pues los encargados de que no te desesperes en los procesos son los diseñadores UX. </Text>
            </View>
          </ScrollView>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    display: 'flex',
  },
})

export default CourseMicroScreen;