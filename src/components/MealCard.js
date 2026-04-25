import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { THEME } from '../theme';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const EXPAND_ANIM = {
  duration: 280,
  create:  { type: LayoutAnimation.Types.easeInEaseOut, property: LayoutAnimation.Properties.opacity },
  update:  { type: LayoutAnimation.Types.easeInEaseOut },
  delete:  { type: LayoutAnimation.Types.easeInEaseOut, property: LayoutAnimation.Properties.opacity },
};

export default function MealCard({ meal, selected, onToggle, onOpenRecipe }) {
  const handleToggle = () => {
    LayoutAnimation.configureNext(EXPAND_ANIM);
    onToggle(meal.id);
  };

  return (
    <View style={[styles.card, selected && styles.cardSelected]}>
      <TouchableOpacity style={styles.head} onPress={handleToggle} activeOpacity={0.7}>
        <Text style={styles.emoji}>{meal.emoji}</Text>
        <View style={styles.info}>
          <Text style={styles.name}>{meal.name}</Text>
          <Text style={styles.desc} numberOfLines={1}>{meal.desc}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.kcal}>{meal.kcal} kcal</Text>
          <View style={[styles.check, selected && styles.checkSelected]}>
            {selected && <Text style={styles.checkMark}>✓</Text>}
          </View>
        </View>
      </TouchableOpacity>

      {selected && (
        <View style={styles.body}>
          <Text style={styles.portionLabel}>Ma portion</Text>
          <View style={styles.portionsRow}>
            <View style={styles.portionBox}>
              <Text style={styles.portionKey}>Poids</Text>
              <Text style={styles.portionVal}>{meal.grams}</Text>
              <Text style={styles.portionUnit}>grammes</Text>
            </View>
            <View style={styles.portionBox}>
              <Text style={styles.portionKey}>Assiette</Text>
              <Text style={styles.portionVal}>{meal.bowl}</Text>
              <Text style={styles.portionUnit}>contenant</Text>
            </View>
            <View style={styles.portionBox}>
              <Text style={styles.portionKey}>Volume</Text>
              <Text style={styles.portionVal}>
                {meal.volume !== '—' ? meal.volume.replace(/ ?ml/, '') : '—'}
              </Text>
              <Text style={styles.portionUnit}>
                {meal.volume !== '—' ? 'millilitres' : '(solide)'}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.recipeBtn}
            onPress={() => onOpenRecipe(meal)}
            activeOpacity={0.7}
          >
            <Text style={styles.recipeBtnText}>📖 Recette & ingrédients</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.surface,
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: THEME.radius,
    overflow: 'hidden',
    marginBottom: 9,
  },
  cardSelected: {
    borderColor: THEME.accent,
    elevation: 4,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    gap: 11,
  },
  emoji: { fontSize: 24 },
  info: { flex: 1, minWidth: 0 },
  name: {
    fontSize: 15,
    color: THEME.text,
    fontWeight: '600',
    lineHeight: 20,
  },
  desc: {
    fontSize: 11,
    color: THEME.muted,
    marginTop: 2,
    lineHeight: 16,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexShrink: 0,
  },
  kcal: { fontSize: 11, color: THEME.accent2, fontWeight: '600' },
  check: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: THEME.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkSelected: { backgroundColor: THEME.accent, borderColor: THEME.accent },
  checkMark: { fontSize: 10, color: '#000', fontWeight: '700' },
  body: {
    borderTopWidth: 1,
    borderTopColor: THEME.border,
    padding: 14,
  },
  portionLabel: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: THEME.muted,
    marginBottom: 7,
  },
  portionsRow: { flexDirection: 'row', gap: 6, marginBottom: 10 },
  portionBox: {
    flex: 1,
    backgroundColor: THEME.surface2,
    borderWidth: 1,
    borderColor: THEME.border,
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
  },
  portionKey: {
    fontSize: 9,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: THEME.muted,
    marginBottom: 3,
  },
  portionVal: {
    fontSize: 16,
    color: THEME.accent,
    fontWeight: '600',
    textAlign: 'center',
  },
  portionUnit: { fontSize: 9, color: THEME.muted, marginTop: 1, textAlign: 'center' },
  recipeBtn: {
    borderWidth: 1,
    borderColor: '#3a3118',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  recipeBtnText: { fontSize: 12, color: THEME.accent2, fontWeight: '500' },
});
