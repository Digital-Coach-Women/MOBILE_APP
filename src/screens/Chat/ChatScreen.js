import React, { Component } from 'react'
import { View , StyleSheet, Image, FlatList, TouchableOpacity, ScrollView} from 'react-native'
import { Input, Text } from '@rneui/themed'
import { colors, constants, images } from '../../utils'

export class ChatScreen extends Component {
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
        <Text style={{fontSize: 22, fontFamily: constants.openSansBold, marginBottom:10, marginHorizontal: 20, marginTop: 20}}>Chats</Text>
        <ScrollView>
          <View style={{paddingHorizontal: 20}}>
        <BotOption onPress={() => this.props.navigation.navigate('ChatSession')}/> 
        <View style={{height: 5, borderRadius: 30, backgroundColor: colors.tealishBlue, marginTop: 10, alignSelf: 'center', width: 200}} /> 
        <Option onPress={() => this.props.navigation.navigate('ChatSession')}/> 
        <Option onPress={() => this.props.navigation.navigate('ChatSession')}/> 
        <Option onPress={() => this.props.navigation.navigate('ChatSession')}/> 
        <Option onPress={() => this.props.navigation.navigate('ChatSession')}/> 
        <Option onPress={() => this.props.navigation.navigate('ChatSession')}/> 
        <Option onPress={() => this.props.navigation.navigate('ChatSession')}/> 
        <Option onPress={() => this.props.navigation.navigate('ChatSession')}/> 
        <Option onPress={() => this.props.navigation.navigate('ChatSession')}/> 
        <Option onPress={() => this.props.navigation.navigate('ChatSession')}/> 
        <Option onPress={() => this.props.navigation.navigate('ChatSession')}/> 
        <View style={{height: 80}} /> 
        </View>
        </ScrollView>        
      </View>
    )
  }
}

const Option = ({onPress}) => {
  return (
    <>
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={{backgroundColor: colors.white, flexDirection: 'row', justifyContent:'space-between', padding: 15, marginTop:10, borderRadius: 10, elevation: 5}}>
      <View style={{flexDirection: 'row'}}>
        <Image source={images.woman_chat} style={{height: 50, width: 50 , resizeMode: 'contain'}} /> 
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 18, fontFamily: constants.openSansBold, marginLeft: 10}}>Kaiti Mitchel</Text>
          <Text style={{fontSize: 14, fontFamily: constants.openSansRegular, marginLeft: 10}}>Gracias por la ayuda ......</Text>
        </View>
      </View>
      <Text style={{fontSize: 14, fontFamily: constants.openSansRegular, marginLeft: 10, textAlignVertical: 'bottom'}}>10:20 AM</Text>
    </TouchableOpacity>
    </>
  )
}

const BotOption = ({onPress}) => {
  return (
    <>
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={{backgroundColor: colors.white, flexDirection: 'row', justifyContent:'space-between', padding: 15, marginTop:10, borderRadius: 10, elevation: 5}}>
      <View style={{flexDirection: 'row'}}>
        <Image source={images.alice_bot} style={{height: 50, width: 50 , resizeMode: 'contain'}} /> 
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 18, fontFamily: constants.openSansBold, marginLeft: 10}}>Kaiti Mitchel</Text>
          <Text style={{fontSize: 14, fontFamily: constants.openSansRegular, marginLeft: 10}}>Bot asistente</Text>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
      <Image source={images.mail} style={{height: 30, width: 30 , resizeMode: 'contain', alignSelf: 'flex-end'}} /> 
      </View>
    </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex:1, 
    // padding: 20,
    display: 'flex',
  },
  title: {
    color: colors.pourple,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
})

export default ChatScreen