import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button   } from 'react-native-elements'
import { Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Image, ActivityIndicator} from 'react-native';


class HeaderLeft extends Component {

    
    render() {
        return (
            <View style={styles.container}>
               <Icon style={styles.alinharTextLeft}
                    name='arrow-left'
                    size={20}
                    onPress={()=> console.log('érwerewrwerwe')}
               />
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
    alinharTextLeft: {                  
      marginLeft: 15,            
     
    },
  });


export default HeaderLeft; 