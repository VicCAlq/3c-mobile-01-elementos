import React from 'react';
import { View, Text } from 'react-native';

export default function AtvParagrafo({ titulo, conteudo }) {
  return (
    <View>
      <Text style={{ fontSize: 32 }}>
        {titulo}
      </Text>
      <Text style={{ fontSize: 16 }}>
        {conteudo}
      </Text>
    </View>
  );
}
