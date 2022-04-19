import { View, StyleSheet, Image, TextInput } from 'react-native'
import React, { Component } from 'react'
import { colors, constants, images } from '../../utils'
import { Text, Button } from '@rneui/themed';
import TextField from '../../components/Input/TextField';


export class ChangeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      oldPassword: __DEV__ ? 'password' : '',
      password: __DEV__ ? 'password' : '',
      repPassword: __DEV__ ? 'password' : '',
    };
    this.controller = new AbortController();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} /> 
        <View style={{height: 40}} />
        <TextField  
            keyboardType='visible-password'
            placeholder=''
            label={'Ingrese Clave:'}
            secureTextEntry={true}
            value={this.state.oldPassword} 
            onChangeText={text => this.setState({oldPassword: text})}
        />  
        <View style={{height: 20}} /> 
        <TextField  
            keyboardType='visible-password'
            placeholder=''
            label={'Ingrese Nueva Clave:'}
            secureTextEntry={true}
            value={this.state.password} 
            onChangeText={text => this.setState({password: text})}
        />  
        <View style={{height: 20}} /> 
        <TextField  
            keyboardType='visible-password'
            placeholder=''
            label={'Ingrese Nuevamente La Clave:'}
            secureTextEntry={true}
            value={this.state.repPassword} 
            onChangeText={text => this.setState({repPassword: text})}
        />  
        <View style={{height: 80}} /> 
        <View style={{alignItems: 'center'}}>
          <Button
            title="GUARDAR"
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

export default ChangeScreen