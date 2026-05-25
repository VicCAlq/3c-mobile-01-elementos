/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado 
"AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <View> 
com dois elementos: um <Text> com o texto "Clique abaixo", e um <Pressable> com o texto "Clique aqui" que ao ser clicado 
exibe um alerta com o texto "Fui clicado!"
*/

import { View, Pressable, Text, Alert} from 'react-native';
import root from '../styles/main';


export default function AtvBotaoAcaoInterna ({}) {
    return(
        <View>
            <Text>Clique abaixo</Text>
            <Pressable
            On Press = {() => Alert.alert('Fui Clicado!')}>
            </Pressable>
        </View>
    )
}


