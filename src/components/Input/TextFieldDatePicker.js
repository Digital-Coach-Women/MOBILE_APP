import { StyleSheet, View } from 'react-native'
import { Text } from '@rneui/themed';
import React from 'react'
import { colors } from '../../utils';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const TextFieldDatePicker = ({label,  value, setValue}) => {

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setValue(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
          style: {
            shadowColor: '#fff',
            shadowRadius: 0,
            shadowOpacity: 1,
            shadowOffset: { height: 0, width: 0 },
          },
          value: value,
          onChange,
          mode: currentMode,
          is24Hour: true
        })
      };

    const showDatepicker = () => {
    showMode('date');
    };

    return (
        <View style={styles.row}>
            <Text style={styles.text}>{label}</Text>
            <Text
            style={styles.input}
            onPress={showDatepicker}
            >{value.toString()}</Text>
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

export default TextFieldDatePicker