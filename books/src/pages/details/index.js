import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DetailScreen extends Component {

    static navigationOptions = {
        title: null
    }
    render() {
        const {navigate} = this.props.navigation
        return (
        <View style={styles.container}>
            <Text style={styles.buttonText}>Detalhes do Book</Text>
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
    color: '#549AE6',
    fontWeight: 'bold',
    fontSize: 15
  }
});
