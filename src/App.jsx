import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import root from './styles/main';
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna';
import AtvParagrafo from './components/AtvParagrafo';
import AtvDivisoria from './components/AtvDivisoria';
import AtvBotaoAcaoExterna from './components/AtvBotaoAcaoExterna';
export default function App() {
  return (
    <View style={styles.container}>
      <Divisoria>
        <Paragrafo conteudo="Sou um exemplo"/>
        <Botao/>
      </Divisoria>
  
      <StatusBar style="auto" />
      <View>
        <AtvBotaoAcaoExterna comando={() => {Alert.alert("Fui clicado!")}}></AtvBotaoAcaoExterna>
       <AtvDivisoria largura={40}></AtvDivisoria>
        <AtvParagrafo titulo={"um paragrafo"} conteudo={"algo,algo,algo..."}></AtvParagrafo>
        <AtvBotaoAcaoInterna>
          </AtvBotaoAcaoInterna>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: root.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: root.colors.texto
  }
});
