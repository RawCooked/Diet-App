import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { THEME } from '../theme';

const { width: W, height: H } = Dimensions.get('window');

const TABS = [
  { key: 'matin',     icon: '🌅', label: 'Matin' },
  { key: 'midi',      icon: '☀️', label: 'Midi' },
  { key: 'soir',      icon: '🌙', label: 'Soir' },
  { key: 'collation', icon: '🍎', label: 'Snack' },
  { key: 'resume',    icon: '📋', label: 'Résumé' },
  { key: 'exercices', icon: '💪', label: 'Sport' },
  { key: 'conseils',  icon: '💡', label: 'Tips' },
];

const BUBBLE_SIZE = 54;
const FAB_SIZE    = 62;
const FAB_BOTTOM  = 34;
const RADIUS      = 128;
const N           = TABS.length;

// Semicircle arc: -160° (left) → -20° (right)
const POSITIONS = TABS.map((_, i) => {
  const deg = -160 + (i * 140) / (N - 1);
  const rad = deg * (Math.PI / 180);
  return {
    x: Math.round(RADIUS * Math.cos(rad)),
    y: Math.round(RADIUS * Math.sin(rad)),
  };
});

// FAB screen-center coordinates (absolute, from top-left)
const FAB_CX = W / 2;
const FAB_CY = H - FAB_BOTTOM - FAB_SIZE / 2;

export default function FloatingNav({ activeTab, onSelect, selectedCount }) {
  const [open, setOpen] = useState(false);

  const backdropAnim = useRef(new Animated.Value(0)).current;
  const fabRotAnim   = useRef(new Animated.Value(0)).current;
  const bubbleAnims  = useRef(TABS.map(() => new Animated.Value(0))).current;

  const openMenu = useCallback(() => {
    setOpen(true);
    Animated.parallel([
      Animated.timing(backdropAnim, { toValue: 1, duration: 220, useNativeDriver: true }),
      Animated.timing(fabRotAnim,   { toValue: 1, duration: 220, useNativeDriver: true }),
      ...bubbleAnims.map((anim, i) =>
        Animated.spring(anim, {
          toValue: 1,
          delay: i * 38,
          tension: 65,
          friction: 7,
          useNativeDriver: true,
        })
      ),
    ]).start();
  }, [backdropAnim, fabRotAnim, bubbleAnims]);

  const closeMenu = useCallback((cb) => {
    Animated.parallel([
      Animated.timing(backdropAnim, { toValue: 0, duration: 180, useNativeDriver: true }),
      Animated.timing(fabRotAnim,   { toValue: 0, duration: 180, useNativeDriver: true }),
      ...bubbleAnims.map((anim, i) =>
        Animated.timing(anim, {
          toValue: 0,
          duration: 160,
          delay: (N - 1 - i) * 22,
          useNativeDriver: true,
        })
      ),
    ]).start(() => {
      setOpen(false);
      cb?.();
    });
  }, [backdropAnim, fabRotAnim, bubbleAnims]);

  const toggle = useCallback(() => {
    open ? closeMenu() : openMenu();
  }, [open, openMenu, closeMenu]);

  const handleSelect = useCallback((key) => {
    closeMenu(() => onSelect(key));
  }, [closeMenu, onSelect]);

  const fabRotDeg = fabRotAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const current = TABS.find(t => t.key === activeTab);

  return (
    <View style={styles.root} pointerEvents="box-none">

      {/* ── Backdrop ── */}
      <Animated.View
        style={[styles.backdrop, { opacity: backdropAnim }]}
        pointerEvents={open ? 'auto' : 'none'}
      >
        <TouchableWithoutFeedback onPress={() => closeMenu()}>
          <View style={StyleSheet.absoluteFill} />
        </TouchableWithoutFeedback>
      </Animated.View>

      {/* ── Bubbles ── */}
      {TABS.map((tab, i) => {
        const pos      = POSITIONS[i];
        const isActive = activeTab === tab.key;
        const hasBadge = tab.key === 'resume' && selectedCount > 0;

        const translateX = bubbleAnims[i].interpolate({ inputRange: [0, 1], outputRange: [0, pos.x] });
        const translateY = bubbleAnims[i].interpolate({ inputRange: [0, 1], outputRange: [0, pos.y] });

        return (
          <Animated.View
            key={tab.key}
            pointerEvents={open ? 'auto' : 'none'}
            style={[
              styles.bubbleWrap,
              {
                left: FAB_CX - BUBBLE_SIZE / 2,
                top:  FAB_CY - BUBBLE_SIZE / 2,
                transform: [
                  { translateX },
                  { translateY },
                  { scale: bubbleAnims[i] },
                ],
                opacity: bubbleAnims[i],
              },
            ]}
          >
            <TouchableOpacity
              style={[styles.bubble, isActive && styles.bubbleActive]}
              onPress={() => handleSelect(tab.key)}
              activeOpacity={0.8}
            >
              <Text style={styles.bubbleIcon}>{tab.icon}</Text>
              {hasBadge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{selectedCount}</Text>
                </View>
              )}
            </TouchableOpacity>
            <Text style={[styles.bubbleLabel, isActive && styles.bubbleLabelActive]}>
              {tab.label}
            </Text>
          </Animated.View>
        );
      })}

      {/* ── FAB ── */}
      <TouchableOpacity
        style={[
          styles.fab,
          open && styles.fabOpen,
          {
            position: 'absolute',
            bottom: FAB_BOTTOM,
            left: FAB_CX - FAB_SIZE / 2,
          },
        ]}
        onPress={toggle}
        activeOpacity={0.85}
      >
        <Animated.Text style={[styles.fabIcon, { transform: [{ rotate: fabRotDeg }] }]}>
          {current?.icon ?? '☰'}
        </Animated.Text>
        {!open && (
          <Text style={styles.fabLabel} numberOfLines={1}>
            {current?.label}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: 200,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.65)',
    zIndex: 1,
  },
  bubbleWrap: {
    position: 'absolute',
    width: BUBBLE_SIZE,
    alignItems: 'center',
    zIndex: 3,
  },
  bubble: {
    width: BUBBLE_SIZE,
    height: BUBBLE_SIZE,
    borderRadius: BUBBLE_SIZE / 2,
    backgroundColor: THEME.surface,
    borderWidth: 1.5,
    borderColor: THEME.border,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
  },
  bubbleActive: {
    backgroundColor: THEME.accent,
    borderColor: THEME.accent,
  },
  bubbleIcon: {
    fontSize: 22,
  },
  bubbleLabel: {
    fontSize: 9,
    color: THEME.muted,
    marginTop: 5,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    textAlign: 'center',
    width: 64,
  },
  bubbleLabelActive: {
    color: THEME.accent,
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: THEME.accent2,
    borderRadius: 99,
    paddingHorizontal: 4,
    paddingVertical: 1,
    minWidth: 14,
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 7,
    color: '#000',
    fontWeight: '700',
  },
  fab: {
    width: FAB_SIZE,
    height: FAB_SIZE,
    borderRadius: FAB_SIZE / 2,
    backgroundColor: THEME.accent,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
    elevation: 12,
    shadowColor: THEME.accent,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
  },
  fabOpen: {
    backgroundColor: THEME.surface2,
    borderWidth: 1.5,
    borderColor: THEME.border,
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  fabIcon: {
    fontSize: 22,
  },
  fabLabel: {
    fontSize: 9,
    color: '#111',
    fontWeight: '700',
    letterSpacing: 0.3,
    marginTop: 1,
  },
});
