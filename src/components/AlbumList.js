import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
//class based component
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  //this cretaes instial state for the component
  //after this is created the component get a property called this.state
  //state is a plane javascript object
  state = { albums: [] };
  //this is a lifecycle method that is called  anytime the component is about to be rendered
  componentWillMount() {
    //makes a get request to to an api
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
      //above is a call back function that runs when a the promise is returned for the api
      //then the state is set to an array filled with objects
      //setting the state will also re-render the component and call the render method
  }

  renderAlbums() {
    //map is an array helper
    //map works by passing in a function
    //then the function will be called for every item inside of the array
    return this.state.albums.map(album =>
      <AlbumDetail album={album} key={album.title} />
    );
    //a prop is passed down by adding it into the jsx props.album
      //elements inside of an array should have a unique key
  }
//command D for debug menu
  render() {
    console.log(this.state);
    //
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
