import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking} from 'react-native'
import React, { Component } from 'react'
import { colors, constants, images } from '../../utils'
import { Text } from '@rneui/themed';
import {Button} from '@rneui/base'


const microCourses = [
  {name: '¿Qué es diseño UI?', course: 'Diseño UX'},
  {name: 'Diseñas para web y apps', course: 'Diseño UX'},
]

export class CurrentGoalScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 20}}>
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
            <Text style={{fontSize: 28, fontFamily: constants.openSansBold, marginTop: 17}}>Meta Actual</Text>  
            <Text style={{fontFamily: constants.openSansBold, fontSize: 20, marginTop: 12, marginBottom: 10}} >Porcentaje Promedio:</Text>
            <View style={{backgroundColor: colors.white, marginTop: 10}}>
              <Image source={images.percent} style={{width: '100%', height: 250, resizeMode: 'contain'}} />
            </View>
            <Text style={{fontFamily: constants.openSansBold, fontSize: 18, marginTop: 20, marginBottom: 0}}><View style={{borderRadius: 30, width: 13, height: 13, backgroundColor: colors.bluePurple}}/> 80% cursos completados</Text>
            <Text style={{fontFamily: constants.openSansBold, fontSize: 18, marginTop: 0, marginBottom: 20}}><View style={{borderRadius: 30, width: 13, height: 13, backgroundColor: colors.tealishBlueIntense}}/> 20% cursos no completados</Text>
            <Text style={{fontFamily: constants.openSansBold, fontSize: 18, marginTop: 12, marginBottom: 20}}>Microcursos que faltan culminar</Text>
              {microCourses.map((item, index) => {
                return (
                  <View key={index} style={{borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: colors.tealishBlueIntense, marginBottom: 20}}>
                      <View style={{justifyContent: 'space-evenly'}}>
                        <Text style={{fontFamily: constants.openSansBold, fontSize: 18, textAlignVertical: 'center', flexWrap: 'wrap', width: 270}}>{item.name}</Text>
                        <Text style={{color: '#7B7B7B', fontFamily:constants.openSansSemiBold, fontSize: 16}}>{item.course}</Text>
                      </View>
                      <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => {
                          this.props.navigation.navigate('CourseMicro')
                        }} activeOpacity={1} style={{padding: 2, borderRadius: 10, backgroundColor: colors.bluePurple }}>
                          <Image source={images.arrow_right} style={{resizeMode: 'contain', width: 30, height: 30, margin: 5}} /> 
                        </TouchableOpacity>
                      </View>
                  </View>
                )
              })}
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

export default CurrentGoalScreen;