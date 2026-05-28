import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Alert } from 'react-native';
import root from './styles/main';
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';

export default function App() {
  return (
    <View style={styles.container}>
      <Divisoria>
        <Paragrafo conteudo="Sou um exemplo"/>
        <Botao/>
      </Divisoria>
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