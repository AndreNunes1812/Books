import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ActivityIndicator} from 'react-native';

import { loadDataRequest, loadDataFooter } from '../../actions'

class ListScreen extends Component {

    constructor(props) {
      super(props)

      this.state = {
        data: [],
        totalElements: 0,
        inputQuery: 'oracle database',
        maxResults: 0,
        size: 10,
        loading: false,
        error: null,
        refreshing: false,
      }
    }

    static navigationOptions = {
        title: null
    }

    componentDidMount() {    

      console.log('DidMount')    
      
      this.loadBookApi(this.state.inputQuery, this.state.maxResults + this.state.size );     
      
    }

    loadBookApi = (inputQuery, maxResults, refreshing, loading) => {

     // if (this.refreshing && !this.loading) return
     // if (!this.refreshing && this.loading) return
           

//      this.setState({...this.state, refreshing : refreshing, loading: loading})
      this.props.bookClick(inputQuery, maxResults);      
 
 //     this.setState({...this.state, refreshing : false, loading: true})

    }

    handleRefresh = () => {
      console.log('asdasdasdasdas')
      this.setState({
        refreshing: true, loading: false
      }, () => {
        this.setState({ refreshing: false, loading: false, maxResults: this.state.maxResults},()=>{
          this.loadBookApi(this.inputQuery, this.state.maxResults)
        })
      })
    }
    

    handleLoadMore = () => {
      console.log('Handler More:', this.state)
      
      if(!this.state.loadind){
        return 
      }

      console.log('Handler More passou')
      this.setState({ refreshing: false, loading: true}, ()=> {
        this.loadBookApi(this.inputQuery, this.state.maxResults  + this.state.size , false , true)
        this.setState({ maxResults: this.state.maxResults  + this.state.size })
      })
    }

    renderFooter = () => {
      console.log('FOOOOOOTER:',this.state.loading)

      if (!this.state.loading) return null

      console.log('Baicando o asdasdasdsa')
      //this.setState({ refreshing: false, loading: true}, ()=> {this.props.bookClick(this.state.inputQuery, this.state.maxResults)})
      this.BookFooter()
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
            ListFooterComponent={ this.renderFooter}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
            onEndReached={this.handleLoadMore}

            onEndThreshold={0}
            
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
    justifyContent: 'space-between'  

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
  }
});

const mapStateToProps = state => {
  // console.log('retorno sate:', state)
  
  return {
    bookList: state
  }
}

const mapDispatchToProps = dispatch => {  
 
  return {
    bookClick: (inputQuery, maxResults) => dispatch(loadDataRequest(inputQuery, maxResults)),
    bookFooter: () => dispatch(loadDataFooter)
  }
}  

export default connect(mapStateToProps,mapDispatchToProps)(ListScreen);