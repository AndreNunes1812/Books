import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'FotonTech',
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1
        }
    }
    render() {
        const {navigate} = this.props.navigation
        console.log('Navegacao:', this.props.navigation)
        return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate('list', { otherParam: 'TEDTE do andre'}, this.props.navigation)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>BOOKS on-line</Text>
                </View>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE207',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#FFE207'
  },
  buttonText: {
    padding: 20,
    color: '#222222',
    fontWeight: 'bold',
    fontSize: 15
  }
});
