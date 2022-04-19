import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import HeaderCourse from '../../components/header/HeaderCourse'
import { colors, images } from '../../utils'
import LevelOption from '../../components/Option/LevelOption'
import Feather from 'react-native-vector-icons/Feather'
import { Button } from '@rneui/base'
import { Text } from '@rneui/themed'

const options = [
    {text: 'B', active: true},
    {text: 'I', active: false},
    {text: 'A', active: false},
]

export class ICourseScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      consultCourse: true,
    };
    this.controller = new AbortController();
  }

  render() {
    return (
      <View style={styles.container}>
          <HeaderCourse image={images.ui_course} text="UI Design" /> 
          <TouchableOpacity activeOpacity={.5} onPress={() => {
            this.props.navigation.navigate('ICourseRoadMap')
          }} style={{borderRadius: 40, borderWidth: 3, borderColor: colors.blue, position:'absolute', top: 20, alignSelf: 'center', backgroundColor: colors.white}}>
            <Feather name='bar-chart' size={40} color={colors.blue} style={{margin: 10}} /> 
          </TouchableOpacity>
          {this.state.consultCourse ?
            <View style={{alignItems: 'center', paddingTop:100}}>
                <Text style={{fontSize: 20, marginBottom:20}}>¿Deseas Matricularte en Este Nivel?</Text>
                <Button
                  title="SI"
                  onPress={() => {
                    this.props.navigation.navigate('Forget')
                  }}
                  buttonStyle={{ backgroundColor: colors.pink }}
                  containerStyle={{
                    height: 40,
                    width: 80,
                    marginHorizontal: 50,
                    marginVertical: 10,
                  }}
                  titleStyle={{ color: 'white', marginHorizontal: 20 }}
                />
                <Button
                  title="NO"
                  onPress={() => {
                    this.props.navigation.navigate('Forget')
                  }}
                  buttonStyle={{ backgroundColor: colors.pink }}
                  containerStyle={{
                    height: 40,
                    width: 80,
                    marginHorizontal: 50,
                    marginVertical: 10,
                  }}
                  titleStyle={{ color: 'white', marginHorizontal: 20 }}
                />
            </View>
          :
          <View style={{justifyContent: 'center', display: 'flex', flex:1, alignItems: 'center' }}>
          {options.map((item, index) => <LevelOption text={item.text} active={item.active} key={index} /> )}
        </View>
          }
      </View>
    )
  }
}

export default ICourseScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.white
    }
})