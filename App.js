import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MovieSearch from './src/screens/MovieSearch';
import MovieDetail from './src/screens/MovieDetail';
import BrowseMovies from './src/screens/BrowseMovies';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Stack.Navigator initialRouteName="MovieSearch">
      <Stack.Screen
        name="MovieSearch"
        component={MovieSearch}
        options={{
          title: 'Search a movie',
          headerStyle: {
            backgroundColor: '#FFD700',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            fontStyle: 'italic',
          },
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          title: 'Movie Details',
          headerStyle: {
            backgroundColor: '#FFD700',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            fontStyle: 'italic',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Search Movies" component={Root} />
        <Drawer.Screen name="Browse" component={BrowseMovies} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
