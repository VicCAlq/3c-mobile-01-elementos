/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]


Crie e exporte por padrão um componente chamado
"AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <View>
com dois elementos: um <Text> com o texto "Clique abaixo", e um <Pressable> com o texto
"Clique aqui" que ao ser clicado
exibe um alerta com o texto "Fui clicado!"
*/


import { View, Pressable, Text, Alert, StyleSheet} from 'react-native';
import root from '../styles/main';


const estiloBotao = StyleSheet.create({
    botao: {
         backgroundColor: 'pink',
         borderRadius:'10px',
         padding: '5px'
         
    },
  texto1: {
    color: 'white',
    fontSize: "15px",
    fontWeight:'bold',
    textAlign:'center'
    },
    texto2: {
    color: 'purple',
    fontSize: "15px",
    fontWeight:'bold',
   textAlign:'center'


    }
}
)
export default function AtvBotaoAcaoInterna ({}) {
    return(
        <View>
            <Text style = {estiloBotao.texto1}>Clique abaixo</Text>


            <Pressable style = {estiloBotao.botao}
             onPress = {() => Alert.alert('Fui Clicado!')}>


                <Text  style = {estiloBotao.texto2}>Clique aqui</Text>
            </Pressable>
        </View>
    )
}



