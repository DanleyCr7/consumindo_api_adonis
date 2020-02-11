import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import Login from './pages/login';
import Tarefa from './pages/tarefas';
import ListaTarefa from './pages/ListaTarefa';
const Router = createStackNavigator({
  'Login': {
    screen: Login,
    navigationOptions: {
      title: 'Autenticação',
    }
  },
  'Tarefa': {
    screen: Tarefa,
    navigationOptions: {
      title: 'Criar Tarefa',
    }
  },
  'ListaTarefa': {
    screen: ListaTarefa,
    navigationOptions: {
      title: 'Criar Tarefa',
    }
  },
},
  {
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#232955'
      },
      headerTintColor: '#fff'
    },
  });

const prefix = (Platform.OS === 'ios')
  ? 'https://'
  : 'https://www.google.com/';
export default () => <Router uriPrefix={prefix} />;
