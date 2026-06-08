import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

export default function AtvBotaoAcaoInterna() {
  const lidarComClique = () => {
    Alert.alert('Fui clicado!');
  };

  return (
    <View>
      <Text>Clique abaixo</Text>
      <Pressable onPress={lidarComClique}>
        <Text>Clique aqui</Text>
      </Pressable>
    </View>
  );
}
