'use strict'
import React, { Component }from 'react' ;

import { 
AppRegistry,
StyleSheet,
Text,
View,
NavigatorIOS, //Comma may be unnecessary
} from 'react-native' ;

import SearchPage from './SearchPage';

// var React = require('react');
// var ReactNative = require('react-native')
// var SearchPage = require('./SearchPage');


const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565' ,
    marginTop: 65,
  },

  text: {
    color: 'black',
    backgroundColor: '#ffffff', 
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});




//  class SearchPage extends Component {
//   render() {
//     return <Text style={styles.description}>Search for houses to buy! (Again)</Text>;
//   }
// }

class PropertyFinder extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}



AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder)



