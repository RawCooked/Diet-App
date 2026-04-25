import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MEALS } from '../data';
import Header from '../components/Header';
import { THEME } from '../theme';

const LABELS = {
  matin:     'Petit-déjeuner',
  midi:      'Déjeuner',
  soir:      'Dîner',
  collation: 'Collation',
};

export default function SummaryScreen({ selected, onReset }) {
  const selections = Object.entries(selected)
    .map(([repas, id]) => {
      if (!id) return null;
      const meal = MEALS[repas]?.find(m => m.id === id);
      return meal ? { repas, meal } : null;
    })
    .filter(Boolean);

  const total = selections.reduce((sum, { meal }) => sum + meal.kcal, 0);
  const pct = Math.min(100, Math.round((total / 1650) * 100));
  const isOver = total > 1800;
  const barColor = isOver ? THEME.accent2 : THEME.accent;

  return (
    <View style={styles.flex}>
      <Header />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.panelTitle}>Résumé du jour</Text>
        <Text style={styles.panelSub}>Repas sélectionnés et total calorique</Text>

        {selections.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>🍽️</Text>
            <Text style={styles.emptyText}>
              Aucun repas sélectionné.{'\n'}
              Choisissez vos repas dans les onglets{'\n'}
              pour voir le résumé journalier.
            </Text>
          </View>
        ) : (
          <>
            <View style={styles.calCard}>
              <View style={styles.calRow}>
                <Text style={styles.calLabel}>Total calories du jour</Text>
                <Text style={[styles.calNum, { color: barColor }]}>{total} kcal</Text>
              </View>
              <View style={styles.calTrack}>
                <View style={[styles.calFill, { width: `${pct}%`, backgroundColor: barColor }]} />
              </View>
              <Text style={styles.calTarget}>
                Objectif : 1 400 – 1 700 kcal/jour · {pct}% atteint
              </Text>
            </View>

            {selections.map(({ repas, meal }) => (
              <View key={repas} style={styles.sumSection}>
                <Text style={styles.sumLabel}>{LABELS[repas]}</Text>
                <View style={styles.sumItem}>
                  <Text style={styles.sumEmoji}>{meal.emoji}</Text>
                  <Text style={styles.sumName}>{meal.name}</Text>
                  <Text style={styles.sumKcal}>{meal.kcal} kcal</Text>
                </View>
              </View>
            ))}

            <TouchableOpacity style={styles.resetBtn} onPress={onReset} activeOpacity={0.7}>
              <Text style={styles.resetBtnText}>Réinitialiser la sélection</Text>
            </TouchableOpacity>
          </>
        )}
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
  empty: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  emptyIcon: {
    fontSize: 42,
    opacity: 0.4,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 13,
    color: THEME.muted,
    textAlign: 'center',
    lineHeight: 22,
  },
  calCard: {
    backgroundColor: THEME.surface,
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: THEME.radius,
    padding: 15,
    marginBottom: 14,
  },
  calRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  calLabel: {
    fontSize: 12,
    color: THEME.muted,
  },
  calNum: {
    fontSize: 24,
    fontWeight: '600',
  },
  calTrack: {
    backgroundColor: THEME.surface2,
    borderRadius: 99,
    height: 5,
    overflow: 'hidden',
  },
  calFill: {
    height: '100%',
    borderRadius: 99,
  },
  calTarget: {
    fontSize: 11,
    color: THEME.muted,
    marginTop: 7,
  },
  sumSection: {
    marginBottom: 14,
  },
  sumLabel: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: THEME.muted,
    marginBottom: 7,
  },
  sumItem: {
    backgroundColor: THEME.surface,
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: 12,
    padding: 11,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sumEmoji: {
    fontSize: 20,
  },
  sumName: {
    flex: 1,
    fontSize: 14,
    color: THEME.text,
    fontWeight: '500',
  },
  sumKcal: {
    fontSize: 11,
    color: THEME.accent2,
    fontWeight: '600',
  },
  resetBtn: {
    borderWidth: 1,
    borderColor: THEME.danger,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  resetBtnText: {
    color: THEME.danger,
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
});
