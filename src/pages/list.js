import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import firebase from 'firebase'
import Icon from 'react-native-vector-icons/MaterialIcons'
import seta from '../../assets/seta.png';

// import { Container } from './styles';
const { width, height } = Dimensions.get('window')
export default class pages extends Component {
  constructor(props) {
    super(props);
    this.state = {

      list: [],
      rota: ''
      // coordinate:{}
    }
  }
  async componentDidMount() {
    const { currentUser } = firebase.auth();
    const id = currentUser.uid;
    const ref = firebase.database().ref(`${id}/${this.state.rota}`)
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
                <Text style={styles.textDesc}>{item.dado.curso}</Text>
              </View>
              <Icon name="keyboard-arrow-right" size={32} color="#8F98C1" style={styles.icons} />
              {/* <Image
                style={{ width: 15, height: 27, marginRight: 10 }}
                source={seta}
              // aspectRatio={1}
              // resizeMode='stretch'
              /> */}
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
    backgroundColor: '#252C4A'
  },
  detail: {
    borderBottomWidth: 0.3,
    width: width - 5,
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
    color: '#8F98C1',
    fontSize: 18,
    marginLeft: 8
  },
  textDesc: {
    color: '#999',
    fontSize: 14,
    marginLeft: 8
  }
})