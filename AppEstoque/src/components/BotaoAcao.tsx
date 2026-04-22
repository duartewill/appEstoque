import React from 'react';
import { Button } from 'react-native';

type Props = {
  titulo: string;
  onPress: () => void;
};

export default function BotaoAcao({ titulo, onPress }: Props) {
  return <Button title={titulo} onPress={onPress} />;
}