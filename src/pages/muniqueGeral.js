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
    const ref = firebase.database().ref(`CronotipoMunique`)
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
      <View >
        <FlatList
          data={this.state.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.detail}
                onPress={() => this.props.navigation.navigate('detail', { detail: item })}>
                <Text>{item.dado.nome}</Text>
              </TouchableOpacity>

              {/* <Text style={{ color: '#000' }}>{item.resposta.pergunta01}</Text> */}
            </View>
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
    borderWidth: 1,
    width: 300,
    height: 50,
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})