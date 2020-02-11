import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import firebase from 'firebase'
// import { Container } from './styles';

export default class pages extends Component {
  constructor(props) {
    super(props);
    this.state = {

      list: [],
      // coordinate:{}
    }
  }
  async componentDidMount() {
    const { currentUser } = firebase.auth();
    const id = currentUser.uid;
    const ref = firebase.database().ref(`${id}/CronotipoMunique`)
    await ref.on('child_added', snapshot => {
      const { dado, resposta } = snapshot.val();
      this.state.list.push({
        resposta: resposta,
        dado: dado
      });
      this.setState({ list: [...this.state.list] })

    })
  }
  render() {
    // console.log(this.state.list)
    return (
      <View style={styles.container} >
        <FlatList
          data={this.state.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (

            <TouchableOpacity
              style={styles.detail}
              onPress={() => this.props.navigation.navigate('detail', { detail: item })}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                <Text style={styles.nome}>{item.dado.nome}</Text>
                <Text>{item.dado.CidEst}</Text>
              </View>
              <Text style={{ marginLeft: 10 }}>{item.dado.curso}</Text>
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
    // justifyContent: 'center'
  },
  detail: {
    // borderWidth: 1,
    width: 300,
    height: 50,
    borderRadius: 8,
    margin: 10,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  nome: {
    fontWeight: 'bold',
    marginLeft: 10
  }
})