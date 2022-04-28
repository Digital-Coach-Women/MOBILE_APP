import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking} from 'react-native'
import React, { Component } from 'react'
import { colors, constants, images } from '../../utils'
import { Button, Text } from '@rneui/themed';


const microCourses = [
  {name: '¿Qué es diseño UI?'},
  {name: 'Diseñas para web y apps'},
]

const links = [
  {name: 'Basico', number: 3, active: true},
  {name: 'Intermedio', number: 3, active: false},
  {name: 'Avanzado', number: 3, active: false}
]

export class CourseDetailScreen extends Component {

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
          
            <Button
              TouchableComponent={({onPress})  => 
                <TouchableOpacity activeOpacity={1} onPress={onPress} style={{justifyContent: 'center',alignItems: 'center', flex:1, display: 'flex'}}>
                  <Image source={images.partners} style={{resizeMode: 'contain', width: 35, height: 35}} /> 
                </TouchableOpacity>
              }
              containerStyle={{
                backgroundColor: colors.white,
                elevation: 4,
                borderRadius: 10,
                width: 60,
                paddingVertical: 5
              }}
              onPress={() => {
                this.props.navigation.navigate('CParticipants')
              }}
              />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 28, fontFamily: constants.openSansBold, marginTop: 17}}>Diseño UX</Text>  
            <View style={{backgroundColor: colors.white, elevation: 5, borderRadius: 10, marginTop: 10}}>
              <Image source={images.ux_cover} style={{width: '100%', height: 300, borderRadius: 10}} />
            </View>
            <Text style={{fontFamily: constants.openSansBold, fontSize: 20, marginTop: 12, marginBottom: 20}} >Microcursos</Text>
              {microCourses.map((item, index) => {
                return (
                  <View key={index} style={{borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: colors.tealishBlueIntense, marginBottom: 20}}>
                      <Text style={{fontFamily: constants.openSansBold, fontSize: 18, textAlignVertical: 'center', flexWrap: 'wrap', width: 270}}>{item.name}</Text>
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
              <Text style={{fontFamily: constants.openSansBold, fontSize: 20, marginBottom: 20}} >Si quisiera tener certificado tenemos las siguientes opciones:</Text>
              {links.map((item, index) => {
                return (
                  <TouchableOpacity onPress={() => {Linking.openURL('https://es.coursera.org/')}} activeOpacity={5} key={index} style={{borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: colors.tealishBlue, marginBottom: 20}}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{justifyContent: 'center'}}>
                          <Image source={images.link} style={{height: 20, width: 20, resizeMode: 'contain', marginRight: 5}} />
                        </View>
                        <Text style={{fontFamily: constants.openSansSemiBold, fontSize: 14, flexWrap: 'wrap', textAlignVertical: 'center', width: 220}}>Programa especializado: Diseño de interfaz de usuario </Text>
                      </View>
                      <Text style={{textAlignVertical: 'center', fontFamily: constants.openSansBold, fontSize: 16,textAlign: 'center'}}>Coursera</Text>
                  </TouchableOpacity>
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

export default CourseDetailScreen;