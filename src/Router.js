import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import Login from './pages/login';
import CreateUser from './pages/createUser';
import listTeste from './pages/listTeste';
import list from './pages/list';
import listAll from './pages/listAll';
import detailMunique from './pages/detailMunique';
import detail from './pages/detail';
import home from './pages/home';
import muniqueGeral from './pages/muniqueGeral';
import veri from './pages/verificacao';


const Router = createStackNavigator({
  'veri': {
    screen: veri,
    navigationOptions: {
      title: 'Verificação',
    }
  },
  'Login': {
    screen: Login,
    navigationOptions: {
      title: 'Bem Vindo',
    }
  },
  'home': {
    screen: home,
    navigationOptions: {
      title: 'Home',
    }
  },

  'list': {
    screen: list,
    navigationOptions: {
      title: 'Lista',
    }
  },
  'listAll': {
    screen: listAll,
    navigationOptions: {
      title: 'Lista geral',
    }
  },
  'CreateUser': {
    screen: CreateUser,
    navigationOptions: {
      title: 'Criar Usuario',
    }
  },
  'detail': {
    screen: detail,
    navigationOptions: {
      title: 'Detalhes',
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
