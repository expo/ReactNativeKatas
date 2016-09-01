import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Ionicons as Icon } from '@exponent/vector-icons'
import colors from '@/runner/colors'



// Filling and Centering
//
// Your goal is to make content dead center, and make background fill everything
// Hint: You have to combine multiple properties
//

const FillAll = (props) => {
  return (
    <View style={styles.container}>
      <Icon style={{color:'white'}} name='ios-bulb-outline' size={120} />
    </View>
  )
}


// TODO: Fix the styles here
//
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[0],
  },
  text:{
    color: 'white',
    textAlign:'center'
  }
});





FillAll.displayName = 'FillAll'
export default FillAll

