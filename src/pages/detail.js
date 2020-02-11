import React, { Component } from 'react';

import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import nome from '../../assets/perfil/nome.png'
import cidade from '../../assets/perfil/cidade.png'
import curso from '../../assets/perfil/curso.png'
import data from '../../assets/perfil/data.png'
import altura from '../../assets/perfil/altura.png'
import peso from '../../assets/perfil/peso.png'
import email from '../../assets/perfil/email.png'
import fone from '../../assets/perfil/fone.png'
import dan from '../../assets/perfil/dan.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/FontAwesome5'
// Icon.loadFont();
// import { Container } from './styles';
const { width, height } = Dimensions.get('window')
export default class pages extends Component {
  render() {
    const { navigation } = this.props;
    const { detail } = navigation.state.params;
    const { resposta } = detail
    const { question } = resposta
    // console.log(question)
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.perfil}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 22, color: '#fff', textAlign: 'center' }}>{detail.dado.nome}</Text>
            </View>

            <View style={styles.cidadeVIEW}>
              <Text style={styles.cidadeText}>{detail.dado.CidEst}</Text>
            </View>
          </View>
          <View style={styles.detailPerfil}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, margin: 7 }}>Detalhes do paciente</Text>
            <View style={styles.icon}>
              <Icon name="person" size={24} color="#000" style={styles.icons} />
              <Text> {detail.dado.nome}</Text>
            </View>
            <View style={styles.icon}>
              <Icons name="weight" size={24} color="#000" style={styles.icons} />
              <Text> {detail.dado.peso}KG</Text>
              <Icons name="tape" size={24} color="#000" style={styles.icons} />
              <Text> {detail.dado.altura}</Text>

            </View>
            <View style={styles.icon}>
              {/* <Image
                style={styles.icons}
                source={data}
              // aspectRatio={1}
              /> */}
              <Icon name="date-range" size={24} color="#000" style={styles.icons} />
              <Text> Data de Nascimento: </Text>
              <Text> {detail.dado.dataNasc}</Text>
            </View>
            <View style={styles.icon}>
              <Icon name="email" size={24} color="#000" style={styles.icons} />
              <Text> {detail.dado.email}</Text>
            </View>
            <View style={styles.icon}>
              <Icon name="call" size={24} color="#000" style={styles.icons} />
              <Text> {detail.dado.fone}</Text>
            </View>
            <View style={styles.icon}>
              {/* <Image
                style={styles.icons}
                source={curso}
              // aspectRatio={1}
              /> */}
              <Icon name="school" size={24} color="#000" style={styles.icons} />
              <Text> {detail.dado.curso}  </Text>
              <Text> {detail.dado.periodo}º período</Text>
            </View>
            <View style={styles.icon}>
              {/* <Image
                style={styles.icons}
                source={data}
              // aspectRatio={1}
              /> */}
              <Icon name="date-range" size={24} color="#000" style={styles.icons} />
              <Text> Data da coleta: </Text>
              <Text> {detail.dado.dataColeta}</Text>
            </View>
          </View>
          <View style={styles.detailPerfil}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, margin: 7 }}>Respostas do paciente</Text>
            <FlatList
              data={question}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={{ marginLeft: 10, marginBottom: 10 }}>
                  {item.question == null ? null : <Text>{item.question}</Text>}
                  {item.resposta == null ? null : <Text style={{ fontWeight: 'bold' }}>{item.resposta}</Text>}
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </ScrollView>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    backgroundColor: '#252C4A',
    alignItems: 'center'
  },
  perfil: {
    width: width - 50,
    height: 150,
    backgroundColor: '#3B54B8',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },

  cidadeText: {
    margin: 8,
    color: '#fff'
  },
  cidadeVIEW: {
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 8
  },
  detailPerfil: {
    width: width - 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  icons: {
    width: 27,
    height: 25,
    marginLeft: 10
  },
  imgPefil: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 15
  },
  icons: {
    marginLeft: 10
  }
})














{/* <Text>{detail.dado.nome}</Text> */ }
{/* <FlatList
data={question}
showsVerticalScrollIndicator={false}
renderItem={({ item }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.detail}
      onPress={() => this.props.navigation.navigate('detailEdin', { detail: item })}>
      <Text>{item.question}</Text>
      <Text>{item.mao}</Text>
      <Text>{item.resposta.question}</Text>
    </TouchableOpacity>

    <Text style={{ color: '#000' }}>{item.resposta.pergunta01}</Text>
  </View>
)}
keyExtractor={(item, index) => index.toString()}
numColumns={5}
/> */}