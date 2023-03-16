import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const header = () => {
  return (
    <View style={styles.header}>

        <Text style={styles.text}>OpenIA Experiments</Text>
    </View>
  )
}

const styles = StyleSheet.create({
header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: 'aqua',
    display: "flex",
    alignItems: "center",
    alignContent: "center"
},
text: {
    alignSelf: "center",
    fontSize: 30,
}
})

export default header