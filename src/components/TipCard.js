import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { THEME } from '../theme';

export default function TipCard({ tip }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{tip.icon}</Text>
      <Text style={styles.title}>{tip.title}</Text>
      <Text style={styles.text}>{tip.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.surface,
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: THEME.radius,
    padding: 14,
    marginBottom: 9,
  },
  icon: {
    fontSize: 22,
    marginBottom: 7,
  },
  title: {
    fontSize: 15,
    color: THEME.text,
    fontWeight: '600',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    color: THEME.muted,
    lineHeight: 19,
  },
});
