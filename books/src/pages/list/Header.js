import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button   } from 'react-native-elements'
import { StyleSheet, Platform, Text, TextInput, View,  TouchableOpacity, FlatList, Image, ActivityIndicator} from 'react-native';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignContent: 'stretch',
                width: 400

              }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >
                </View>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} /> 
              </View>
            // <View> 
            //     <View style={styles.container}>
            //         {/* <View >
            //             <TouchableOpacity>
            //                 <Image  
            //                     style={styles.imgLeft}
            //                     source={require('../img/left-arrow.png')} />
            //             </TouchableOpacity>
            //         </View>
    
            //         <View >
            //             <TextInput 
            //                 style={styles.valor1}
            //                 maxLength = {40}                             
            //                 value={this.state.text}                     
            //                 placeholder='digite aqui...'
            //                 onChangeText={(text) => this.setState({text}) } />
            //         </View> */}
                   
            //         <View style={styles.container} >
            //             <TouchableOpacity>
            //                 <Image  
            //                     style={styles.imgRight}
            //                     source={require('../img/search.png')} />
            //             </TouchableOpacity>
            //         </View>
    
            //     </View>
            // </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      
      flexDirection: 'row',
      backgroundColor: '#FFE207', 
      //justifyContent: 'flex-end'
      alignContent: 'flex-end'
      
    },
    leftMargin: {
        paddingStart: 20,
        paddingBottom: 20        
    },
    positionLeft: {
        width: 80,        
        marginLeft: 30
    },
    imgLeft: {
        width: 22,
        height: 20
    },
    imgRight: {
        width: 22,
        height: 20
    },
    valor1: {
      //  width:230, 
        height: 20,
        fontSize: 15
        
    },
    valorcenter: {
        width:170, 
        height: 50,
       
    },
    flexEnd: {
        justifyContent: 'flex-end'
    }
    
  });


export default Header