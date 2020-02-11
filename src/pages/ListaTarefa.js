import React, { Component } from 'react';

import { View, Text, FlatList } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
// import { Container } from './styles';
var token = ''

export default class pages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tarefas: [],
    }
  }
  async componentDidMount() {
    try {
      token = await AsyncStorage.getItem('token')
      if (token !== null) {
        // console.log(token)
        await fetch(`http://10.10.252.168:3333/tarefa`, {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        })
          .then((response) => response.json())
          .then(async (responseData) => {
            await this.setState({ tarefas: responseData })
            // console.log(tarefas)
          })
          .done();
      }
    } catch (e) {
      console.log('Erro', e)
    }
  }

  render() {
    // console.log(this.state.tarefas)
    return (
      <View>
        <FlatList
          data={this.state.tarefas}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: '#4287f5', width: '100%', marginTop: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#fff', marginRight: 10 }}>{item.id}-</Text>
                <Text>{item.titulo}</Text>
              </View>

              <Text>{item.descricao}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        // extraData={selected}
        />
      </View>
    )
  }
}
