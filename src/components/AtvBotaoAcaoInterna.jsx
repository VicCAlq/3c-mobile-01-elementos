/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna"
 que não recebe nenhum argumento. Este componente deve exibir uma <View> 
 com dois elementos: um <Text> com o texto "Clique abaixo", e um <Pressable> 
 com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
*/
import { View, Pressable, Text, Alert, StyleSheet } from "react-native"

const estiloBotaoInterno = StyleSheet.create({
    botao: {
        backgroundColor: "white",
        borderRadius: "4px",
        borderWidth: 2,
        borderColor: 'black',
    },
    texto: {
        color: "white"
    }

})

export default function AtvBotaoAcaoInterna() {
    return(<View>
        <Text style={estiloBotaoInterno.texto}> Clique abaixo </Text>
           <Pressable 
        onPress={() => 
          Alert.alert("Fui clicado!")
        }
      >
    <Text style={estiloBotaoInterno.botao}>Clique aqui</Text>
</Pressable>

    </View>)
}