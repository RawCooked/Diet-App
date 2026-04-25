import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { TIPS } from '../data';
import TipCard from '../components/TipCard';
import Header from '../components/Header';
import { THEME } from '../theme';

export default function TipsScreen() {
  return (
    <View style={styles.flex}>
      <Header />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.panelTitle}>Règles & Conseils</Text>
        <Text style={styles.panelSub}>Les fondamentaux pour réussir</Text>
        {TIPS.map((tip, i) => (
          <TipCard key={i} tip={tip} />
        ))}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  scroll: { flex: 1 },
  content: { padding: 14, paddingTop: 20, paddingBottom: 120 },
  panelTitle: {
    fontSize: 22,
    color: THEME.text,
    fontWeight: '600',
    marginBottom: 3,
  },
  panelSub: {
    fontSize: 11,
    color: THEME.muted,
    marginBottom: 16,
    letterSpacing: 0.3,
  },
});
