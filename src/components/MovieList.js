import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail';

const MovieList = ({movies, navigation}) => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(result) => result.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('MovieDetail', {id: item.id})}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default MovieList;
