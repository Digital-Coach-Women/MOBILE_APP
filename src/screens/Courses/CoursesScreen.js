import React, { Component } from 'react'
import { View , StyleSheet, Image, FlatList} from 'react-native'
import { Text } from '@rneui/themed'
import { colors, constants, images } from '../../utils'
import CourseCard from '../../components/Option/CourseCard'

const options = [
  {course: 'Diseño UX - Basico', students: 20, isFinish: true, image: images.ux_cover},
  {course: 'Diseño UX - Basico', students: 20, isFinish: false, image: images.crm_cover},
]

export class CoursesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.controller = new AbortController();
  }

  goToICourses(){
    this.props.navigation.navigate('ICourse')
  }

  renderItem = ({item, index, array}) => {
    return (
      <CourseCard key={index} item={{...item, onPress: () => {this.props.navigation.navigate('CourseDetail')}}} /> 
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 22, fontFamily: constants.openSansBold, marginHorizontal: 20, marginTop: 20}}>Mis Cursos</Text>
        <FlatList 
          contentContainerStyle={{paddingHorizontal: 20, paddingVertical:20 }}
          ItemSeparatorComponent={() => <View style={{height: 20}} /> }
          renderItem={this.renderItem}
          data={options}
          keyExtractor={(item, index) => index}
        /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex:1, 
    padding: 0,
    display: 'flex'
  },
  title: {
    color: colors.pourple,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },

})

export default CoursesScreen