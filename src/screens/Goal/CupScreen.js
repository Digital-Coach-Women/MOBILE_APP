import { View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import React, { Component } from 'react'
import { colors, constants, images } from '../../utils'
import { Button, Text } from '@rneui/themed';
import CupCard from '../../components/Card/CupCard';

const myCups = [
    {name: 'Basico', active: true},
    {name: 'Intermedio', active: true},
    {name: 'Avanzado', active: true},
  ]
  

  const soonCups = [
    {name: 'Basico',  active: false},
    {name: 'Intermedio',  active: false},
    {name: 'Avanzado',  active: false},
  ]
  

export class CupScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItem = ({item, index, array}) => {
    return (
      <CupCard key={index} item={item} /> 
    )
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={{paddingHorizontal: 20, paddingTop: 20}}>
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
            <Text style={{fontSize: 28, fontFamily: constants.openSansBold, marginTop: 17, marginBottom: 5}}>Mis Logros</Text>  
            <Text style={{ fontFamily: constants.openSansSemiBold, fontSize: 16}}>
            Podras ver todos los logros que han 
    conseguido y lo que aun pueden conseguir.
            </Text>
            <Text style={{fontFamily: constants.openSansBold, fontSize: 20, marginTop: 12, marginBottom: 10}} >Mis Premios</Text>
        </View>
            <View style={{height: 190}}>
        <FlatList 
        contentContainerStyle={{ padding: 20}}
        ItemSeparatorComponent={() => (<View style={{width: 20}} /> )}
        data={myCups} 
        keyExtractor={(item, index) => index}  
        renderItem={this.renderItem} horizontal/> 
        </View>
        <Text style={{fontFamily: constants.openSansBold, fontSize: 20, marginTop: 12, marginBottom: 10, marginHorizontal: 20}} >Proximos Premios</Text>
        <View style={{height: 190}}>
        <FlatList 
        contentContainerStyle={{ padding: 20}}
        ItemSeparatorComponent={() => (<View style={{width: 20}} /> )}
        data={soonCups} 
        keyExtractor={(item, index) => index}  
        renderItem={this.renderItem} horizontal/> 
        </View>

      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    display: 'flex',
    // padding: 20
  },
  imageEnable: {
    resizeMode: 'contain', width: 40, height: 40
  },
  imageDisable: {
    resizeMode: 'contain', width: 40, height: 40, tintColor: colors.grayLight
  }
})

export default CupScreen;