import { View, StyleSheet, Image, TextInput } from 'react-native'
import React, { Component } from 'react'
import { Text, Button } from '@rneui/themed';
import CheckBox from '@react-native-community/checkbox';
import { colors, images } from '../../utils'
import TextField from '../../components/Input/TextField';
import TextFieldDatePicker from '../../components/Input/TextFieldDatePicker';

export class RegisterScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: __DEV__ ? 'juan' : '',
      birthdate: new Date(),
      email: __DEV__ ? 'test@gmail.com' : '',
      password: __DEV__ ? 'password' : '',
      linkedinProfile: __DEV__ ? 'Juan Sanchez Roma' : '',
      terms: false,
      dateIsOpen: false
    };
    this.controller = new AbortController();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} /> 
        <View style={{height: 40}} />
        <TextField  
            placeholder=''
            label={'Nombres:'}
            value={this.state.name} 
            onChangeText={text => this.setState({name: text})}
        />  
        <View style={{height: 10}} /> 
        <TextFieldDatePicker  
            label={'Fecha de Nacimiento:'}
            value={this.state.birthdate} 
            setValue={(value) => {this.setState({birthdate: value})}}
        />  
        <View style={{height: 10}} /> 
        <TextField  
            keyboardType='email-address'
            label={'Correo:'}
            secureTextEntry={true}
            value={this.state.email} 
            onChangeText={text => this.setState({email: text})}
        />  
        <View style={{height: 10}} /> 
        <TextField  
            keyboardType='visible-password'
            label={'Contraseña:'}
            secureTextEntry={true}
            value={this.state.password} 
            onChangeText={text => this.setState({password: text})}
        />
        <View style={{height: 10}} /> 
        <TextField  
          placeholder=''
          label={'Perfil Linkedin: *opcional'}
          value={this.state.linkedinProfile} 
          onChangeText={text => this.setState({linkedinProfile: text})}
        />  
        <View style={{height: 20}} /> 
        <View style={{flexDirection: 'row', alignItems: 'center', display: 'flex', alignSelf: 'center'}}>
        <CheckBox
          disabled={false}
          tintColors={{true: 'gray', false: 'gray'}}
          value={this.state.terms}
          onValueChange={(newValue) => this.setState({terms: newValue})}
          />
          <Text style={{color: 'gray', fontSize: 22}}> Aceptar los Terminos y Condiciones</Text>
          </View>
        <View style={{height: 80}} /> 
        <View style={{alignItems: 'center'}}>
          <Button
            title="REGISTRARSE"
            onPress={() => {
              this.props.navigation.navigate('Login')
            }}
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

export default RegisterScreen