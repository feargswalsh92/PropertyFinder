'use strict';


import React, { Component } from 'react'

import {
	StyleSheet,
	Image,
	View,
	TouchableHighlight,
	FlatList,
	Text,
	Alert,
} from 'react-native';

function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
    country: 'uk',
    pretty: '1',
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber,
  };
  data[key] = value;

  const querystring = Object.keys(data)
  .map(key => key + '=' + encodeURIComponent(data[key]))
  .join('&');

  return 'http://api.nestoria.co.uk/api?' + querystring;
}


import SearchResultsCell from './SearchResultsCell'
class ListItem extends React.PureComponent {
_executeQuery = (query) => {
  console.log(query);
  this.setState({ isLoading: true });
  fetch(query)
  .then(response => response.json())
  .then(json => this._handleResponse(json.response))
  .catch(error =>
     this.setState({
      isLoading: false,
      message: 'Something bad happened ' + error
   }));
};



	_onPress = () => {
		this.props.onPressItem(this.props.index);
	}

_onCellPressed = () => {
	 	Alert.alert(
  		'Alert Title',
  	'My Alert Msg',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
	
}



render() {
	const item = this.props.item;
	const price = item.price_formatted.split(' ')[0];
	return (
		<TouchableHighlight 
		    onPress = {this._onPress}
		    underlayColor = '#dddddd'>
		    <View>
		        <View style = {styles.rowContainer}>
		        <Image style ={styles.thumb} source ={{ uri: item.img_url }} />
			        <View style = {styles.textContainer}>
			            <Text style = {styles.price}>{price}</Text>
			            <Text style = {styles.title}
		                numberOfLines={1}>{item.title} </Text>
		        	</View>
		    		</View>
		   		 <View style = {styles.seperator}/>
		    	</View>
		    	</TouchableHighlight>
		       );
		       }
		    }
export default class SearchResults extends Component {
  _keyExtractor = (item, index) => index;

  _renderItem = ({item, index}) => (
       <ListItem 
          item = {item}
          index = {index}
          onPressItem = {this._onPressItem}
          title = {item.title}

		/>	     
     );

  _renderFlatListItem() {
		return (
			   <Text> In cell </Text>
			   )
	}
   _onPressItem = (index,response) => {
   	console.log("Pressed row" +index);
   	this.props.navigator.push({
      title: 'Results',
      component: SearchResultsCell,
      
      // passProps: { listings: response.listings.index } 
    });
   	// 
   	
   }

  render() {
    return (
      <FlatList
        data={this.props.listings}
        keyExtractor={this._keyExtractor}
        renderItem= {this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
	thumb: {
		width: 80,
		height: 80,
		marginRight: 10
	},
	textContainer: {
		flex: 1
	},
	seperator: {
		height: 1,
		backgroundColor: '#dddddd'
	},
	price: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#48BBEC'
	},
	title: {
		fontSize: 20,
		color: '#656565'
	},
	rowContainer: {
		flexDirection: 'row',
		padding: 10
	},
});