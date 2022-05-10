import React, { Component } from 'react'
import { View , StyleSheet, Image, FlatList} from 'react-native'
import { Text } from '@rneui/themed'
import { colors, constants, images } from '../../utils'
import EspecialityItem from '../../components/Option/EspecialityItem'

const options = [
  {image: images.marketing, text: 'Marketing', levels: 3, navigation: ''},
  {image: images.uxDesign, text: 'Diseños UX',levels: 3, navigation: ''},
  {image: images.crm, text: 'CRM', levels:3, navigation: ''},
]

export class InterestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.controller = new AbortController();
  }

  goToICourses(){
    this.props.navigation.navigate('ICourse')
  }

  renderItem = ({item, index, array}) => {
    return (
      <EspecialityItem key={index.toString()} item={{...item, onPress: () => {this.props.navigation.navigate('ICourse')}}} /> 
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{paddingHorizontal: 20, paddingVertical: 20}}> 
          <View style={{flexDirection: 'row'}}>
            <View style={{borderWidth: 1, borderColor: 'gray', borderRadius: 10}}>
              <Image source={images.profile} style={{resizeMode: 'contain', width: 70, height: 70}} /> 
            </View>
            <Text style={{fontFamily: constants.openSansBold, fontSize: 20, marginLeft: 10, width: 150}}>Hola Juana Ramos Santos</Text>
          </View>
        <View style={{height: 30}} /> 
        <Text style={{fontSize: 18, fontFamily: constants.openSansBold}}>Dale un vistazo a todos nuestras especialidades disponibles para ti.</Text>
        </View>
        <FlatList 
          contentContainerStyle={{paddingHorizontal: 20, paddingVertical:10 }}
          ItemSeparatorComponent={() => <View style={{height: 20}} /> }
          renderItem={this.renderItem}
          data={options}
          keyExtractor={(item, index) => index}
        /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex:1, 
    padding: 0,
    display: 'flex'
  },
  title: {
    color: colors.pourple,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },

})

export default InterestScreen