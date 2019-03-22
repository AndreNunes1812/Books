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
            <View style={{ paddingLeft:70, width: 280, height: 50}}>
                  
                    <TextInput 
                        style={{height:40}} 
                        placeholder="Pesquisar..."
                        placeholderTextColor="black"
                        value={this.state.text} 
                        maxLength={30}
                        onChangeText={ (text)  => this.setState({text}) }
                    />
                  
                  </View>                
            );
    }
}


const styles = StyleSheet.create({
    container: {      
      flex: 1,
      flexDirection: 'row',
    },
    imgRight: {
      width: 22,
      height: 20,
      margin:10,       
    },
});


export default HeaderInput; 