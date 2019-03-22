import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image} from 'react-native';

class HeaderRight extends Component {
    
  render() {
    return (
      <View style={{width: 50, marginRight:40, height: 50}}> 
        <TouchableOpacity>
          <Image style={styles.imgRight} source={require('../img/search.png')} />       
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

export default HeaderRight; 