import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';

export default class extends React.Component {

  state = {
    isLoading: true
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {coords: latitude, longitude} = await Location.getCurrentPositionAsync();
      this.setState({isLoading: false});
      // Todo: Сделать запрос к API
    } catch (error){
      Alert.alert('Не могу определить местоположение', 'очень грустно :(');
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render () {
    const {isLoading} = this.state;
    
    return (
      isLoading ? <Loading /> : null
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    // flexDirection: 'row',
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
  // },
  // yellowView: {
  //   flex: 1,
  //   backgroundColor: "yellow"
  // },
  // blueView: {
  //   flex: 3,
  //   backgroundColor: 'blue'
  // }
  // text: {
  //   color: 'white',
  //   fontSize: 24
  // }
// });
