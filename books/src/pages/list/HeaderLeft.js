import React, { Component } from 'react';
import { Platform, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

class HeaderLeft extends Component {

  componentDidMount() {
    console.log("DIDMOUNT headerleft:",this.props)
  }


  _onPress = () => {
    console.log('euta', this.props)
    this.props.navigation.navigate("MainNavigator")
  }

  render() {
        return (
          <View style={{marginBottom: 20 , width: 50, height: 50}} >
            <TouchableOpacity onPress={this._onPress} >
              <Image style={styles.imgRight} source={require('../img/left-arrow.png')} />       
            </TouchableOpacity>
          </View> 
       );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#FFE207',   
    },
    imgRight: {
      width: 22,
      height: 20,
      margin:10,     
  },
});

export default HeaderLeft; 