import { TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../utils'
import { Text } from '@rneui/themed'

export class SettingsScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', display: 'flex', flex: 1, padding: 10}}>
        <Option icon='user-o' name='Perfil de Usuario' />
        <Option icon='bell-o' name='Notificaciones' />
        <View style={{width: '100%', height: 1, backgroundColor: colors.pourple, marginTop: 10, marginBottom: 10}} /> 
        <Option icon='newspaper-o' name='Sobre Nosotros' />
        <Option icon='lock' name='Politicas De Privacidad' />
        <Option icon='envelope-o' name='Contacto' />
        <View style={{width: '100%', height: 1, backgroundColor: colors.pourple, marginTop: 10, marginBottom: 10}} /> 
        <Option icon='sign-out' name='Cerrar Sesión' />
      </View>
    )
  }
}

const Option = ({icon, name}) => {
  return (
    <TouchableOpacity activeOpacity={.5} onPress={() => {}} style={{flexDirection: 'row', display: 'flex', margin: 10}}>
      <FontAwesome name={icon} color={colors.pink}  size={30} style={{width: 45}} /> 
      <Text style={{color: colors.pink, fontSize: 20, textAlignVertical: 'center', fontWeight: 'bold'}} >{name}</Text>
    </TouchableOpacity>
  )
}

export default SettingsScreen