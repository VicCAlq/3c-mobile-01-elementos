/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado
 "AtvBotaoAcaoInterna" que não recebe nenhum argumento. 
 Este componente deve exibir uma <View> com dois elementos:
  um <Text> com o texto "Clique abaixo", e um <Pressable> 
  com o texto "Clique aqui" que ao ser clicado exibe um alerta
   com o texto "Fui clicado!"
*/


import { View, Text, Pressable, Alert, StyleSheet }
 from 'react-native';

const estilos = StyleSheet.create({
  texto: {
    fontSize: 20,
    marginBottom: 10,
  },

  botao: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 7,
  },
  
  textoBotao: {
    color: 'white',
    fontSize: 20,
  }
});

export default function AtvBotaoAcaoInterna() {

  function mostrarAlerta() {
    Alert.alert('FUI CLICADOOO!');
  }

  return (
    <View>
      <Text style={estilos.texto}>
        Clique abaixo
      </Text>

      <Pressable
        style={estilos.botao}
        onPress={mostrarAlerta}
      >
        <Text style={estilos.textoBotao}>
          Clique aqui
        </Text>
      </Pressable>
    </View>
  );
}