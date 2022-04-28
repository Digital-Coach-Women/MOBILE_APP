import { View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import React, { Component } from 'react'
import { colors, constants, images } from '../../utils'
import { Button, Text } from '@rneui/themed';
import PartnerCard from '../../components/Option/PartnerCard';


const partners  = [
    {name: 'Mary Jane', email: 'maryjane@gmail.com'},
    {name: 'Mary Jane', email: 'maryjane@gmail.com'},
    {name: 'Mary Jane', email: 'maryjane@gmail.com'},
    {name: 'Mary Jane', email: 'maryjane@gmail.com'},
    {name: 'Mary Jane', email: 'maryjane@gmail.com'},
    {name: 'Mary Jane', email: 'maryjane@gmail.com'},
    {name: 'Mary Jane', email: 'maryjane@gmail.com'},
    {name: 'Mary Jane', email: 'maryjane@gmail.com'},
    {name: 'Mary Jane', email: 'maryjane@gmail.com'},
    {name: 'Mary Jane', email: 'maryjane@gmail.com'},
    {name: 'Mary Jane', email: 'maryjane@gmail.com'},
]
export class CParticipantsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItem = ({item, index, array}) => {
    return (
      <PartnerCard key={index} item={{...item, onPress: () => {this.props.navigation.navigate('CourseDetail')}}} /> 
    )
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={{marginHorizontal: 20, marginTop: 20}}>
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
            <Text style={{fontSize: 28, fontFamily: constants.openSansBold, marginTop: 17}}>Compañeras</Text>  
            <Text style={{fontSize: 16, fontFamily: constants.openSansSemiBold}}>20 matriculadas</Text>  
            <Text style={{fontSize: 16, fontFamily: constants.openSansSemiBold, marginBottom: 10}}>Curso: Diseño UX - Basico</Text>  
            </View>
            <FlatList
                contentContainerStyle={{paddingHorizontal: 20, paddingVertical:10 }}
                ItemSeparatorComponent={() => <View style={{height: 20}} /> }
                renderItem={this.renderItem}
                data={partners}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    display: 'flex',
  },
})

export default CParticipantsScreen;