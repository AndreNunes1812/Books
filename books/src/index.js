import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './pages/home'
import DetailScreen from './pages/details';
import ListScreen from './pages/list'

const MainNavigator = createStackNavigator({
 
  Home: {
    screen: HomeScreen ,   
  },
  list: {
          screen: ListScreen,
        },
  Detail: {screen: DetailScreen}
},{
  defaultNavigationOptions: {
    headerTintColor: '#222222',
    headerStyle: {
      backgroundColor: '#FFE207',
    }         
  }
   

})


const App = createAppContainer(MainNavigator)

export default App