/*
[ATIVIDADE BOTÃO COM AÇÃO EXTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoExterna" que recebe como argumento uma função chamada "comando". Este componente deve exibir uma <View> com dois elementos: um <Text> com o texto "Clique abaixo", e um <Pressable> com o texto "Clique aqui" que ao ser pressionado executa a função recebida no argumento "comando".
*/
import { View, Text, StyleSheet, Pressable} from 'react-native';
import Botao from '../styles/main';

export default function AtvBotaoAcaoExterna({comando}) {
    return(<View>
        <Pressable style={estilo.button} 
        comando=[() => console.log("comando")]
        <Text>
        </Text>
        </Pressable>
        </View>)
}
