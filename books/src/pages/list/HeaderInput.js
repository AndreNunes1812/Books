import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button   } from 'react-native-elements'
import { Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Image, ActivityIndicator} from 'react-native';


class HeaderInput extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    
    render() {
        return (
            <View style={styles.principal}>
                <TextInput 
                    style={styles.alinharTextLeft}
                    maxLength = {40} 
                    value={this.state.text}                     
                    placeholder='digite aqui...'
                    onChangeText={(text) => this.setState({text}) } />
             </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {      
      flex: 1,
      flexDirection: 'row',
      
  
    },
    principal: {
      
    },
    alinharTextLeft: {
 
      
    }
    });


export default HeaderInput; 