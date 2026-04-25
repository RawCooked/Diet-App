import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { THEME } from '../theme';

const LEVELS = {
  debutant: {
    label: 'Débutant',
    bg: 'rgba(143,184,122,0.12)',
    color: '#8fb87a',
    border: 'rgba(143,184,122,0.25)',
  },
  moyen: {
    label: 'Modéré',
    bg: 'rgba(201,169,110,0.12)',
    color: '#c9a96e',
    border: 'rgba(201,169,110,0.25)',
  },
  intense: {
    label: 'Intense',
    bg: 'rgba(192,97,74,0.12)',
    color: '#c0614a',
    border: 'rgba(192,97,74,0.25)',
  },
};

export default function ExerciseCard({ exercise, done, onToggle }) {
  const lvl = LEVELS[exercise.level] || LEVELS.debutant;

  return (
    <View style={styles.card}>
      <View style={styles.head}>
        <Text style={styles.emoji}>{exercise.emoji}</Text>
        <Text style={styles.name}>{exercise.name}</Text>
        <View style={[styles.tag, { backgroundColor: lvl.bg, borderColor: lvl.border }]}>
          <Text style={[styles.tagText, { color: lvl.color }]}>{lvl.label}</Text>
        </View>
      </View>

      <Text style={styles.desc}>{exercise.desc}</Text>

      <View style={styles.sets}>
        <View style={styles.setBox}>
          <Text style={styles.setLabel}>Séries</Text>
          <Text style={styles.setVal}>{exercise.series}</Text>
        </View>
        <View style={styles.setBox}>
          <Text style={styles.setLabel}>Répétitions</Text>
          <Text style={[styles.setVal, { fontSize: 13 }]}>{exercise.reps}</Text>
        </View>
        <View style={styles.setBox}>
          <Text style={styles.setLabel}>Repos</Text>
          <Text style={[styles.setVal, { fontSize: 12 }]}>{exercise.repos}</Text>
        </View>
      </View>

      <View style={styles.tip}>
        <Text style={styles.tipLine}>
          <Text style={styles.tipMusclesLabel}>Muscles : </Text>
          <Text style={{ color: THEME.accent2 }}>{exercise.muscles}</Text>
        </Text>
        <Text style={styles.tipText}>{exercise.tip}</Text>
      </View>

      <TouchableOpacity
        style={[styles.doneBtn, done && styles.doneBtnDone]}
        onPress={() => onToggle(exercise.id)}
        activeOpacity={0.7}
      >
        <Text style={[styles.doneBtnText, done && styles.doneBtnTextDone]}>
          {done ? '✓ Exercice terminé' : 'Marquer comme fait'}
        </Text>
      </TouchableOpacity>
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
    marginBottom: 10,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 9,
  },
  emoji: {
    fontSize: 22,
  },
  name: {
    flex: 1,
    fontSize: 15,
    color: THEME.text,
    fontWeight: '600',
  },
  tag: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 99,
    borderWidth: 1,
  },
  tagText: {
    fontSize: 9,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  desc: {
    fontSize: 12,
    color: THEME.muted,
    lineHeight: 18,
    marginBottom: 11,
  },
  sets: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 10,
  },
  setBox: {
    flex: 1,
    backgroundColor: THEME.surface2,
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
  },
  setLabel: {
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: THEME.muted,
    marginBottom: 3,
    textAlign: 'center',
  },
  setVal: {
    fontSize: 16,
    color: THEME.accent,
    fontWeight: '600',
    textAlign: 'center',
  },
  tip: {
    borderLeftWidth: 2,
    borderLeftColor: THEME.border,
    paddingLeft: 9,
    marginBottom: 10,
  },
  tipLine: {
    fontSize: 12,
    marginBottom: 5,
    color: THEME.text,
  },
  tipMusclesLabel: {
    color: THEME.text,
    fontWeight: '600',
  },
  tipText: {
    fontSize: 11,
    color: THEME.muted,
    lineHeight: 17,
  },
  doneBtn: {
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: 9,
    padding: 9,
    alignItems: 'center',
  },
  doneBtnDone: {
    borderColor: THEME.accent,
    backgroundColor: 'rgba(143,184,122,0.06)',
  },
  doneBtnText: {
    fontSize: 12,
    color: THEME.muted,
    fontWeight: '500',
  },
  doneBtnTextDone: {
    color: THEME.accent,
  },
});
