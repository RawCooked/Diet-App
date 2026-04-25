import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { EXERCISES } from '../data';
import ExerciseCard from '../components/ExerciseCard';
import Header from '../components/Header';
import { THEME } from '../theme';

export default function ExercisesScreen({ exDone, onToggle }) {
  return (
    <View style={styles.flex}>
      <Header />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.panelTitle}>Exercices à domicile</Text>
        <Text style={styles.panelSub}>Programme sans équipement — 4× par semaine</Text>

        <View style={styles.circuitCard}>
          <Text style={styles.circuitTitle}>🔥 Circuit recommandé · 4× par semaine</Text>
          <Text style={styles.circuitDesc}>
            Enchaîner tous les exercices ci-dessous. Repos 2 min entre les tours complets.
            Durée totale : 35–45 minutes. Les autres jours : 30 min de marche active minimum.
          </Text>
        </View>

        {EXERCISES.map(ex => (
          <ExerciseCard
            key={ex.id}
            exercise={ex}
            done={!!exDone[ex.id]}
            onToggle={onToggle}
          />
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
    marginBottom: 18,
    letterSpacing: 0.3,
  },
  circuitCard: {
    backgroundColor: THEME.surface,
    borderWidth: 1,
    borderColor: THEME.accent,
    borderRadius: THEME.radius,
    padding: 15,
    marginBottom: 18,
  },
  circuitTitle: {
    fontSize: 16,
    color: THEME.accent,
    fontWeight: '600',
    marginBottom: 5,
  },
  circuitDesc: {
    fontSize: 12,
    color: THEME.muted,
    lineHeight: 18,
  },
});
