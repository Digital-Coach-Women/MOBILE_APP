import { View, StyleSheet, Image, TextInput } from 'react-native'
import React, { Component } from 'react'
import { colors, constants, images } from '../../utils'
import { Text, Button } from '@rneui/themed';
import TextField from '../../components/Input/TextField';

export class ForgetScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: __DEV__ ? 'test@gmail.com' : '',
    };
    this.controller = new AbortController();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} /> 
        <View style={{height: 40}} /> 
        <TextField  
            keyboardType='email-address'
            placeholder='INGRESE CORREO'
            label={'Correo:'}
            value={this.state.email} 
            onChangeText={text => this.setState({email: text})}
        />  
        <View style={{height: 80}} /> 
        <View style={{alignItems: 'center'}}>
          <Button
            title="ENVIAR"
            onPress={() => {}}
            buttonStyle={{ backgroundColor: colors.pink }}
            containerStyle={{
              height: 40,
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ color: 'white', marginHorizontal: 20 }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    display: 'flex'
  },
  logo: {
    alignSelf: 'center',
    marginTop: 100,
    width: 150,
    height: 150
  }
})

export default ForgetScreen