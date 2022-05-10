import { View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import React, { Component } from 'react'
import { colors, constants, images } from '../../utils'
import { Button, Input, Text } from '@rneui/themed';
import {  } from 'react-native-gesture-handler';
import ChatCard from '../../components/Card/ChatCard';

const chats = [
    {isYou: true, message: 'Hola Como estas....'},
    {isYou: false, message: 'Hola Como estas....'},
    {isYou: false, message: 'Hola Como estas....'},
    {isYou: true, message: 'Hola Como estas....'},
    {isYou: true, message: 'Hola Como estas....'},
]

export class ChatSessionScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
        message: ''
    };
  }

  renderItem = ({item, index, array}) => {
    return (
      <ChatCard key={index} item={item} /> 
    )
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
        <View style={{flexDirection: 'row', marginTop: 17, marginBottom: 20}}>
            <Image source={images.woman_chat} style={{width: 50, height: 50, resizeMode: 'contain'}} /> 
            <Text style={{fontSize: 28, fontFamily: constants.openSansBold, textAlignVertical: 'center'}}>Kaiti Mitchel</Text>  
        </View>
        <FlatList 
          contentContainerStyle={{paddingHorizontal: 20, paddingVertical:20 }}
          ItemSeparatorComponent={() => <View style={{height: 5}} /> }
          renderItem={this.renderItem}
          data={chats}
          keyExtractor={(item, index) => index}
        /> 
        <View style={{flexDirection: 'row'}}>
        <View style={{elevation: 5, backgroundColor: colors.white, borderRadius: 10, flex:1}}>
          <Input 
          inputContainerStyle={{borderBottomWidth: 0, paddingBottom: 0, paddingTop: 20, height: 30, paddingLeft: 0}}
          value={this.state.message} placeholder='Escribe tu mensaje' onChangeText={text => this.setState({message: text})}  />
        </View>
        <View style={{width: 10}} />
        <TouchableOpacity onPress={() => {}} activeOpacity={1} style={{backgroundColor: colors.white, elevation: 5, borderRadius: 10, justifyContent: 'center', padding: 10}}>
            <Image source={images.send} style={{width: 30, height: 30, resizeMode: 'contain'}}/>
            </TouchableOpacity> 
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
  imageEnable: {
    resizeMode: 'contain', width: 40, height: 40
  },
  imageDisable: {
    resizeMode: 'contain', width: 40, height: 40, tintColor: colors.grayLight
  }
})

export default ChatSessionScreen;