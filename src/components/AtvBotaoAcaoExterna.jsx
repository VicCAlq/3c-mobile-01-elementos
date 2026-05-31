

/*




[ATIVIDADE BOTÃO COM AÇÃO EXTERNA]


Crie e exporte por padrão um componente chamado "AtvBotaoAcaoExterna" que recebe como argumento uma
função chamada "comando". Este componente deve exibir uma <View> com dois elementos: um <Text> com o texto
"Clique abaixo", e um <Pressable> com o texto "Clique aqui" que ao ser pressionado executa a função recebida
no argumento "comando".
*/


import { View, Pressable, Text, StyleSheet} from 'react-native';
import root from '../styles/main';


const estiloBotao = StyleSheet.create({
    botao: {
         backgroundColor: 'white',
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


export default function AtvBotaoAcaoExterna ({comando}) {
    return (
        <View>
            <Text style = {estiloBotao.texto1}
            >Clique abaixo
            </Text>
           
        <Pressable style = {estiloBotao.botao}
        onPress = {comando}>
           <Text style = {estiloBotao.texto2}>
            Clique aqui
            </Text>


        </Pressable>
        </View>
    )
}
