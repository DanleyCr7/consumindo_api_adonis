import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import firebase from 'firebase'
import seta from '../../assets/seta.png';
import Icon from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get('window')
export default class pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      rota: '',
      // id: ''
      // coordinate:{}
    }
  }
  async componentDidMount() {
    const ref = firebase.database().ref(`${this.state.rota}`)
    await ref.on('child_added', snapshot => {
      const { dado, resposta } = snapshot.val();
      // const { nome } = idPesquisador
      this.state.list.push({
        resposta: resposta,
        dado: dado
      });
      this.setState({ list: [...this.state.list] })
    })

  }
  // async pesquisador() {
  //   const ref = firebase.database().ref(`${this.state.id}`)
  //   await ref.on('value', snapshot => {
  //     const { nome } = snapshot.val();
  //     this.setState({ nome: nome })
  //   })
  // }

  render() {
    const { params } = this.props.navigation.state;
    const { rota } = params;
    this.state.rota = rota
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.detail}
              onPress={() => this.props.navigation.navigate('detail', { detail: item })}>
              <View>
                <Text style={styles.text}>{item.dado.nome}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDesc}>Pesquisador:</Text>
                  <Text style={styles.textDesc}>{item.dado.nomePesquisador}</Text>
                </View>
              </View>
              <Icon name="keyboard-arrow-right" size={32} color="#8F98C1" style={styles.icons} />
              {/* <Text>{item.resposta.question}</Text> */}
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        // numColumns={5}
        />
        {/* <Text>list</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#252C4A'
    // justifyContent: 'center'
  },
  detail: {
    borderBottomWidth: 0.3,
    width: width - 10,
    height: 50,
    borderRadius: 8,
    marginTop: 10,
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#8F98C1'
  },
  text: {
    // marginTop: 40,
    fontSize: 18,
    marginLeft: 8,
    color: '#8F98C1'
  },
  textDesc: {
    color: '#999',
    fontSize: 14,
    marginLeft: 8
  }
})