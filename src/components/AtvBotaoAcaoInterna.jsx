import { Alert, Pressable, Text, View, StyleSheet} from "react-native";


/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna"
 que não recebe nenhum argumento.Este componente deve exibir uma <View>
  com dois elementos: um <Text> com o texto "Clique abaixo",
   e um <Pressable> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto 
   "Fui clicado!"
*/
const estilo = StyleSheet.create({
    texto:{
        color:"white",
        fontSize: 20
    },
    pressable:{
        backgroundColor: "blue",
    },
})


export default function AtvBotaoAcaoInterna ({})
{
    const Alerta = () => Alert.alert(
        "titulo alerta",
        "texto alerta",
        [{
            text: "me clique",
            onPress: () => console.log("teste")
        }]
    )
    return(<View>
        <Text style={estilo.texto}>
            Clique abaixo
        </Text>
        <Pressable style={estilo.pressable} onPress={Alerta}>
           <Text style={estilo.texto}>Clique aqui</Text>
        </Pressable>
    </View>)
}1