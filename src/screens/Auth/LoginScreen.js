import { View, StyleSheet, Image, TextInput } from 'react-native'
import React, { Component } from 'react'
import { colors, images } from '../../utils'
import { Button } from '@rneui/themed';
import { signIn} from '../../store/actions/auth';
import TextField from '../../components/Input/TextField';
import { connect } from 'react-redux';

export class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: __DEV__ ? 'test@gmail.com' : '',
      password: __DEV__ ? 'password' : '',
    };
    this.controller = new AbortController();
  }

  login(){
    this.props.signIn('token')
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
        <View style={{height: 20}} /> 
        <TextField  
            keyboardType='visible-password'
            placeholder='INGRESE CLAVE'
            label={'Contraseña:'}
            secureTextEntry={true}
            value={this.state.password} 
            onChangeText={text => this.setState({password: text})}
        />  
        <View style={{height: 80}} /> 
        <View style={{alignItems: 'center'}}>
          <Button
            title="OLVIDE MI CLAVE"
            onPress={() => {
              this.props.navigation.navigate('Forget')
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
          <Button
            title="INGRESAR"
            onPress={() => {
              this.login()
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
          <Button
            title="REGISTRARSE"
            onPress={() => {
              this.props.navigation.navigate('Register')
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


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (token) => dispatch(signIn(token)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);