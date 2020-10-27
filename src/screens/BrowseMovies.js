import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';
import styles from '../components/StyleComp';
import MovieList from '../components/MovieList';
import APIKEY from '../Keys';

class BrowseMovies extends Component {
  constructor() {
    super();
    this.state = {
      genre: '',
      movies: [],
    };
    this.apiKey = APIKEY;
  }

  apiDiscover = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=${this.state.genre}`,
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({movies: [...data.results]});
      });
  };
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.headStyle}>Browse Movies!</Text>
        <Text style={styles.textStyle}> Select your favorite genre: </Text>
        <Picker
          selectedValue={this.state.genre}
          style={styles.pickerStyle}
          onValueChange={(itemValue) => this.setState({genre: itemValue})}>
          <Picker.Item label="Genre:" value="0" />
          <Picker.Item label="Action" value="28" />
          <Picker.Item label="Adventure" value="12" />
          <Picker.Item label="Animation" value="16" />
          <Picker.Item label="Comedy" value="35" />
          <Picker.Item label="Crime" value="80" />
          <Picker.Item label="Documentary" value="99" />
          <Picker.Item label="Drama" value="18" />
          <Picker.Item label="Family" value="10751" />
          <Picker.Item label="Fantasy" value="14" />
          <Picker.Item label="History" value="36" />
          <Picker.Item label="Horror" value="27" />
          <Picker.Item label="Music" value="10402" />
          <Picker.Item label="Mystery" value="9468" />
          <Picker.Item label="Romance" value="10749" />
          <Picker.Item label="Science Fiction" value="878" />
          <Picker.Item label="Thriller" value="53" />
          <Picker.Item label="War" value="10752" />
          <Picker.Item label="Western" value="37" />
        </Picker>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.apiDiscover}>
          <Text>Search!!</Text>
        </TouchableOpacity>
        <MovieList
          movies={this.state.movies}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

export default BrowseMovies;
