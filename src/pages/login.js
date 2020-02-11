import React, { Component } from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import gitLab from '../../assets/git.png';
import fundo from '../../assets/fundoLogin.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
Icon.loadFont();
const { width, height } = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      mail: '',
      senha: '',
      isLoading: false,
      message: '',
      markers: [],
    }
  }

  // faz a autenticaçao quando clica logar
  tryLogin() {
    this.props.navigation.navigate('Inicio', {
      nome: this.state.nome
    });
    this.setState({ isLoading: true })
    const { mail, senha } = this.state
    firebase.auth()
      .signInWithEmailAndPassword(mail,
        senha).then(() => {
          this.props.navigation.replace('home', {
            nome: 'teste'
          });
        }).catch(error => {
          Alert.alert('Error',
            'Usuario e/ou senha incorreto');
          this.setState({ isLoading: false })
        })
  }

  renderButton() {
    if (this.state.isLoading)
      return <ActivityIndicator />;

    return (
      <TouchableOpacity
        onPress={() => this.tryLogin()}
        style={styles.botao}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      // <Button
      //   title='Criar Conta'
      //   onPress={() => this.tryCreate()}
      // />
    );
  }
  onChangeHandler(field, value) {
    this.setState({
      [field]: value
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Icon name="delete" size={20} color="#fff" /> */}
        {/* <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize='none'
          placeholder=''
          // keyboardType={'numeric'}
          placeholderTextColor='#999'
          value={this.state.nome}
          onChangeText={nome => this.setState({ nome })}
        /> */}
        <Image
          style={styles.logo}
          source={gitLab}
        // aspectRatio={1}
        // resizeMode='stretch'
        />
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Email'
            placeholderTextColor='#8F98C1'
            value={this.state.mail}
            onChangeText={mail => this.setState({ mail })}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Senha'
            placeholderTextColor='#8F98C1'
            secureTextEntry={true}
            value={this.state.senha}
            onChangeText={senha => this.setState({ senha })}
          />
        </View>
        {this.renderButton()}
        <Text
          onPress={() => {
            this.props.navigation.navigate('CreateUser');
          }}
          style={styles.textInsc}
        >Não tem uma conta?</Text>

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