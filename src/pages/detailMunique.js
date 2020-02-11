import React, { Component } from 'react';

import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
const { width, height } = Dimensions.get('window')
// import { Container } from './styles';
import nome from '../../assets/perfil/nome.png'
import cidade from '../../assets/perfil/cidade.png'
import curso from '../../assets/perfil/curso.png'
import data from '../../assets/perfil/data.png'
import altura from '../../assets/perfil/altura.png'
import peso from '../../assets/perfil/peso.png'
import email from '../../assets/perfil/email.png'
import fone from '../../assets/perfil/fone.png'
import dan from '../../assets/perfil/dan.jpg'
export default class pages extends Component {
  render() {
    const { navigation } = this.props;
    const { detail } = navigation.state.params;
    console.log(detail)
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.perfil}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={styles.imgPefil}
                source={dan}
                aspectRatio={1}
              />
              <Text style={{ fontSize: 22, color: '#fff' }}>{detail.dado.nome}</Text>
            </View>

            <View style={styles.cidadeView}>
              <Text style={styles.cidadeText}>{detail.dado.CidEst}</Text>
            </View>
          </View>
          <View style={styles.detailPerfil}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, margin: 7 }}>Detalhes do paciente</Text>
            <View style={styles.icon}>
              <Image
                style={styles.icons}
                source={nome}
                aspectRatio={1}
              />
              <Text> {detail.dado.nome}</Text>
            </View>
            <View style={styles.icon}>
              <Image
                style={styles.icons}
                source={data}
                aspectRatio={1}
              />
              <Text> Data de Nascimento: </Text>
              <Text> {detail.dado.dataNasc}</Text>
            </View>
            <View style={styles.icon}>
              <Image
                style={styles.icons}
                source={email}
                aspectRatio={1}
              />
              <Text> {detail.dado.email}</Text>
            </View>
            <View style={styles.icon}>
              <Image
                style={styles.icons}
                source={fone}
                aspectRatio={1}
              />
              <Text> {detail.dado.fone}</Text>
            </View>
            <View style={styles.icon}>
              <Image
                style={styles.icons}
                source={curso}
                aspectRatio={1}
              />
              <Text> {detail.dado.curso}  </Text>
              <Text> {detail.dado.periodo}º período</Text>
            </View>
            <View style={styles.icon}>
              <Image
                style={styles.icons}
                source={data}
                aspectRatio={1}
              />
              <Text> Data do coleta: </Text>
              <Text> {detail.dado.dataColeta}</Text>
            </View>
          </View>
          <View style={styles.detailPerfil}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, margin: 7 }}>Respostas do paciente</Text>
            <View style={styles.viewInput}>
              <Text style={styles.textRes}>{detail.resposta.pergunta01}</Text>
            </View>
            {/* <View style={styles.viewInput}>
          <Text>{detail.resposta.pergunta02}</Text>
        </View> */}
            <View style={styles.viewInput}>
              <Text style={styles.textRes}>{detail.resposta.pergunta03}</Text>
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.textRes}>{detail.resposta.pergunta04}</Text>
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.textRes}>{detail.resposta.pergunta05}</Text>
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.textRes}>{detail.resposta.pergunta06}</Text>
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.textRes}>{detail.resposta.pergunta07}</Text>
            </View>
            {/* <View style={styles.viewInput}>
            <Text>{detail.resposta.pergunta08}</Text>
          </View> */}
            <View style={styles.viewInput}>
              <Text style={styles.textRes}>{detail.resposta.pergunta09}</Text>
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.textRes}>{detail.resposta.pergunta10}</Text>
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.textRes}>{detail.resposta.pergunta11}</Text>
            </View>
            <View style={styles.viewInput}>
              <Text style={styles.textRes2}>{detail.resposta.pergunta12}</Text>
            </View>
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
    backgroundColor: '#e6eef0',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  perfil: {
    width: width - 50,
    height: 150,
    backgroundColor: '#0377fc',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  cidadeView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 15,
    borderRadius: 15,
  },
  cidadeText: {
    margin: 8,
    color: '#fff'
  },
  detailPerfil: {
    width: width - 50,
    backgroundColor: '#fff',
    // marginTop: 20,
    borderRadius: 8,
    marginBottom: 20

  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  icons: {
    width: 25,
    height: 25,
    marginLeft: 10
  },
  imgPefil: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 15
  },
  viewInput: {
    marginLeft: 10,
    marginBottom: 5
  }
})