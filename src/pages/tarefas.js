import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
// import { create } from 'istanbul-reports';
import AsyncStorage from '@react-native-community/async-storage';
// import { Container } from './styles';
var token = ''
export default class pages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titulo: '',
      descricao: '',
      tarefa: null
    }
  }

  getData = async () => {
    try {
      token = await AsyncStorage.getItem('token')
      if (token !== null) {
        // console.log(token)
        await fetch(`http://10.10.252.168:3333/tarefa`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            titulo: this.state.titulo,
            descricao: this.state.descricao,
          })
        })
          .then((response) => response.json())
          .then(async (responseData) => {
            console.log(responseData)
            // if (responseData.error != null) {
            //   Alert.alert('Falha', 'Não foi possivel criar uma tarefa')
            // } else {
            //   // await this._onValueChange(STORAGE_KEY, responseData.token)
            //   await AsyncStorage.setItem('token', responseData.token)
            //   await this.props.navigation.navigate('Tarefa')
            //   // console.log(responseData.token)
            // }

          })
          .done();
      }
    } catch (e) {
      console.log('Erro', e)
    }
  }

  deleteStore = async () => {
    try {
      token = await AsyncStorage.getItem('token')
      if (token !== null) {
        // console.log(token)
        await fetch(`http://10.10.252.168:3333/tarefa/${this.state.tarefa}`, {
          method: "DELETE",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        })
          .then((response) => response.json())
          .then(async (responseData) => {
            console.log(responseData)

          })
          .done();
      }
    } catch (e) {
      console.log('Erro', e)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.View}>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Número da tarefa'
            keyboardType={'numeric'}
            placeholderTextColor='#000'
            value={this.state.tarefa}
            onChangeText={tarefa => this.setState({ tarefa })}
          />
        </View>
        <View style={styles.View}>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Título'
            placeholderTextColor='#000'
            value={this.state.titulo}
            onChangeText={titulo => this.setState({ titulo })}
          />
        </View>
        <View style={styles.View}>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Descricão'
            placeholderTextColor='#000'
            value={this.state.descricao}
            onChangeText={descricao => this.setState({ descricao })}
          />
        </View>
        {/* <Text>Criar tarefas</Text> */}
        <TouchableOpacity style={styles.button} onPress={() => this.getData()}>
          <Text style={{ color: '#fff' }}>Criar Tarefa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDelete} onPress={() => this.deleteStore()}>
          <Text style={{ color: '#fff' }}>Deletar Tarefa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonList} onPress={() => this.props.navigation.navigate('ListaTarefa')}>
          <Text style={{ color: '#fff' }}>Listar Tarefa</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 250,
    height: 35,
    backgroundColor: '#48BBEC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10
  },
  buttonDelete: {
    width: 250,
    height: 35,
    backgroundColor: '#cf1335',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10
  },
  buttonList: {
    width: 250,
    height: 35,
    backgroundColor: '#209c0c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10
  },
  input: {
    width: 250,
    height: 35,
    borderColor: '#000',
    borderBottomWidth: 1,
    marginTop: 10
  }
})