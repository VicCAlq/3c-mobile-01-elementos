/*
[ATIVIDADE BOTÃO COM AÇÃO EXTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoExterna" que recebe como argumento uma função chamada "comando". Este componente deve exibir uma <View> com dois elementos: um <Text> com o texto "Clique abaixo", e um <Pressable> com o texto "Clique aqui" que ao ser pressionado executa a função recebida no argumento "comando".
*/

import { View, Pressable, Text, StyleSheet } from 'react-native';
import root from '../styles/main';

export default function AtvBotaoAcaoExterna({comando}){

    const comando(){

    }
    return(
        <View>
            <Text> {comando} </Text>
        </View>
    )
}