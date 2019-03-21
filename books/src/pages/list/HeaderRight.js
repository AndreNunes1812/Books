import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button   } from 'react-native-elements'
import { Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Image, ActivityIndicator} from 'react-native';


class HeaderRight extends Component {

    
    render() {
        return (
            <View style={styles.container}>
               <Icon style={styles.alinharTextRight}
                    name='arrow-left'
                    size={18}
                    onPress={()=> console.log('érwerewrwerwe')}
               />
             </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
       
    },
    alinharTextRight: {  
    },
  });


export default HeaderRight; 