import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, constants } from '../../utils'

const ChatCard = ({item}) => {
    const {isYou, message} = item
  return (
    <View style={{flexDirection: 'row', justifyContent:isYou ? 'flex-end' :'flex-start'}}>
        <View style={{width:250, backgroundColor: isYou ? colors.tealishBlueIntense : colors.tealishBlue, padding: 10, borderRadius: 10 }}>
          <Text style={{fontFamily: constants.openSansSemiBold, fontSize: 18, flexWrap: 'wrap'}}>{message}</Text>
        </View>
    </View>
  )
}

export default ChatCard

const styles = StyleSheet.create({})