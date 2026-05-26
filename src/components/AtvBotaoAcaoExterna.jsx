
/*
[ATIVIDADE BOTÃO COM AÇÃO EXTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoExterna"
 que recebe como argumento uma função chamada "comando". Este componente
  deve exibir uma <View> com dois elementos: um <Text> com o texto "Clique abaixo", 
  e um <Pressable> com o texto "Clique aqui" que ao ser pressionado executa a função recebida no argumento "comando".
*/

import { View, Text, Pressable, StyleSheet } from "react-native";
const estilizacaoBotaoExterno = StyleSheet.create({
botao: {
        backgroundColor: "red",
        borderRadius: "4px",
        borderWidth: 2,
        borderColor: 'black',
        
    },
    texto: {
        color: "white"
    }


})

export default function AtvBotaoAcaoExterna({ comando }) {
  return (
    <View>
      <Text style={estilizacaoBotaoExterno.texto}>Clique abaixo</Text>
      <Pressable style={estilizacaoBotaoExterno.botao} onPress={comando}>
        <Text style={estilizacaoBotaoExterno.texto} >Clique aqui</Text>
      </Pressable>
    </View>
  );
}