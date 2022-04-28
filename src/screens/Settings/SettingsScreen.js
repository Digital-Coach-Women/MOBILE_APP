import React, { Component } from 'react'
import { View , StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native'
import { Text } from '@rneui/themed'
import { colors, constants, images } from '../../utils'

const options = [
  {name: 'Mi Perfil', route: 'CurrentGoal', image: images.profile_icon},
  {name: 'Notificación', route: 'Cup', image: images.notification_icon, separator: true},
  {name: 'Sobre Nosotros', route: 'Evolution', image: images.about_icon},
  {name: 'Politicas de Privacidad', route: 'SuccessCases', image: images.privacy_icon},
  {name: 'Contacto', route: 'SuccessCases', image: images.contact_icon, separator: true},
  {name: 'Cerrar Sesión',  image: images.logout_icon, exit: true},
]

export class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.controller = new AbortController();
  }

  goToICourses(){
    this.props.navigation.navigate('ICourse')
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 22, fontFamily: constants.openSansBold, marginBottom:10}}>Mis objetivos</Text>
        {options.map((item, index) => (
          <Option item={{...item, onPress: () => {this.props.navigation.navigate(item.route)}}} key={index} /> 
        ))}
      </View>
    )
  }
}

const Option = ({item}) => {
  const{ onPress, image, name} = item
  return (
    <>
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={{backgroundColor: colors.white, flexDirection: 'row', padding: 15, marginTop:10, borderRadius: 10, elevation: 5}}>
      <Image source={image} style={{height: 50, width: 50 , resizeMode: 'contain'}} /> 
      <Text style={{fontSize: 18, fontFamily: constants.openSansBold, marginLeft: 10, textAlignVertical: 'center'}}>{name}</Text>
    </TouchableOpacity>
    {item.separator && 
      <View style={{marginTop: 10, height: 3, width: '100%', borderRadius: 10, backgroundColor: colors.tealishBlue}} />
    }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex:1, 
    padding: 20,
    display: 'flex',
  },
  title: {
    color: colors.pourple,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },

})

export default SettingsScreen