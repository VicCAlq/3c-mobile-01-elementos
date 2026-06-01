/*
[ATIVIDADE DIVISÓRIA]

Crie e exporte por padrão um componente chamado "AtvDivisoria" que recebe um argumento "largura", cujo valor pode ser entre 10 e 90. O componente deve exibir uma <View> que ocupe 90% da largura da tela visível (use a propriedade "width" com o valor "90vw" para isso), e dentro desta <View> devem ter duas outras <View> exibidas lado a lado. A <View> da esquerda deve ocupar uma percentagem da <View> inicial, essa percentagem é determinada pelo argumento "largura". A <View> da direita deve ocupar a largura restante da <View> inicial. Exemplo:

argumento largura = 30
<View> inicial = 90% da largura da tela
<View> esquerda = 30% da largura da View inicial (30% de 90% da largura da tela)
<View> direita = 70% da largura da View inicial (70% de 90% da largura da  tela)
*/

import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function AtvDivisoria({largura}){
    return(
        <View style={{
            width:"90%", 
            height: "80vh", 
            backgroundColor: "blue", 
            margin: "2,5%", 
            borderRadius:"50px",
            justifyContent: "center",
            alignContent:"center",
            display: "flex",
            gap: "20px"
            }}>
            <View style={{
                width: (largura * 0.9), 
                backgroundColor:"yellow"
                }}> {largura}
            </View>
            <View style={{
                width:((100 - largura) * 0.9),
                backgroundColor: "red"
            }}>
                {largura - 90}
            </View>
        </View>
    );
}