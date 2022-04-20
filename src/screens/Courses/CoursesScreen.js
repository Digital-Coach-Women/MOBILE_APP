import {  View, Image, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Text } from '@rneui/themed'
import { colors, images } from '../../utils'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5' 

export class CoursesScreen extends Component {

  constructor(props){
    super(props)
    this.state={}
  }

  render() {
    return (
      <View style={{backgroundColor: colors.white, flex: 1, display: 'flex', padding: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>MIS CURSOS</Text>
        <View style={{elevation: 5, backgroundColor: colors.white, borderRadius: 10}}>
          <Image source={images.ui_course} style={{height: 200, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 20, paddingBottom: 20}}>
            <View>
              <Text>UI DESING</Text>
              <Text>Basico</Text>
            </View>
            <View style={{justifyContent: 'center'}} >
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('CourseDetail')
              }} style={{borderColor: colors.pink, borderWidth: 2, padding: 5, marginTop:10, marginBottom: 10, borderRadius: 10}}>
                <Text style={{textAlign: 'center'}}>¿Qué es el diseño UI?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{borderColor: colors.pink, borderWidth: 2, padding: 5, marginTop:10, marginBottom: 10, borderRadius: 10}}>
                <Text style={{textAlign: 'center'}}>Diseñar para web vs apps</Text>
              </TouchableOpacity>
            </View>

            <View >
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('CParticipants')
              }} style={{ marginTop:10, marginBottom: 10}}>
                <View style={{borderColor: colors.pink, borderWidth: 2, padding: 5, borderRadius: 30, width: 50, alignSelf: 'center'}}>
                  <FontAwesome5 name='users' color={colors.pink} size={30} style={{}} />
                </View>
                <Text style={{textAlign: 'center', color: colors.pink, fontWeight: 'bold'}}>Participantes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{borderColor: colors.pink, borderWidth: 2, padding: 5, borderRadius: 30, width: 52, alignSelf: 'center'}}>
                <FontAwesome5 name='school' color={colors.pink} size={30} /> 
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default CoursesScreen