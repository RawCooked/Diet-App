import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { THEME } from '../theme';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <View style={styles.dot} />
        <Text style={styles.title}>Régime · 30 Jours</Text>
      </View>
      <Text style={styles.sub}>Programme nutrition & exercices</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0f0f0ff7',
    borderBottomWidth: 1,
    borderBottomColor: THEME.border,
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: THEME.accent,
  },
  title: {
    fontSize: 20,
    color: THEME.text,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  sub: {
    fontSize: 10,
    color: THEME.muted,
    marginTop: 5,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});
