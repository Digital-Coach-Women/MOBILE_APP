import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from '@rneui/themed'
import { colors, constants } from '../../utils'

const CourseCard = ({item}) => {
    const {onPress, course, students, isFinish, image} = item
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={{backgroundColor: colors.white, elevation: 5, borderRadius: 10}}>
        <Image source={image} style={{height: 150, width: '100%', resizeMode: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10}} /> 
        <View style={{flexDirection: 'row', padding: 10, justifyContent: 'space-between'}}>
            <View>
                <Text style={{fontFamily: constants.openSansSemiBold}}>{students} estudiantes</Text>
                <Text style={{fontFamily: constants.openSansBold, fontSize: 18}}>{course}</Text>
            </View>
            <Text style={{textAlignVertical: 'bottom', fontFamily:constants.openSansBold, fontSize: 14, color: '#4358FF'}} > {isFinish ? 'Terminado': ''}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CourseCard

const styles = StyleSheet.create({})