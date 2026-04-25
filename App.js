import React, { useState, useRef, useCallback, useEffect } from 'react';
import { View, StatusBar, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { THEME } from './src/theme';
import FloatingNav from './src/components/FloatingNav';
import MealScreen from './src/screens/MealScreen';
import SummaryScreen from './src/screens/SummaryScreen';
import ExercisesScreen from './src/screens/ExercisesScreen';
import TipsScreen from './src/screens/TipsScreen';
import RecipeModal from './src/components/RecipeModal';

const INIT_SELECTED = { matin: null, midi: null, soir: null, collation: null };

export default function App() {
  const [activeTab, setActiveTab]   = useState('matin');
  const [selected, setSelected]     = useState(INIT_SELECTED);
  const [exDone, setExDone]         = useState({});
  const [modalMeal, setModalMeal]   = useState(null);
  const [ready, setReady]           = useState(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  // ── Persistence ──────────────────────────────────────────────────────────
  useEffect(() => {
    Promise.all([
      AsyncStorage.getItem('@selected'),
      AsyncStorage.getItem('@exDone'),
    ]).then(([s, e]) => {
      if (s) setSelected(JSON.parse(s));
      if (e) setExDone(JSON.parse(e));
    }).catch(() => {}).finally(() => setReady(true));
  }, []);

  useEffect(() => {
    if (ready) AsyncStorage.setItem('@selected', JSON.stringify(selected)).catch(() => {});
  }, [selected, ready]);

  useEffect(() => {
    if (ready) AsyncStorage.setItem('@exDone', JSON.stringify(exDone)).catch(() => {});
  }, [exDone, ready]);

  // ── Actions ───────────────────────────────────────────────────────────────
  const toggleMeal = useCallback((repas, id) => {
    setSelected(prev => ({ ...prev, [repas]: prev[repas] === id ? null : id }));
  }, []);

  const toggleEx = useCallback((id) => {
    setExDone(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const resetAll = useCallback(() => setSelected(INIT_SELECTED), []);

  // ── Tab switch with fade transition ───────────────────────────────────────
  const handleTabSelect = useCallback((key) => {
    Animated.timing(fadeAnim, { toValue: 0, duration: 90, useNativeDriver: true }).start(() => {
      setActiveTab(key);
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }).start();
    });
  }, [fadeAnim]);

  const selectedCount = Object.values(selected).filter(Boolean).length;

  if (!ready) return <View style={{ flex: 1, backgroundColor: THEME.bg }} />;

  const renderScreen = () => {
    switch (activeTab) {
      case 'matin':
      case 'midi':
      case 'soir':
      case 'collation':
        return (
          <MealScreen
            repas={activeTab}
            selectedId={selected[activeTab]}
            onToggle={(id) => toggleMeal(activeTab, id)}
            onOpenRecipe={setModalMeal}
          />
        );
      case 'resume':
        return <SummaryScreen selected={selected} onReset={resetAll} />;
      case 'exercices':
        return <ExercisesScreen exDone={exDone} onToggle={toggleEx} />;
      case 'conseils':
        return <TipsScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: THEME.bg }}>
      <StatusBar barStyle="light-content" backgroundColor={THEME.bg} />

      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        {renderScreen()}
      </Animated.View>

      <FloatingNav
        activeTab={activeTab}
        onSelect={handleTabSelect}
        selectedCount={selectedCount}
      />

      <RecipeModal meal={modalMeal} onClose={() => setModalMeal(null)} />
    </View>
  );
}
