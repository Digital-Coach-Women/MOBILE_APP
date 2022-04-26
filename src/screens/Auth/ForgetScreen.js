import { View, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import { colors, constants, images } from '../../utils'
import { Button, Text } from '@rneui/themed';
import TextField from '../../components/Input/TextField';

export class ForgetScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: __DEV__ ? 'test@gmail.com' : '',
    };
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
        <Text style={{fontSize: 28, fontFamily: constants.openSansBold, marginTop: 17}}>Olvide mi contraseña</Text>
        <Text style={{fontSize: 16, fontFamily: constants.openSansRegular}}>Recibiras un correo para que puedas restablecer tu contraseña</Text>
        <TextField 
          label={'correo'} 
          onChangeText={text => this.setState({email: text})}
          keyboardType="email-address"
          value={this.state.email} 
          style={{marginTop: 40}} /> 
        <Button
            title={'Enviar'}
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
          <View style={{height: constants.height, position: 'absolute',justifyContent: 'flex-end', alignItems: 'center'}}>
            <Image source={images.forget} style={{resizeMode: 'cover', alignSelf: 'center', width: constants.width, height: 300}} />
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

export default ForgetScreen;