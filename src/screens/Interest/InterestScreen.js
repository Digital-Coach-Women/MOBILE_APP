import React, { Component } from 'react'
import { View , StyleSheet} from 'react-native'
import { Text } from '@rneui/themed'
import { colors, images } from '../../utils'
import InterestOption from '../../components/Option/InterestOption'

const options = [
  {image: images.digital, text: 'Quiero llevar mi producto a todo el mundo digitalmente', navigation: ''},
  {image: images.ui, text: 'Quiero hacer las mejores interfaces', navigation: ''},
  {image: images.crm, text: 'Quiero fidelizar a mis futuros clientes', navigation: ''},
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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>¿Qué tipo de especialidad de la Tecnología te gustaría seguir?</Text>
        <View style={{height: 90}} /> 
        {options.map((item, index) => <InterestOption key={index} image={item.image} text={item.text} onPress={() => this.goToICourses()}/> )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex:1, 
    padding: 25,
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