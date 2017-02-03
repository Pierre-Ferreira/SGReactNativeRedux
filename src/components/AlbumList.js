import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] }; //Initializing, not modification!

  componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            this.setState({ albums: response.data }); // 'setState' is a method
                                                      // from Component class.
                                                      // Always us 'setState'
                                                      // to modify state! DO NOT
                                                      // use 'this.state' to
                                                      // change state.
          }
        );
  }

  renderAlbums() {
    return this.state.albums.map(album => {
      return (
        <AlbumDetail key={album.title} album={album} />
      );
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
