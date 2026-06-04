/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum
argumento. Este componente deve exibir uma <View> com dois elementos: um <Text> com o texto
"Clique abaixo", e um <Pressable> com o texto "Clique aqui" que ao ser clicado exibe um alerta
com o texto "Fui clicado!"
*/

import { View, Pressable, Text, StyleSheet } from 'react-native';
import root from '../styles/main';

const estilo = StyleSheet.create({
  botao: {
    borderRadius: "5px",
    padding: root.spacings.paddingM,
    backgroundColor: root.colors.primaria,
  },
  texto: {
    color: root.colors.texto,
    fontSize: "16px",
  }
})

export default function AtvBotaoAcaoInterna({}){
    return (<View>
    <Text style={estilo.texto}>Clique abaixo</Text>
    <Pressable style={estilo.botao} onPress={() => 
      Alert.alert('Fui clicado!')
    }>
    <Text style={estilo.texto}>Clique aqui</Text>
    </Pressable>
    </View>)
}
