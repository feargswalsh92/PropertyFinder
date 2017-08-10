'use strict';

import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
} 
from 'react-native'





export default class SearchResultsCell extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			text: 'Hello world'
		};
	}
    _keyExtractor = (item,index) => index;
	renderFlatListItem(item) {
		return (
			   <Text> In cell </Text>
			   )
	}

_onPress = () => {
	this.props.onPressItem(this.props.index)
}

	// x

	render() {
		return (
		<View>
		    <Text>
		    		Hello world 
		    	this.renderFlatListItem(item)
		    
	       </Text>
	    </View>
	   
	    );
	}
	
}
 
