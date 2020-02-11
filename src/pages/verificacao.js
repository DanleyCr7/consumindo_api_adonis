import React, { Component } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from 'firebase'
import gitLab from '../../assets/git.png';
// import { Container } from './styles';

export default class pages extends Component {
  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAcQ8jTZK6PPeQRKaO2txOmvpbRG7AqHSU",
      authDomain: "series-3e08b.firebaseapp.com",
      databaseURL: "https://series-3e08b.firebaseio.com",
      projectId: "series-3e08b",
      storageBucket: "",
      messagingSenderId: "779861796924",
      appId: "1:779861796924:web:da506c2ada262d605a3b39"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.replace(user ? 'home' : 'Login')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={gitLab}
        // aspectRatio={1}
        // resizeMode='stretch'
        />
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252C4A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 199,
    height: 155,
    marginBottom: 10
  },

})