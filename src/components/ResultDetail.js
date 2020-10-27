import React from 'react'
import {View, Text, Image} from 'react-native';
import styles from './StyleComp';

const ResultsDetail = ({result}) => {
  const imageSource = 'https://image.tmdb.org/t/p/w500' + result.poster_path;
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{uri: imageSource}}
        style={{
          height: 400,
          width: 278,
          borderRadius: 5,
          marginHorizontal: 10,
          marginTop: 5,
        }}
      />
      <Text style={styles.nameStyle}>{result.title}</Text>
      <Text style={styles.nameStyle}>
        Rating: {result.vote_average}/10 , {result.vote_count} reviews
      </Text>
    </View>
  );
}

export default ResultsDetail;
