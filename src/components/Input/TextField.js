import { StyleSheet, View, TextInput } from 'react-native'
import { Text } from '@rneui/themed';
import React from 'react'
import { colors } from '../../utils';

const TextField = ({label, onChangeText, value, placeholder = '', keyboardType = 'default', secureTextEntry = false, onKeyPress}) => {
  return (
    <View style={styles.row}>
        <Text style={styles.text}>{label}</Text>
        <TextInput
        value={value} 
        style={styles.input}
        onChangeText={onChangeText}
        onKeyPress={onKeyPress}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 22, 
        color: colors.black, 
        borderBottomColor: colors.black, 
        borderBottomWidth: 1, 
        paddingBottom: 5, 
        paddingTop: 0,
        width: 234
      },
      text: {
        fontSize: 22,
        color: colors.pink,
        fontWeight: 'bold',
        width: 115
      },  
      row: {
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 20,
      },
})

export default TextField