import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Text } from '@rneui/themed' 
import HeaderCourse from '../../components/header/HeaderCourse'
import { colors, images } from '../../utils'
import LevelOption from '../../components/Option/LevelOption'
import Feather from 'react-native-vector-icons/Feather'

const options = [
    {text: 'B', active: true},
    {text: 'I', active: false},
    {text: 'A', active: false},
]

export class ICourseRoadMapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <HeaderCourse image={images.ui_course} text="UI Design" /> 
        <View style={{flex:1, display: 'flex', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', marginTop: 20}}> 
          <Text style={{textAlignVertical: 'bottom'}}>Básico</Text>    
          <View>
            <Text>Lorem Ipsum is simply dummy</Text>
            <Text>Lorem Ipsum is simply dummy</Text>
          </View>
          <Text style={{textAlignVertical: 'bottom'}}>Avanzado</Text>    
        </View>    
        <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 20}}> 
          <View style={{borderRadius: 30, backgroundColor: colors.yellow, width: 30, height: 30}} />
          <View style={{justifyContent: 'center'}}>
          <View style={{backgroundColor: colors.pourple, width: 110, height: 10}} />
          </View>
          <View style={{borderRadius: 30, backgroundColor: colors.yellow, width: 30, height: 30}} />
          <View style={{justifyContent: 'center'}}>
          <View style={{backgroundColor: colors.pourple, width: 110, height: 10}} />
          </View>
          <View style={{borderRadius: 30, backgroundColor: colors.yellow, width: 30, height: 30}} />
        </View>
        <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', marginTop: 0}}> 
        <View>
            <Text style={{width: 100}}>Introducción a diseño UI</Text>
            <Text style={{width: 100}}>Diseño Web y Apps</Text>
          </View>
          <Text style={{textAlignVertical: 'top', marginLeft: 20, marginRight: 40}}>Intermedio</Text>    
          <View>
            <Text style={{width: 100}}>Lorem Ipsum is simply dummy</Text>
            <Text style={{width: 100}}>Lorem Ipsum is simply dummy</Text>
          </View>
        </View>    
        </View>
      </View>
    )
  }
}

const TestComp = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Básico</Text>
      <View style={{backgroundColor: colors.yellow, width: 30, height:30, borderRadius: 30}} />
      <Text>Introducción a diseño UI</Text>
      <Text>Diseño Web y Apps</Text>
    </View>
  )
}

const TestComp2 = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Introducción a diseño UI</Text>
      <Text>Diseño Web y Apps</Text>
      <View style={{backgroundColor: colors.yellow, width: 30, height:30, borderRadius: 30}} />
      <Text>Básico</Text>
    </View>
  )
}

export default ICourseRoadMapScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.white
    }
})