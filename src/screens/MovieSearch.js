import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../components/StyleComp';
import TextCurrs from '../components/TextCurrs';
import MovieList from '../components/MovieList';
import APIKEY from '../Keys';

class MovieSearch extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: '',
    };
    this.apiKey = APIKEY;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`,
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({movies: [...data.results]});
      });
  };

  handleChange = (e) => {
    this.setState({searchTerm: e});
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <TextCurrs
          placeholderText="Search"
          onTermChange={this.handleChange}
          onTermSubmit={this.handleSubmit}
        />
        <MovieList
          movies={this.state.movies}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

export default MovieSearch;
