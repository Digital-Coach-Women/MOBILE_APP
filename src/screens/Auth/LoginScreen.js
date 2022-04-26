import { View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import { colors, constants, images } from '../../utils'
import { Button, Text } from '@rneui/themed';
import { signIn} from '../../store/actions/auth';
import TextField from '../../components/Input/TextField';
import { connect } from 'react-redux';

 class LoginScreen extends Component {

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
        <Text style={{fontSize: 28, fontFamily: constants.openSansBold, marginTop: 17}}>Iniciar Sesión</Text>
        <Text style={{fontSize: 16, fontFamily: constants.openSansRegular}}>bienvenido de nuevo</Text>
        <TextField 
          label={'correo'} 
          onChangeText={text => this.setState({email: text})}
          keyboardType="email-address"
          value={this.state.email} 
          style={{marginTop: 40}} /> 
        <TextField 
          label={'contraseña'} 
          keyboardType='visible-password'
          value={this.state.password} 
          onChangeText={text => this.setState({password: text})}
          secureTextEntry={true}
          style={{marginTop: 17}} /> 
        <Text 
          onPress={() => {this.props.navigation.navigate('Forget')}}
        style={{
          fontSize: 16, 
          fontFamily: constants.openSansBold, 
          color: '#9D7CFF', 
          textAlign: 'right',
          marginTop: 13, 
          marginBottom: 34}}>¿Olvidaste tu contraseña?</Text>
        <Button
            title={'Iniciar Sesión'}
            onPress={() => {
              this.login()
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
              borderRadius: 10, 
            }}
          />
          <View style={{alignItems: 'center', marginTop: 50}}>
            <Image source={images.woman_login}  style={{ resizeMode: 'contain', height: 200}} /> 
            <Text style={{fontFamily: constants.openSansRegular}}>Es bueno volver a verte 😀</Text>
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
    padding: 20
  },
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