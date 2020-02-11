import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import gitLab from '../../assets/git.png';
const { width, height } = Dimensions.get('window');

import firebase from 'firebase';
// import console from ('console');
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mail: '',
      senha: '',
      confSenha: '',
      isLoading: false,
      message: '',
    }
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    });
  }

  tryCreate() {
    this.setState({ isLoading: true })
    const { mail, senha } = this.state

    firebase.auth()
      .createUserWithEmailAndPassword(mail,
        senha)
      .then(user => {
        Alert.alert(
          'Sucesso',
          'Usuario cadastrado com sucesso',
          /* Teste */
        );
        // this.setState({ message: 'Sucesso' })
        this.setState({ isLoading: false })
        this.props.navigation.navigate('Login')
        // console.log('usuario autenticado')
      })
      .catch(error => {
        Alert.alert(
          'Error',
          'Esse usuario já existe' ,
          /* Text */
        );
        this.setState({ isLoading: false })

      })
  }

  renderButton() {
    if (this.state.isLoading)
      return <ActivityIndicator />;

    return (
      <TouchableOpacity
        onPress={() => this.tryCreate()}
        style={styles.botao}>
        <Text style={styles.textButton}>Criar Usuario</Text>
      </TouchableOpacity>
      // <Button
      //   title='Criar Conta'
      //   onPress={() => this.tryCreate()}
      // />
    );
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
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder='Email'
            value={this.state.mail}
            placeholderTextColor='#8F98C1'
            onChangeText={value => this.onChangeHandler('mail',
              value)}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder='Senha'
            secureTextEntry={true}
            placeholderTextColor='#8F98C1'
            value={this.state.senha}
            onChangeText={value => this.onChangeHandler('senha',
              value)}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder='Confirmar senha'
            secureTextEntry={true}
            placeholderTextColor='#8F98C1'
            value={this.state.confSenha}
            onChangeText={value => this.onChangeHandler('confSenha',
              value)}
          />
        </View>
        {this.renderButton()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252C4A',
  },

  botao: {
    width: 250,
    height: 40,
    backgroundColor: '#268AEC',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInsc: {
    color: '#8F98C1',
    fontSize: 18,
    marginTop: 10,
  },
  logo: {
    width: 155,
    height: 120,
  },
  viewInput: {
    height: 50,
    width: 250,
    // backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 30,
    borderBottomWidth: 1,
    borderColor: '#8F98C1',
  },
  input: {
    fontSize: 18,
    color: '#8F98C1'
  },
})