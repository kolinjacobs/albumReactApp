//place code in here for ios

// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
//import header
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


//create a Component
const App = () => {
  //flex 1 needs to be added to the parent container
  //of ScrollView Component
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>

  );
};

//render the component to the device
AppRegistry.registerComponent('albums', () => App);
