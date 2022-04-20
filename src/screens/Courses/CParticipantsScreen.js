import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Text } from '@rneui/themed' 
import HeaderCourse from '../../components/header/HeaderCourse'
import { colors, images } from '../../utils'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

const partners = [
    {name: 'Adriana Peña'},
    {name: 'Alexander Moreno'},
    {name: 'Alejandra Galvez'},
    {name: 'Paola Bravo'},
]

export class CParticipantsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <HeaderCourse image={images.ui_course} text="UI Design" /> 
          <View style={{padding: 20}}>
          {partners.map((item, index) => <Partner key={index} name={item.name} /> )}
          </View>
      </View>
    )
  }
}

const Partner = ({name}) => {
    return (
        <View style={{flexDirection: 'row', display: 'flex', marginBottom: 10}}>
            <FontAwesome name='user-o' color={colors.pink} size={20} style={{marginRight: 5}} /> 
            <Feather name='message-square' color={colors.pink} size={20} style={{marginRight: 5}} />
            <Text style={{ color: colors.pink, fontWeight: 'bold'}} >{name}</Text>
        </View>
    )
}

export default CParticipantsScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.white
    }
})