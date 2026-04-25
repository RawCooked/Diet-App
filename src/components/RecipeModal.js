import React from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import { THEME } from '../theme';

const { height: SCREEN_H } = Dimensions.get('window');

export default function RecipeModal({ meal, onClose }) {
  return (
    <Modal
      visible={!!meal}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.box}>
              <View style={styles.handle} />
              {meal && (
                <>
                  <View style={styles.header}>
                    <Text style={styles.headerEmoji}>{meal.emoji}</Text>
                    <Text style={styles.headerTitle} numberOfLines={2}>{meal.name}</Text>
                    <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                      <Text style={styles.closeBtnText}>✕</Text>
                    </TouchableOpacity>
                  </View>

                  <ScrollView
                    style={styles.body}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.bodyContent}
                  >
                    <View style={styles.section}>
                      <Text style={styles.sectionTitle}>Ingrédients</Text>
                      {meal.ingredients.map((ing, i) => (
                        <View
                          key={i}
                          style={[
                            styles.ingRow,
                            i === meal.ingredients.length - 1 && styles.ingRowLast,
                          ]}
                        >
                          <View style={styles.ingDot} />
                          <Text style={styles.ingName}>{ing.n}</Text>
                          <Text style={styles.ingQty}>{ing.q}</Text>
                        </View>
                      ))}
                    </View>

                    <View style={styles.section}>
                      <Text style={styles.sectionTitle}>Préparation étape par étape</Text>
                      {meal.steps.map((step, i) => (
                        <View key={i} style={styles.stepRow}>
                          <View style={styles.stepNum}>
                            <Text style={styles.stepNumText}>{i + 1}</Text>
                          </View>
                          <Text style={styles.stepText}>{step}</Text>
                        </View>
                      ))}
                    </View>
                    <View style={{ height: 40 }} />
                  </ScrollView>
                </>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'flex-end',
  },
  box: {
    backgroundColor: THEME.surface,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: THEME.border,
    height: SCREEN_H * 0.84,
  },
  handle: {
    width: 34,
    height: 4,
    backgroundColor: THEME.border,
    borderRadius: 99,
    alignSelf: 'center',
    marginTop: 13,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: THEME.border,
    gap: 12,
  },
  headerEmoji: {
    fontSize: 28,
  },
  headerTitle: {
    flex: 1,
    fontSize: 17,
    color: THEME.text,
    fontWeight: '600',
    lineHeight: 22,
  },
  closeBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: THEME.surface2,
    borderWidth: 1,
    borderColor: THEME.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtnText: {
    color: THEME.muted,
    fontSize: 14,
  },
  body: {
    flex: 1,
  },
  bodyContent: {
    padding: 16,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: THEME.accent,
    marginBottom: 10,
  },
  ingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: THEME.border,
  },
  ingRowLast: {
    borderBottomWidth: 0,
  },
  ingDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: THEME.accent,
    flexShrink: 0,
  },
  ingName: {
    flex: 1,
    fontSize: 13,
    color: THEME.text,
    lineHeight: 18,
  },
  ingQty: {
    fontSize: 12,
    color: THEME.accent2,
    fontWeight: '600',
  },
  stepRow: {
    flexDirection: 'row',
    gap: 11,
    alignItems: 'flex-start',
    marginBottom: 13,
  },
  stepNum: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: THEME.surface2,
    borderWidth: 1,
    borderColor: THEME.border,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: 1,
  },
  stepNumText: {
    fontSize: 10,
    fontWeight: '600',
    color: THEME.accent,
  },
  stepText: {
    flex: 1,
    fontSize: 13,
    color: THEME.text,
    lineHeight: 20,
  },
});
