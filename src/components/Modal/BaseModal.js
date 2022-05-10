import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

const BaseModal = (props) => {
  return (
      <View>
        <Modal isVisible={props.isVisible}>
            {props.children}
        </Modal>
      </View>
  )
}

export default BaseModal

const styles = StyleSheet.create({})