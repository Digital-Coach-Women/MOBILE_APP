import { View, StyleSheet, Image } from 'react-native'
import React, { PureComponent } from 'react'
import { colors, images } from '../../utils'
import { Text } from '@rneui/themed'
import Video from 'react-native-video';


export class CourseDetailScreen extends PureComponent {
  
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View style={{backgroundColor: colors.white, flex: 1, display: 'flex'}}>
      <Video 
        source={{uri: "https://static.pexels.com/lib/videos/free-videos.mp4" }}   // Can be a URL or a local file.
        style={styles.backgroundVideo} />
        <View style={{padding: 20}}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>¿Que es UI?</Text>
        <Text style={{fontSize: 16, textAlign: 'justify'}}>Los colores, la tipografía, las imágenes son algunos de los elementos con los que trabaja el diseñador UI para hacer que un producto sea atractivo. Pero de nada sirve tener un producto bonito si no satisface las necesidades de los usuarios para los que está pensado. Por eso, UX y UI deben ir de la mano para lograr un producto 100% pensado para los clientes.
{'\n\n'}
Veámoslo con un ejemplo. Piensa en la bandeja de entrada de tu correo electrónico. Todo lo que ves es el trabajo de un diseñador de UI. Ahora imagina que intentas abrir un correo pero la página tarda mucho o que no puedes encontrar ese contacto tan importante al que tienes que escribir. Pues los encargados de que no te desesperes en los procesos son los diseñadores UX.</Text>
        </View>
        <Image source={images.ui_detail} style={{width: 200, height: 70, alignSelf: 'center'}} /> 
      </View>
    )
  }
}

export default CourseDetailScreen

var styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%', 
    height: 200,
    // backgroundColor: 'black'
  },
});