import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import styles from '../components/StyleComp';
import APIKEY from '../Keys';

const MovieDetail = ({navigation, route}) => {
  const id = route.params.id;
  const apiKey = APIKEY;
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [image, setImage] = useState('');
  const [overview, setOverview] = useState('');
  const [avgrating, setAvgRating] = useState('');
  const [totalVotes, setTotalVotes] = useState('');
  const [website, setWebsite] = useState('');

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`,
    )
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.original_title);
        setTagline(data.tagline);
        setImage('https://image.tmdb.org/t/p/w500' + data.poster_path);
        setOverview(data.overview);
        setAvgRating(data.vote_average);
        setTotalVotes(data.vote_count);
        setWebsite(data.homepage);
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.viewStyle}>
        <Text style={styles.nameStyle}>{title}</Text>
        <Image
          source={{uri: image}}
          style={{
            height: 400,
            width: 278,
            borderRadius: 5,
            marginHorizontal: 10,
            marginTop: 5,
            alignSelf: 'center',
          }}
        />
        <Text style={styles.textStyle}>{tagline}</Text>
        <Text style={styles.textStyle}>Overview: {overview}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(website)}>
          <Text style={styles.textStyle}>Website: {website} </Text>
        </TouchableOpacity>
        <Text style={styles.nameStyle}>
          Rating: {avgrating} for {totalVotes} number of votes.{' '}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;
