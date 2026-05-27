/*
[ATIVIDADE DIVISÓRIA]

Crie e exporte por padrão um componente chamado "AtvDivisoria" que recebe um argumento "largura",
 cujo valor pode ser entre 10 e 90. O componente deve exibir uma <View> que ocupe 90% da largura da 
 tela visível (use a propriedade "width" com o valor "90vw" para isso), e dentro desta <View> devem 
 ter duas outras <View> exibidas lado a lado. A <View> da esquerda deve ocupar uma percentagem da <View> 
 inicial, essa percentagem é determinada pelo argumento "largura". A <View> da direita deve ocupar a largura restante da <View> inicial. Exemplo:

argumento largura = 30
<View> inicial = 90% da largura da tela
<View> esquerda = 30% da largura da View inicial (30% de 90% da largura da tela)
<View> direita = 70% da largura da View inicial (70% de 90% da largura da  tela)
*/
import { View, StyleSheet } from "react-native"


const estilosDivisorias = StyleSheet.create({
inicial : {
    width: "90vw",
    display: "flex",
    flex: "wrap",
     backgroundColor: 'red',
     
},
esquerda : {
    width: "30vw",
     backgroundColor: 'black'
},
direita : {
    width: "70vw",
    backgroundColor: 'white'
}
})
export default function AtvDivisoria(largura) {
//const maxAltura = math.max = 90 
//const minAltura = math.min = 10
if (largura <= 90 || largura >= 10) {
    const largEsquerda = ((largura/100) * (90/100))



     return(
    
    <View style={estilosDivisorias.inicial}> 
        <View style={estilosDivisorias.esquerda}>{largura}</View>
        <View style={estilosDivisorias.direita}>{largura}</View>
    </View>

)
}
return(
    
    <View style={estilosDivisorias.inicial}> 
        <View style={estilosDivisorias.esquerda}>{largura}</View>
        <View style={estilosDivisorias.direita}>{largura}</View>
    </View>

)

   
}
//TERMINAR