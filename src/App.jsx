//arquivo principal 
//qualquer mudança no arquivo src reflete no código
// linha 17 e 18 são reconhecidas pela função children (conteúdo)
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import root from './styles/main';
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvParagrafo from './components/AtvParagrafo';



export default function App() {
  return (
    <View style={styles.container}>
      <Divisoria>
        <Paragrafo conteudo="Sou um exemplo"/>
        <Botao/>
      </Divisoria>
      <text>Sou um texto novo</text>
      <StatusBar style="auto" />
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
