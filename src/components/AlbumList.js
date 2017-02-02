import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  Constructor() {
    super(props)
    let state = {albums: []};
  }

  componentWillMount() {
      console.log('YESSSSSS!!!!');
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
          console.log('Response:', response);
          this.setState(albums: response.date)
        }
        );
  }

  render() {
    return (
      <View>
        <Text>Album list!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
