import React, { Component } from 'react';
import firebase from 'firebase';
import {
  Linking,
  Share,
  View,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import ciclo from '../../assets/ciclo.png'
const { width } = Dimensions.get('window')
import DatePicker from 'react-native-datepicker'
import { RadioButtons } from 'react-native-radio-buttons'
import { setState } from 'expect/build/jestMatchersObject';
var teste = null
var selected = null
var question = []
var option = ['Sim', 'Não']
//com as siglas sao apenas para mostrar
var cal1 = ''
var cal2 = ''
var cal3 = ''
var cal4 = ''
var cal5 = ''
var cal5 = ''
var cal6 = ''
var cal7 = ''
var cal8 = ''
var cal9 = ''
//com nome completo são para os calculos
var calculo1 = null
var calculo2 = null
var calculo3 = null
var calculo4 = null
var calculo5 = null
var calculo6 = null
var calculo7 = null
var calculo8 = null
var calculo9 = null

export default class pages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // respostas: [],
      pergunta1: '00:00',
      pergunta2: '00:00',
      pergunta3: '00:00',
      pergunta4: null,
      pergunta5: '05:00',
      pergunta6: '',
      pergunta7: '00:00',
      pergunta8: '00:00',
      pergunta9: '00:00',
      pergunta10: null,
      pergunta11: '05:00',
      pergunta12: '',
      nome: '',
      idPesquisador: '00:00',
      foraTrab: '00:00',
      diaTrab: '00:00',

      // date: "",
    }
  }
  onShare = async () => {
    try {
      const { currentUser } = firebase.auth();
      const id = currentUser.uid;
      const result = await Share.share({
        message:
          `https://www.nitlab.com/munique/${id}`,
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
  onAddItem = () => {
    // not allowed AND not working
    this.setState(state => {
      const list = state.respostas.push(state.value);
      return {
        list,
        value: '',
      };
    });
  };

  // async cad() {
  //   const { pesquisador, nome, pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6 } = this.state;
  //   // const no = nome
  //   const respostas = {
  //     pergunta01: `Vou para a cama às ${pergunta1} horas`,
  //     pergunta2,
  //     pergunta03: `Às ${pergunta3} horas, estou pronto para dormir`,
  //     pergunta04: `Necessito de ${pergunta4} minutos para adormecer`,
  //     pergunta05: `Acordo às ${pergunta5} horas`,
  //     pergunta06: `Passados ${pergunta6} minutos acordo`,
  //     pesquisador: 'Jacks'
  //   }
  //   const dados = {
  //     cpf: `07376714324`,
  //     dataNasci: '26/10/1996',
  //     CidadeOrig: 'Parnaíba',
  //     peso: '65 kg',
  //     altura: '1.72',
  //     email: 'Danrleysil46@gmail.com',
  //     Telefone: '86 995430844',
  //     Curso: 'Sistemas de informação',
  //     periodo: 6,
  //     dataColeta: '10/12/2019',
  //   }
  //   // console.log(respostas)
  //   const db = firebase.database();
  //   await db.ref(`/${pesquisador}/CronotipoMunique/${nome}/respostas`).set(respostas)
  //   await db.ref(`/${pesquisador}/CronotipoMunique/${nome}/dados`).set(dados)
  //   await db.ref(`/CronotipoMunique/${nome}/resposta`).set(respostas)
  //   await db.ref(`/CronotipoMunique/${nome}/dados`).set(dados)
  // }


  async cad() {
    if (selected === null) {
      Alert.alert('Falha', 'Informe o número de dias trabalhados')
    }
    else {
      const { pesquisador, nome, pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8, pergunta9, pergunta10, pergunta11, pergunta12, foraTrab, diaTrab } = this.state;
      await this.cal1()
      await this.cal2()
      await this.cal3()
      await this.cal4()
      await this.cal6()
      await this.cal9()
      await this.cal5()
      await this.cal7()
      await this.cal8()
      // const no = nome
      // question = {
      //   0: { question: `Vou para a cama às ${pergunta1} horas` },
      //   1: { question: pergunta2 },
      //   2: { question: `Às ${pergunta3} horas, estou pronto para dormir` },
      //   3: { question: `Necessito de ${pergunta4} minutos para adormecer` },
      //   4: { question: `Acordo às ${pergunta5} horas` },
      //   5: { question: `Passados ${pergunta6} minutos acordo` },
      //   6: { question: `Vou para a cama às ${pergunta7} horas` },
      //   7: { question: '' },
      //   8: { question: `Às ${pergunta9} horas, estou pronto para dormir` },
      //   9: { question: `Necessito de ${pergunta10} minutos para adormecer` },
      //   10: { question: `Acordo às ${pergunta11} horas` },
      //   11: { question: `Passados ${pergunta12} minutos acordo` },
      //   12: { question: `Nos Dias de Trabalho ${diaTrab}` },
      //   12: { question: `Fora Dos Dias de Trabalho ${foraTrab}` },
      // }
      // const respostas = {
      //   question,
      //   idPesquisador: this.state.idPesquisador
      // }
      // console.log(question)
      // await this.props.navigation.replace('form', {
      //   respostas: respostas,
      //   rota: 'CronotipoMunique'
      // })
      await Alert.alert('Sucesso', ` Sonset= ${cal1} \n Sonset2= ${cal2} \n SDW= ${cal3} \n MSF= ${cal4} \n SDF= ${cal6} \n MSW= ${cal9} \n AVSD= ${cal5} \n MSFS= ${cal7} \n JLS= ${cal8}`)
    }
  }

  cal1() {
    const { pergunta3, pergunta4, pergunta1 } = this.state;

    var s = pergunta3.split(':');
    var e = pergunta1.split(':');

    var end = parseInt(e[0]) * 60 + parseInt(e[1]);
    console.log('Variavel de teste', end)
    var start = parseInt(s[0]) * 60 + parseInt(s[1]);
    // console.log(start)
    var Sosent = (((start - pergunta4) - 1440) / 60) * -1
    // console.log(Sosent)
    var sign = Sosent >= 0 ? 1 : -1;
    var min = 1 / 60;
    // Get positive value of num
    Sosent = Sosent * sign;
    // Separate the int from the decimal part
    var intpart = Math.floor(Sosent);
    // console.log('Parte inteira', intpart)
    var decpart = Sosent - intpart;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);
    // console.log('Parte flutuante', decpart)
    var minutes = Math.floor(decpart * 60);
    // Sign result
    sign = sign == 1 ? '' : '-';

    cal1 = sign + intpart + 'h' + minutes;
    calculo1 = (intpart * 60) + minutes

    console.log('Cal 1', cal1)
    console.log('Calculo 1', calculo1)
  }
  cal2() {
    const { pergunta9, pergunta10 } = this.state;

    var s = pergunta9.split(':');
    // var e = pergunta4.split(':');

    // var end = parseInt(e[0]) * 60 + parseInt(e[1]);
    var start = parseInt(s[0]) * 60 + parseInt(s[1]);
    // console.log(start)
    var Sosent = (((start - pergunta10) - 1440) / 60) * -1
    // console.log(Sosent)
    var sign = Sosent >= 0 ? 1 : -1;
    var min = 1 / 60;

    // Get positive value of num
    Sosent = Sosent * sign;

    // Separate the int from the decimal part
    var intpart = Math.floor(Sosent);
    // console.log('Parte inteira', intpart)
    var decpart = Sosent - intpart;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);
    // console.log('Parte flutuante', decpart)
    var minutes = Math.floor(decpart * 60);
    // console.log('Transformada em minutos', minutes)
    // Sign result
    sign = sign == 1 ? '' : '-';

    // pad() adds a leading zero if needed
    cal2 = sign + intpart + 'h' + minutes
    calculo2 = (intpart * 60) + minutes;
    console.log('Calc 2', cal2)
    console.log('Calculo 2', calculo2)
  }

  cal3() {
    const { pergunta5 } = this.state;

    var s = pergunta5.split(':');

    var start = parseInt(s[0]) * 60 + parseInt(s[1]);

    calculo3 = (start - calculo1) / 60
    var sign = calculo3 >= 0 ? 1 : -1;
    var min = 1 / 60;

    // Get positive value of num
    calculo3 = calculo3 * sign;

    // Separate the int from the decimal part
    var intpart = Math.floor(calculo3);
    // console.log('Parte inteira', intpart)
    var decpart = calculo3 - intpart;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);
    // console.log('Parte flutuante', decpart)
    var minutes = Math.floor(decpart * 60);
    // console.log('Transformada em minutos', minutes)
    // Sign result
    sign = sign == 1 ? '' : '-';

    // pad() adds a leading zero if needed
    console.log('->', sign)
    cal3 = sign + intpart + 'h' + minutes;
    calculo3 = (intpart * 60) + minutes
    console.log('Calc 3', cal3)
    console.log('calculo 3', calculo3)
  }
  cal4() {
    const { pergunta5 } = this.state;
    var s = pergunta5.split(':');

    var start = parseInt(s[0]) * 60 + parseInt(s[1]);

    calculo4 = ((calculo1 + start) / 2) / 60

    var sign = calculo4 >= 0 ? 1 : -1;
    var min = 1 / 60;

    // Get positive value of num
    calculo3 = calculo4 * sign;

    // Separate the int from the decimal part
    var intpart = Math.floor(calculo4);
    // console.log('Parte inteira', intpart)
    var decpart = calculo4 - intpart;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);
    // console.log('Parte flutuante', decpart)
    var minutes = Math.floor(decpart * 60);
    // console.log('Transformada em minutos', minutes)
    // Sign result
    sign = sign == 1 ? '' : '-';

    // pad() adds a leading zero if needed
    console.log('->', sign)
    cal4 = sign + intpart + 'h' + minutes;
    calculo4 = (intpart * 60) + minutes
    console.log('Calc 4', cal4)
    console.log('calculo 4', calculo4)
  }

  cal6() {
    const { pergunta11 } = this.state;

    var s = pergunta11.split(':');

    var start = parseInt(s[0]) * 60 + parseInt(s[1]);

    calculo6 = (start - calculo2) / 60
    var sign = calculo6 >= 0 ? 1 : -1;
    var min = 1 / 60;

    // Get positive value of num
    calculo6 = calculo6 * sign;

    // Separate the int from the decimal part
    var intpart = Math.floor(calculo6);
    // console.log('Parte inteira', intpart)
    var decpart = calculo6 - intpart;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);
    // console.log('Parte flutuante', decpart)
    var minutes = Math.floor(decpart * 60);
    // console.log('Transformada em minutos', minutes)
    // Sign result
    sign = sign == 1 ? '' : '-';

    // pad() adds a leading zero if needed
    console.log('->', sign)
    cal6 = sign + intpart + 'h' + minutes;
    calculo6 = (intpart * 60) + minutes
    console.log('Calc 6', cal6)
    console.log('calculo 6', calculo6)
  }
  cal9() {
    const { pergunta11 } = this.state;
    var s = pergunta11.split(':');

    var start = parseInt(s[0]) * 60 + parseInt(s[1]);

    calculo9 = ((start + calculo2) / 2) / 60
    var sign = calculo9 >= 0 ? 1 : -1;
    var min = 1 / 60;

    // Get positive value of num
    calculo9 = calculo9 * sign;

    // Separate the int from the decimal part
    var intpart = Math.floor(calculo9);
    // console.log('Parte inteira', intpart)
    var decpart = calculo9 - intpart;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);
    // console.log('Parte flutuante', decpart)
    var minutes = Math.floor(decpart * 60);
    // console.log('Transformada em minutos', minutes)
    // Sign result
    sign = sign == 1 ? '' : '-';

    // pad() adds a leading zero if needed
    console.log('->', sign)
    cal9 = sign + intpart + 'h' + minutes;
    calculo9 = (intpart * 60) + minutes
    console.log('Calc 9', cal9)
    console.log('calculo 9', calculo9)
  }

  cal5() {
    calculo5 = (((calculo3 * selected) + (calculo6 * (7 - selected))) / 7) / 60
    var sign = calculo5 >= 0 ? 1 : -1;
    var min = 1 / 60;
    // Get positive value of num
    calculo5 = calculo5 * sign;
    // Separate the int from the decimal part
    var intpart = Math.floor(calculo5);
    // console.log('Parte inteira', intpart)
    var decpart = calculo5 - intpart;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);
    // console.log('Parte flutuante', decpart)
    var minutes = Math.floor(decpart * 60);
    // Sign result
    sign = sign == 1 ? '' : '-';

    cal5 = sign + intpart + 'h' + minutes;
    calculo5 = (intpart * 60) + minutes

    console.log('Cal 5', cal5)
    console.log('Calculo 5', calculo5)
  }
  cal7() {
    calculo7 = ((calculo4 * 0, 5 * (calculo6 - calculo5)) / 2) / 60
    var sign = calculo7 >= 0 ? 1 : -1;
    var min = 1 / 60;
    // Get positive value of num
    calculo7 = calculo7 * sign;
    // Separate the int from the decimal part
    var intpart = Math.floor(calculo7);
    // console.log('Parte inteira', intpart)
    var decpart = calculo7 - intpart;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);
    // console.log('Parte flutuante', decpart)
    var minutes = Math.floor(decpart * 60);
    // Sign result
    sign = sign == 1 ? '' : '-';

    cal7 = sign + intpart + 'h' + minutes;
    calculo7 = (intpart * 60) + minutes

    console.log('Cal 7', cal7)
    console.log('Calculo 7', calculo7)
  }
  cal8() {
    calculo8 = (calculo4 - calculo9) / 60
    var sign = calculo7 >= 0 ? 1 : -1;
    var min = 1 / 60;
    // Get positive value of num
    calculo8 = calculo8 * sign;
    // Separate the int from the decimal part
    var intpart = Math.floor(calculo8);
    // console.log('Parte inteira', intpart)
    var decpart = calculo8 - intpart;
    // Round to nearest minute
    decpart = min * Math.round(decpart / min);
    // console.log('Parte flutuante', decpart)
    var minutes = Math.floor(decpart * 60);
    // Sign result
    sign = sign == 1 ? '' : '-';

    cal8 = sign + intpart + 'h' + minutes;
    calculo8 = (intpart * 60) + minutes

    console.log('Cal 8', cal8)
    console.log('Calculo 8', calculo8)
  }
  renderRadioButton() {
    const options = [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
    function setSelectedOption(selectedOption) {
      selected = selectedOption
      console.log(selected)
    }

    function renderOption(option, selected, onSelect, index) {
      const style = selected ? styles.escolhido : styles.naoEscolhido;

      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <Text style={style}>{option}</Text>
        </TouchableWithoutFeedback>
      );
    }

    function renderContainer(optionNodes) {
      return <View>{optionNodes}</View>;
    }

    return (
      <View style={{ width: "100%", alignItems: 'center' }} >
        <RadioButtons
          // style={{ flexDirection: "row", flex: 1 }}
          options={options}
          onSelection={setSelectedOption.bind(this)}
          selectedOption={this.state.selectedOption}
          renderOption={renderOption}
          renderContainer={RadioButtons.renderHorizontalContainer}
        />
        {/* <Text>Selected option: {this.state.selectedOption || 'none'}</Text> */}
      </View>
    )
  }


  render() {
    const { navigation } = this.props;
    const { nome } = navigation.state.params;
    const { params } = this.props.navigation.state;
    this.state.idPesquisador = params.munique
    this.state.nome = 'danrley'

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.inic}>
            <Text style={styles.textTrue}>Você tem um horário regular de {'\n'}trabalho
          (também como dono(a){'\n'} de casa, etc)?</Text>
            {this.renderRadioButton()}
            <Image
              source={ciclo}
              style={styles.logo}
            />
          </View>
          <View style={styles.diaTrab}>
            <Text style={{
              fontSize: 16, fontWeight: 'bold', color: '#fff',
              margin: 10
            }}>
              Nos dias de trabalho(incluindo a{'\n'}noite anterior ao primeiro dia de trabalho)
            </Text>
          </View>
          {/* <--pergunta 01--> */}
          {/* <Image
              style={styles.logo}
              source={sleep}
              aspectRatio={1}
            // resizeMode='stretch'
            /> */}
          <View style={styles.perguntas}>

            <Text style={styles.textPerg}>Vou para a cama às</Text>
            <DatePicker
              style={{ width: 80 }}
              date={this.state.pergunta1}
              androidMode="spinner"
              mode='time'
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderColor: '#fff',
                  // marginHorizontal: 10
                },
                dateText: {
                  color: '#fff',
                  textAlign: 'center',
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ pergunta1: date }) }}
            />
            <Text style={styles.textPerg}>horas</Text>
          </View>
          {/* <--pergunta 02--> */}
          <View style={styles.perguntas}>
            <Text style={styles.textPerg}>Algumas pessoas permanecem algum{'\n'}tempo acordadas depois de se deitar!</Text>
            {/* <TextInput
              style={styles.input}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder=''
              placeholderTextColor='#999'
              value={this.state.pergunta1}
              onChangeText={pergunta2 => this.setState({ pergunta2 })}
            /> */}
            <Text style={styles.textPerg}></Text>
          </View>
          {/* <--pergunta 02--> */}
          {/* <--pergunta 03--> */}
          <View style={styles.perguntas}>
            <Text style={styles.textPerg}>Às</Text>
            <DatePicker
              style={{ width: 80 }}
              date={this.state.pergunta3}
              androidMode="spinner"
              mode='time'
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderColor: '#fff',
                  // marginHorizontal: 10
                },
                dateText: {
                  color: '#fff',
                  textAlign: 'center',
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ pergunta3: date }) }}
            />
            <Text style={styles.textPerg}>horas, estou pronto para dormir</Text>
          </View>
          {/* <--pergunta 04--> */}
          <View style={styles.perguntas}>
            <Text style={styles.textPerg}>Necessito de</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder=''
              keyboardType={'numeric'}
              placeholderTextColor='#999'
              value={this.state.pergunta4}
              onChangeText={pergunta4 => this.setState({ pergunta4 })}
            />
            {/* <DatePicker
              style={{ width: 80 }}
              date={this.state.pergunta4}
              androidMode="spinner"
              mode='time'
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderColor: '#fff',
                  // marginHorizontal: 10
                },
                dateText: {
                  color: '#fff',
                  textAlign: 'center',
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ pergunta4: date }) }}
            /> */}
            <Text style={styles.textPerg}>minutos para adormecer</Text>
          </View>
          {/* <--pergunta 04--> */}
          {/* <--pergunta 05--> */}
          <View style={styles.perguntas}>
            <Text style={styles.textPerg}>Acordo às</Text>
            <DatePicker
              style={{ width: 80 }}
              date={this.state.pergunta5}
              androidMode="spinner"
              mode='time'
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderColor: '#fff',
                  // marginHorizontal: 10
                },
                dateText: {
                  color: '#fff',
                  textAlign: 'center',
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ pergunta5: date }) }}
            />
            <Text style={styles.textPerg}>horas</Text>
          </View>
          {/* <--pergunta 05--> */}
          {/* <--pergunta 06--> */}
          <View style={styles.perguntas}>
            <Text style={styles.textPerg}>Passados</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder=''
              keyboardType={'numeric'}
              placeholderTextColor='#999'
              value={this.state.pergunta6}
              onChangeText={pergunta6 => this.setState({ pergunta6 })}
            />
            {/* <DatePicker
              style={{ width: 80 }}
              date={this.state.pergunta6}
              androidMode="spinner"
              mode='time'
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderColor: '#fff',
                  // marginHorizontal: 10
                },
                dateText: {
                  color: '#fff',
                  textAlign: 'center',
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ pergunta6: date }) }}
            /> */}
            <Text style={styles.textPerg}>minutos, levanto-me</Text>
          </View>
          {/* <--pergunta 06--> */}
          <View style={styles.diaTrab}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', textAlign: 'justify', margin: 10 }}>
              Fora dos dias de trabalho(incluindo a noite anterior ao primeiro dia de descanso ou lazer)
            </Text>
          </View>
          <View style={styles.perguntas}>
            <Text style={styles.textPerg}>Vou para a cama às</Text>
            <DatePicker
              style={{ width: 80 }}
              date={this.state.pergunta7}
              androidMode="spinner"
              mode='time'
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderColor: '#fff',
                  // marginHorizontal: 10
                },
                dateText: {
                  color: '#fff',
                  textAlign: 'center',
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ pergunta7: date }) }}
            />
            <Text style={styles.textPerg}>horas</Text>
          </View>
          {/* <--pergunta 02--> */}
          <View style={styles.perguntas}>
            <Text style={styles.textPerg}>Algumas pessoas permanecem algum{'\n'}tempo acordadas depois de se deitar!</Text>
            {/* <TextInput
              style={styles.input}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder=''
              placeholderTextColor='#999'
              value={this.state.pergunta1}
              onChangeText={pergunta2 => this.setState({ pergunta2 })}
            /> */}
            <Text style={styles.textPerg}></Text>
          </View>
          {/* <--pergunta 02--> */}
          {/* <--pergunta 03--> */}
          <View style={styles.perguntas}>
            <Text style={styles.textPerg}>Às</Text>
            <DatePicker
              style={{ width: 80 }}
              date={this.state.pergunta9}
              androidMode="spinner"
              mode='time'
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderColor: '#fff',
                  // marginHorizontal: 10
                },
                dateText: {
                  color: '#fff',
                  textAlign: 'center',
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ pergunta9: date }) }}
            />
            <Text style={styles.textPerg}>horas, estou pronto para dormir</Text>
          </View>
          {/* <--pergunta 04--> */}
          <View style={styles.perguntas}>
            <Text style={styles.textPerg}>Necessito de</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder=''
              keyboardType={'numeric'}
              placeholderTextColor='#999'
              value={this.state.pergunta10}
              onChangeText={pergunta10 => this.setState({ pergunta10 })}
            />

            {/* <DatePicker
              style={{ width: 80 }}
              date={this.state.pergunta10}
              androidMode="spinner"
              mode='time'
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderColor: '#fff',
                  // marginHorizontal: 10
                },
                dateText: {
                  color: '#fff',
                  textAlign: 'center',
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ pergunta10: date }) }}
            /> */}
            <Text style={styles.textPerg}>minutos para adormecer</Text>
          </View>
          {/* <--pergunta 04--> */}
          {/* <--pergunta 05--> */}
          <View style={styles.perguntas}>
            <Text style={styles.textPerg}>Acordo às</Text>
            <DatePicker
              style={{ width: 80 }}
              date={this.state.pergunta11}
              androidMode="spinner"
              mode='time'
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderColor: '#fff',
                  // marginHorizontal: 10
                },
                dateText: {
                  color: '#fff',
                  textAlign: 'center',
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ pergunta11: date }) }}
            />
            <Text style={styles.textPerg}>horas</Text>
          </View>
          {/* <--pergunta 05--> */}
          {/* <--pergunta 06--> */}
          <View style={styles.perguntas}>
            <Text style={styles.textPerg}>Passados</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              autoCapitalize='none'
              placeholder=''
              keyboardType={'numeric'}
              placeholderTextColor='#999'
              value={this.state.pergunta12}
              onChangeText={pergunta12 => this.setState({ pergunta12 })}
            />
            {/* <DatePicker
              style={{ width: 80 }}
              date={this.state.pergunta12}
              // androidMode="spinner"
              mode='time'
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                  borderColor: '#fff',
                  // marginHorizontal: 10
                },
                dateText: {
                  color: '#fff',
                  textAlign: 'center',
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { this.setState({ pergunta12: date }) }}
            /> */}
            <Text style={styles.textPerg}>minutos, levanto-me</Text>
          </View>
          {/* <--pergunta 06--> */}
          <View style={styles.view}>
            <View style={styles.diaTrab}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', textAlign: 'justify', margin: 10 }}>
                Em média, quanto tempo por dia você passa exposto a luz do dia (ao ar livre)?
            </Text>
            </View>
            {/* <--pergunta 06--> */}
            <View style={styles.perguntas}>
              <Text style={styles.textPerg}>Nos Dias de Trabalho</Text>
              <DatePicker
                style={{ width: 80 }}
                date={this.state.diaTrab}
                androidMode="spinner"
                mode='time'
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                    borderColor: '#fff',
                    // marginHorizontal: 10
                  },
                  dateText: {
                    color: '#fff',
                    textAlign: 'center',
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ diaTrab: date }) }}
              />
            </View>
            {/* <--pergunta 06--> */}

            {/* <--pergunta 06--> */}
            <View style={styles.perguntas}>
              <Text style={styles.textPerg}>Fora Dos Dias de Trabalho</Text>
              <DatePicker
                style={{ width: 80 }}
                date={this.state.diaTrab}
                androidMode="spinner"
                mode='time'
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                    borderColor: '#fff',
                    // marginHorizontal: 10
                  },
                  dateText: {
                    color: '#fff',
                    textAlign: 'center',
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ diaTrab: date }) }}
              />
            </View>
            {/* <--pergunta 06--> */}

            <TouchableOpacity
              onPress={() => this.cad()}
              style={styles.botao}
            >
              <Text style={styles.textButton}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#252C4A',
    width: '100%',
  },
  textTrue: {
    color: '#fff',
    fontSize: 20,
    marginTop: 15,
    textAlign: 'justify'
  },
  input: {
    fontSize: 16,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginHorizontal: 5,
    // marginTop: -15
  },
  perguntas: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  textPerg: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
    // margin: 1
    // marginRight: 8
  },
  diaTrab: {
    width: '100%',
    height: 60,
    backgroundColor: '#268AEC',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botao: {
    width: 225,
    height: 40,
    backgroundColor: '#268AEC',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 20
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  view: {
    alignItems: 'center',
    width: '100%'
  },
  viewInput: {
    height: 45,
    width: 50,
    // backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    // marginTop: -,
    borderBottomWidth: 2,
    borderColor: '#fff'
  },
  logo: {
    width: width - 5,
    height: 230,
    marginVertical: 15
  },
  inic: {
    width: '100%',
    alignItems: 'center'
  },
  escolhido: {
    fontSize: 20,
    color: '#fff',
    borderWidth: 2,
    textAlign: 'center',
    backgroundColor: '#3B54B8',
    borderRadius: 10,
    // margin: 8,
    // height: 40,
    width: 40,
    marginTop: 20,
    borderColor: '#3B54B8',
    marginHorizontal: 3
  },
  naoEscolhido: {
    fontSize: 20,
    color: '#fff',
    borderWidth: 2,
    textAlign: 'center',
    borderColor: '#3B54B8',
    borderRadius: 10,
    // margin: 8,
    // height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 3
  },
})



{/* <FlatList
data={list}
showsVerticalScrollIndicator={false}
renderItem={({ item }) => (
  <Text>{item.perguntas1}</Text>
  <TextInput
    style={styles.input}
    autoCorrect={false}
    autoCapitalize='none'
    placeholder=''
    placeholderTextColor='#999'
    value={this.state.pergunta1}
    onChangeText={pergunta1 => this.setState({ pergunta1 })}
  />
)}
keyExtractor={(item, index) => index.toString()}
/> */}