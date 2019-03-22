import React, { Component } from 'react'
import { StyleSheet, Platform, Text, TextInput, View,  TouchableOpacity, FlatList, Image, ActivityIndicator} from 'react-native';


import HeaderLeft from './HeaderLeft'

import HeaderRight from './HeaderRight'
import HeaderInput from './HeaderInput'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    componentDidMount() {
      console.log('Header didi:',this.props)
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-start'
                // justifyContent: 'space-around',
                // alignContent: 'stretch',
                // width: 400

              }}>
              <View style={{width: 400, flex: 1 , flexDirection: 'row', justifyContent: 'space-between'}} >
      
                {/* <HeaderLeft  navegacao={this.props} />   */}
                {/* <View style={{marginLeft:40,width: 42, backgroundColor: 'gree'}}/> */}
                {/* <HeaderInput />
                <HeaderRight /> */}

              </View>
            </View>            
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#FFE207', 
      alignContent: 'flex-end'      
    },
    
  });


export default Header