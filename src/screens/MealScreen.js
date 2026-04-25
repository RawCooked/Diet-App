import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data';
import MealCard from '../components/MealCard';
import Header from '../components/Header';
import { THEME } from '../theme';

const META = {
  matin:     { title: 'Petit-déjeuner', sub: 'Choisissez un repas · Appuyez pour sélectionner' },
  midi:      { title: 'Déjeuner',       sub: 'Repas principal — à ne pas négliger' },
  soir:      { title: 'Dîner',          sub: 'Léger, avant 20h de préférence' },
  collation: { title: 'Collation',      sub: 'Optionnelle — si faim entre les repas' },
};

export default function MealScreen({ repas, selectedId, onToggle, onOpenRecipe }) {
  const meals = MEALS[repas] || [];
  const { title, sub } = META[repas] || {};

  return (
    <View style={styles.flex}>
      <Header />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.panelTitle}>{title}</Text>
        <Text style={styles.panelSub}>{sub}</Text>
        {meals.map(meal => (
          <MealCard
            key={meal.id}
            meal={meal}
            selected={selectedId === meal.id}
            onToggle={onToggle}
            onOpenRecipe={onOpenRecipe}
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
    marginBottom: 16,
    letterSpacing: 0.3,
  },
});
