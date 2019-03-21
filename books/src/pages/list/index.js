import React, {Component} from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Platform, Text, TextInput, View, Button, TouchableOpacity, FlatList, Image, ActivityIndicator} from 'react-native';

import Header from './Header'


import { loadDataRequest } from '../../actions'

class ListScreen extends Component {

    constructor(props) {
      super(props)

      this.state = {
        data: [],
        totalElements: 0,
        inputQuery: null                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ,
        maxResults: 0,
        size: 10,
        numeroBusca: 40,
        loading: false,
        refreshing: false,
        error: null,
      }
    }

    static navigationOptions = {
        title: null, 
        headerLeft: (
          <View >  
            <Header />
          </View>
        )      
        
    }

    componentDidMount() {    
     console.log('DidMount')  
     this.setState({ maxResults: 0, loading: false, refreshing: false})  
     this.updateBookApi();            
    }

    updateBookApi = () => {
      console.log('updatateBook 0')    
      
      this.setState({maxResults: this.state.maxResults + this.state.size, refreshing: true  }, () => {
        console.log('updatateBook 1',this.state.inputQuery,this.state.maxResults)    
        this.loadBookApi(this.state.inputQuery, this.state.maxResults);
        this.setState({ refreshing: false, loading: true })
      })
    }

    loadBookApi = (nameQuery, qtdMaxResults, refreshing) => {
      this.props.bookClick(nameQuery, qtdMaxResults);      
    }

    handleRefresh = () => {
      console.log('REFRESH:',this.state.refreshing, this.state.loading)

      // if(this.state.refreshing) return
      this.setState({ refreshing: true} , () => {
        console.log('updatateBook 3',this.state.inputQuery,this.state.maxResults)    
        this.loadBookApi(this.state.inputQuery, this.state.maxResults);
        this.setState({ refreshing: false, loading: true })
      })
      
    }
 
    handleLoadMore = () => {

      console.log('LOADMORE 1:',this.state.refreshing, this.state.loading)

      const { maxResults , numeroBusca } = this.state

      console.log('STATE:', this.state)

      if (maxResults === numeroBusca ) {
        console.log('maxResults:',maxResults,numeroBusca)
        this.setState({ loading: false})
        return
      }
      this.updateBookApi()
    }

    renderFooter = () => {
      console.log('FOOOOOOTER:',this.state.loading, this.state.maxResults, this.state.numeroBusca)
      //this.props.bookFooter(!this.state.refreshing,!this.state.loading);
   //   this.updateBookApi();
   
      return ( 
        <View style={styles.loader}>
            <ActivityIndicator size="large"/>                 
        </View>
       )
    }

    render() {
        const {navigate} = this.props.navigation
        console.log('BookList:',this.props.bookList.list.data)

        return (
        <View style={styles.container}>
          
          <FlatList
            numColumns={3}            
            data={this.props.bookList.list.data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
            
              <View key={item.id} style={styles.container}> 
                {
                  item.imageLinks !== null ? <Image  style={styles.image}  source={{ uri: item.imageLinks }}/> : null              
                }
              </View>
            )
            }
            ListFooterComponent={ this.state.loading ? this.renderFooter() : false }
            refreshing={ false}
            onRefresh={ this.handleRefresh}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.1}
            
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
    justifyContent: 'space-between' ,
    padding:5 

  },
  view: {
    padding: 20
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 150,    
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    padding: 20,    
    backgroundColor: '#FFE207',
    fontWeight: 'bold',
    fontSize: 15
  },
  marginIOS: {
    marginRight: 20,    
  }
});

const mapStateToProps = state => {
  return {
    bookList: state
  }
}

const mapDispatchToProps = dispatch => {  
 
  return {
    bookClick: (inputQuery, maxResults, refresh) => dispatch(loadDataRequest(inputQuery, maxResults, refresh)),
  
  }
}  

export default connect(mapStateToProps,mapDispatchToProps)(ListScreen);