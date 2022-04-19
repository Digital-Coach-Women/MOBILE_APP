import { Text, View } from 'react-native'
import React, { PureComponent } from 'react'
import { colors } from '../../utils'
import { WebView } from 'react-native-webview';

export class CourseDetailScreen extends PureComponent {
  
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View style={{backgroundColor: colors.white, flex: 1, display: 'flex'}}>
        <WebView
          style={ {  marginTop: 20, height: 100} }
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: 'https://youtu.be/9z1IhqGQ--c' }}
        />
      </View>
    )
  }
}

export default CourseDetailScreen