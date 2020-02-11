import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  AppRegistry,
  // AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  TextInput,
  // AlertIOS
} from 'react-native';

var STORAGE_KEY = 'id_token';

const options = {};

export default class pages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  // async _onValueChange(item, selectedValue) {
  //   try {
  //     await AsyncStorage.setItem(item, selectedValue);
  //   } catch (error) {
  //     console.log('AsyncStorage error: ' + error.message);
  //   }
  // }

  storeData = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', 'stored value')
    } catch (e) {
      // saving error
    }
  }

  // async _getProtectedQuote() {
  //   var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
  //   fetch("http://localhost:3001/api/protected/random-quote", {
  //     method: "GET",
  //     headers: {
  //       'Authorization': 'Bearer ' + DEMO_TOKEN
  //     }
  //   })
  //     .then((response) => response.text())
  //     .then((quote) => {
  //       Alert.alert(
  //         "Chuck Norris Quote:", quote)
  //     })
  //     .done();
  // }

  async _userLogout() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      Alert.alert("Logout Success!")
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  async  _userSignup() {
    // if validation fails, value will be null
    await fetch("http://10.10.252.168:3333/user", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'Danrley1',
        email: this.state.email,
        password: this.state.password,
      })
    })
      .then((response) => response.json())
      .then((responseData) => {
        this._onValueChange(STORAGE_KEY, responseData.token),
          console.log(responseData)
      })
      .done();
  }


  async _userLogin() {
    // console.log(STORAGE_KEY)
    await fetch("http://10.10.252.168:3333/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
      .then((response) => response.json())
      .then(async (responseData) => {
        // console.log(responseData.token)
        if (responseData.error != null) {
          Alert.alert('Falha', 'Sua senha está incorreta')
        } else {
          // await this._onValueChange(STORAGE_KEY, responseData.token)
          await AsyncStorage.setItem('token', responseData.token)
          await this.props.navigation.navigate('Tarefa')
          // console.log(responseData.token)
        }

      })
      .done();
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Signup/Login below for Chuck Norris Quotes!</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.View}>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='Digite seu usuario'
              placeholderTextColor='#000'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View style={styles.View}>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='*******'
              placeholderTextColor='#000'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </View>
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.button} onPress={() => this._userSignup()} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this._userLogin()} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this._userLogout()} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight onPress={this._getProtectedQuote} style={styles.button}>
            <Text style={styles.buttonText}>Get a Chuck Norris Quote!</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});
