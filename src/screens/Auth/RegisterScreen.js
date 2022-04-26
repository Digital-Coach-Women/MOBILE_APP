import { View, StyleSheet, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Button, Text } from '@rneui/themed';
import CheckBox from '@react-native-community/checkbox';
import { colors, constants, functions, images } from '../../utils'
import TextField from '../../components/Input/TextField';
import TextFieldDatePicker from '../../components/Input/TextFieldDatePicker';
import funcitons from '../../utils/funcitons';

export class RegisterScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      names: __DEV__ ? 'juan' : '',
      fatherLastName: __DEV__ ? 'Perez' : '',
      motherLastName: __DEV__ ? 'Torres' : '',
      email: __DEV__ ? 'test@gmail.com' : '',
      password: __DEV__ ? 'password' : '',
      birthdate: functions.formatDate(new Date()),
      date: new Date(),
      linkedin: __DEV__ ? 'Juan Perez Torres' : '',
      terms: false,
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
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
        <Text style={{fontSize: 28, fontFamily: constants.openSansBold, marginTop: 17}}>Crea tu cuenta</Text>
        <Text style={{fontSize: 16, fontFamily: constants.openSansRegular}}>y se parte de nuestro equipo</Text>
        <TextField 
          label={'nombres'} 
          onChangeText={text => this.setState({names: text})}
          value={this.state.names} 
          style={{marginTop: 30}} /> 
          <TextField 
          label={'apellido paterno'} 
          onChangeText={text => this.setState({fatherLastName: text})}
          value={this.state.fatherLastName} 
          style={{marginTop: 17}} /> 
        <TextField 
          label={'apellido materno'} 
          onChangeText={text => this.setState({motherLastName: text})}
          value={this.state.motherLastName} 
          style={{marginTop: 17}} /> 
        <TextField 
          label={'correo'} 
          onChangeText={text => this.setState({email: text})}
          keyboardType="email-address"
          value={this.state.email} 
          style={{marginTop: 17}} /> 
        <TextField 
          label={'contraseña'} 
          keyboardType='visible-password'
          value={this.state.password} 
          onChangeText={text => this.setState({password: text})}
          secureTextEntry={true}
          style={{marginTop: 17}} /> 
         <TextFieldDatePicker
            label={'fecha de nacimiento'}
            value={this.state.date} 
            text={this.state.birthdate}
            setValue={(value) => {this.setState({birthdate: funcitons.formatDate(value), date: value})}}
        />  
        <TextField 
          label={'perfil de linkedin (opcional)'} 
          onChangeText={text => this.setState({linkedin: text})}
          value={this.state.linkedin} 
          style={{marginTop: 17}} /> 
        <View style={{flexDirection: 'row', marginTop: 17}}>
          <CheckBox
          disabled={false}
          tintColors={{true: colors.pinkishPurple, false: 'gray'}}
          value={this.state.terms}
          onValueChange={(newValue) => this.setState({terms: newValue})}
          />
          <Text style={{fontSize: 18,textAlignVertical:'center', fontFamily: constants.openSansSemiBold }}> Aceptar los Terminos y Condiciones</Text>
        </View>
        <Button
            title={'Registrarse'}
            onPress={() => {
              this.props.navigation.goBack()
            }}
            titleStyle={{
              color:colors.white,
              fontSize: 18, 
              marginVertical: 5,
              fontFamily: constants.openSansBold
            }}
            buttonStyle={{
              backgroundColor: colors.bluePurple
            }}
            containerStyle={{
              width: '100%',
              marginTop: 20,
              borderRadius: 10, 
            }}
          />
          <View>
            <Image source={images.register}  style={{alignSelf: 'center', resizeMode: 'contain', height: 145}} />
          </View>

      </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20
  },
})

export default RegisterScreen;