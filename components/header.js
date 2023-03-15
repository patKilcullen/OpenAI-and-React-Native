import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const header = () => {
  return (
    <View style={styles.header}>

        <Text>OpenIA Experiments</Text>
    </View>
  )
}

const styles = StyleSheet.create({
header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: 'coral'
}
})

export default header