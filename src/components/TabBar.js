import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { THEME } from '../theme';

const TABS = [
  { key: 'matin', icon: '🌅', label: 'Matin' },
  { key: 'midi', icon: '☀️', label: 'Midi' },
  { key: 'soir', icon: '🌙', label: 'Soir' },
  { key: 'collation', icon: '🍎', label: 'Collation' },
  { key: 'resume', icon: '📋', label: 'Résumé' },
  { key: 'exercices', icon: '💪', label: 'Sport' },
  { key: 'conseils', icon: '💡', label: 'Conseils' },
];

export default function TabBar({ activeTab, onSelect, selectedCount }) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {TABS.map(tab => {
          const isActive = activeTab === tab.key;
          const showBadge = tab.key === 'resume' && selectedCount > 0;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tab, isActive && styles.tabActive]}
              onPress={() => onSelect(tab.key)}
              activeOpacity={0.7}
            >
              {showBadge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{selectedCount}</Text>
                </View>
              )}
              <Text style={styles.tabIcon}>{tab.icon}</Text>
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.surface,
    borderTopWidth: 1,
    borderTopColor: THEME.border,
  },
  content: {
    paddingHorizontal: 4,
  },
  tab: {
    minWidth: 72,
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    position: 'relative',
  },
  tabActive: {
    borderBottomColor: THEME.accent,
  },
  tabIcon: {
    fontSize: 18,
    marginBottom: 3,
  },
  tabLabel: {
    fontSize: 10,
    color: THEME.muted,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  tabLabelActive: {
    color: THEME.accent,
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: THEME.accent2,
    borderRadius: 99,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 16,
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 8,
    color: '#000',
    fontWeight: '700',
  },
});
