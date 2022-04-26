import { View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { colors, constants, images } from '../../utils'
import { Button, Text } from '@rneui/themed';


const levels = [
  {name: 'Basico', number: 3, active: true},
  {name: 'Intermedio', number: 3, active: false},
  {name: 'Avanzado', number: 3, active: false}
]

export class ICourseScreen extends Component {

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
                  <Image source={images.roadmap} style={{resizeMode: 'contain', width: 35, height: 35}} /> 
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
                this.props.navigation.navigate('ICourseRoadMap')
              }}
              />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 28, fontFamily: constants.openSansBold, marginTop: 17}}>Diseño UX</Text>  
            <View style={{backgroundColor: colors.white, elevation: 5, borderRadius: 10, marginTop: 10}}>
              <Image source={images.ux_cover} style={{width: '100%', height: 300, borderRadius: 10}} />
            </View>
            <Text style={{fontSize: 18, fontFamily: constants.openSansRegular, marginTop: 10}}>Aprende a hacer las mejores interfaces desde cero. Tanto para tu trabajo o personal. </Text>
            <Text style={{fontFamily: constants.openSansBold, fontSize: 20, marginTop: 12, marginBottom: 20}} >Niveles</Text>
              {levels.map((item, index) => {
                return (
                  <View key={index} style={{borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: item.active ? colors.tealishBlueIntense : colors.grayLight, marginBottom: 20}}>
                      <View>
                          <Text style={{fontFamily: constants.openSansBold, fontSize: 18}}>{item.name}</Text>
                          <Text style={{fontFamily: constants.openSansRegular, color:'#6D6D6D', fontSize: 14}}>{item.number} temas</Text>
                      </View>
                      <View style={{justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => {}} activeOpacity={1} style={{padding: 2, borderRadius: 10, backgroundColor: item.active ? colors.bluePurple : colors.gray}}>
                          <Image source={images.plus} style={{resizeMode: 'contain', width: 35, height: 35}} /> 
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

export default ICourseScreen;