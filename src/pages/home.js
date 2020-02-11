import React, { Component } from 'react';
import firebase from 'firebase'
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
  Share,
  ScrollView,

} from 'react-native';
import share from '../../assets/share.png';
import list from '../../assets/list.png';
import geral from '../../assets/geral.png';

// import { Container } from './styles';
const { width, height } = Dimensions.get('window');
export default class pages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
    }
  }
  componentDidMount() {
    this.props.navigation.setParams({ sair: this.sair });
  }
  static navigationOptions = ({ navigation }) => ({
    // const { params = {} } = navigation.state  
    headerRight: (
      <TouchableOpacity style={styles.Sair} onPress={navigation.getParam('sair')} >
        <Text style={{ color: '#fff', marginHorizontal: 10 }}>Sair</Text>
      </TouchableOpacity>
    ),
  });
  sair = () => {
    firebase.auth().signOut()
      .then(() => {
        this.props.navigation.replace('Login')
      }).catch(error => {
        Alert.alert('Error',
          'Erro ao sair');
      });
  }
  onShare = async quiz => {
    try {
      const { currentUser } = firebase.auth();

      const id = currentUser.uid;
      const result = await Share.share({
        message:
          `https://www.nitlab.com/${quiz}/${id}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.questions}>
            <Text style={styles.textQuiz}>Cronotipo de Munique</Text>
            <View style={styles.iconQuiz}>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('listAll', {
                rota: 'CronotipoMunique'
              })}>
                <Text style={styles.textIcon}>Lista geral</Text>
                {/* <Image
                  style={styles.icon}
                  source={geral}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('list', {
                rota: 'CronotipoMunique'
              })}>
                <Text style={styles.textIcon}>Minha lista</Text>
                {/* <Image
                  style={styles.icon}
                  source={list}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon2} onPress={() => this.onShare('munique')}>
                <Image
                  style={styles.icon}
                  source={share}
                  aspectRatio={1}
                // resizeMode='stretch'
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          {/* list */}
          <TouchableOpacity style={styles.questions}>
            <Text style={styles.textQuiz}>Questionario de Edinburgh</Text>
            <View style={styles.iconQuiz}>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('listAll', {
                rota: 'Edinburgh'
              })}>
                <Text style={styles.textIcon}>Lista geral</Text>
                {/* <Image
                  style={styles.icon}
                  source={geral}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('list', {
                rota: 'Edinburgh'
              })}>
                <Text style={styles.textIcon}>Minha lista</Text>
                {/* <Image
                  style={styles.icon}
                  source={list}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon2} onPress={() => this.onShare('edinburgh')}>
                <Image
                  style={styles.icon}
                  source={share}
                  aspectRatio={1}
                // resizeMode='stretch'
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          {/* list */}
          {/* list */}
          <TouchableOpacity style={styles.questions}>
            <Text style={styles.textQuiz}>Questionario de Beck</Text>
            <View style={styles.iconQuiz}>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('listAll', {
                rota: 'Beck'
              })}>
                <Text style={styles.textIcon}>Lista geral</Text>
                {/* <Image
                  style={styles.icon}
                  source={geral}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('list', {
                rota: 'Beck'
              })}>
                <Text style={styles.textIcon}>Minha lista</Text>
                {/* <Image
                  style={styles.icon}
                  source={list}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon2} onPress={() => this.onShare('beck')}>
                <Image
                  style={styles.icon}
                  source={share}
                  aspectRatio={1}
                // resizeMode='stretch'
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          {/* list */}
          {/* list */}
          <TouchableOpacity style={styles.questions}>
            <Text style={styles.textQuiz}>Questionario de Atenção</Text>
            <View style={styles.iconQuiz}>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('listAll', {
                rota: 'Atencao'
              })}>
                <Text style={styles.textIcon}>Lista geral</Text>
                {/* <Image
                  style={styles.icon}
                  source={geral}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('list', {
                rota: 'Atencao'
              })}>
                <Text style={styles.textIcon}>Minha lista</Text>
                {/* <Image
                  style={styles.icon}
                  source={list}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon2} onPress={() => this.onShare('atencao')}>
                <Image
                  style={styles.icon}
                  source={share}
                  aspectRatio={1}
                // resizeMode='stretch'
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          {/* list */}
          {/* list */}
          <TouchableOpacity style={styles.questions}>
            <Text style={styles.textQuiz}>Questionario de Ansiedade</Text>
            <View style={styles.iconQuiz}>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('listAll', {
                rota: 'Ansiedade'
              })}>
                <Text style={styles.textIcon}>Lista geral</Text>
                {/* <Image
                  style={styles.icon}
                  source={geral}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('list', {
                rota: 'Ansiedade'
              })}>
                <Text style={styles.textIcon}>Minha lista</Text>
                {/* <Image
                  style={styles.icon}
                  source={list}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon2} onPress={() => this.onShare('ansiedade')}>
                <Image
                  style={styles.icon}
                  source={share}
                  aspectRatio={1}
                // resizeMode='stretch'
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          {/* list */}
          {/* list */}
          <TouchableOpacity style={styles.questions}>
            <Text style={styles.textQuiz}>Questionario de Ostberg</Text>
            <View style={styles.iconQuiz}>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('listAll', {
                rota: 'Ostberg'
              })}>
                <Text style={styles.textIcon}>Lista geral</Text>
                {/* <Image
                  style={styles.icon}
                  source={geral}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('list', {
                rota: 'Ostberg'
              })}>
                <Text style={styles.textIcon}>Minha lista</Text>
                {/* <Image
                  style={styles.icon}
                  source={list}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon2} onPress={() => this.onShare('ostberg')}>
                <Image
                  style={styles.icon}
                  source={share}
                  aspectRatio={1}
                // resizeMode='stretch'
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          {/* list */}
          {/* list */}
          <TouchableOpacity style={styles.questions}>
            <Text style={styles.textQuiz}>Indice de sono Pisttsburgh</Text>
            <View style={styles.iconQuiz}>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('listAll', {
                rota: 'Pisttsburgh'
              })}>
                <Text style={styles.textIcon}>Lista geral</Text>
                {/* <Image
                  style={styles.icon}
                  source={geral}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon} onPress={() => this.props.navigation.navigate('list', {
                rota: 'Pisttsburgh'
              })}>
                <Text style={styles.textIcon}>Minha lista</Text>
                {/* <Image
                  style={styles.icon}
                  source={list}
                  aspectRatio={1}
                // resizeMode='stretch'
                /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottonIcon2} onPress={() => this.onShare('pisttsburgh')}>
                <Image
                  style={styles.icon}
                  source={share}
                  aspectRatio={1}
                // resizeMode='stretch'
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          {/* list */}
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#252C4A'
  },
  questions: {
    width: width - 40,
    height: 100,
    borderColor: '#3B54B8',
    borderWidth: 2,
    borderRadius: 7,
    marginTop: 15,
    marginBottom: 15,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#3B54B8'
  },
  iconQuiz: {
    marginTop: 15,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',

  },
  icon: {
    width: 20,
    height: 22,
    // margin: 1
  },
  textQuiz: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#fff',
    marginTop: 18
    // marginTop: 10,
    // marginLeft: 20,
  },
  bottonIcon: {
    backgroundColor: '#3B54B8',
    marginHorizontal: 25,
    borderRadius: 8,
    // width: 40,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#3B54B8',
    // borderWidth: 1
  },
  bottonIcon2: {
    backgroundColor: '#3B54B8',
    marginHorizontal: 25,
    borderRadius: 25,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 10
  },
  textIcon: {
    margin: 8,
    color: '#fff'
  },
  Sair: {
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
