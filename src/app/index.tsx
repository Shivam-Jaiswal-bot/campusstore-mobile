import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomTabInset } from '@/constants/theme';

// Assignment 1 — static CampusStore Home screen.
// Only core RN primitives: View, Text, TextInput, ScrollView, SafeAreaView, StyleSheet.
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      {/* Header: brand on the left, campus location on the right (flexDirection: 'row') */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.brandBlock}>
            <Text style={styles.appName}>CampusStore</Text>
            <Text style={styles.tagline}>Ready for your next class</Text>
          </View>

          <View style={styles.locationBadge}>
            <Text style={styles.locationLabel}>Pickup at</Text>
            <Text style={styles.locationText}>Student Centre, Gate 2</Text>
          </View>
        </View>

        {/* Search area — uncontrolled for A1 (state comes in A2) */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search notebooks, snacks, bottles, lamps..."
          placeholderTextColor="#7A8699"
          accessibilityLabel="Search campus essentials"
          returnKeyType="search"
        />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        {/* Shop by Category — title + intro only (cards arrive in A2) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>
          <Text style={styles.sectionText}>
            Everything a student needs between lectures, labs and late-night study sessions —
            stationery, snacks, study gear, water bottles and hostel room essentials, all
            available on campus.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Browse first, shop smart</Text>
          <Text style={styles.infoText}>
            Category cards will appear here soon. Explore what is stocked before you walk over to
            the store.
          </Text>
        </View>

        <View style={styles.hoursRow}>
          <View style={styles.hoursItem}>
            <Text style={styles.hoursLabel}>Opens</Text>
            <Text style={styles.hoursValue}>8:00 AM</Text>
          </View>
          <View style={styles.hoursItem}>
            <Text style={styles.hoursLabel}>Closes</Text>
            <Text style={styles.hoursValue}>10:00 PM</Text>
          </View>
          <View style={styles.hoursItem}>
            <Text style={styles.hoursLabel}>Days</Text>
            <Text style={styles.hoursValue}>Mon – Sat</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const COLORS = {
  navy: '#1B2A4A',
  amber: '#F5B700',
  background: '#F4F6FA',
  surface: '#FFFFFF',
  textDark: '#1B2A4A',
  textMuted: '#55627A',
  border: '#DDE3EC',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.navy,
  },
  header: {
    backgroundColor: COLORS.navy,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
    gap: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  brandBlock: {
    flex: 1,
  },
  appName: {
    color: COLORS.amber,
    fontSize: 26,
    fontWeight: '800',
  },
  tagline: {
    color: '#E6ECF5',
    fontSize: 14,
    marginTop: 2,
  },
  locationBadge: {
    flexShrink: 1,
    maxWidth: '45%',
    backgroundColor: '#2C3E63',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
  },
  locationLabel: {
    color: '#AEB9CC',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  locationText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'right',
  },
  searchInput: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: COLORS.textDark,
  },
  scroll: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: 20,
    gap: 20,
    paddingBottom: BottomTabInset + 24,
  },
  section: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  sectionText: {
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.textMuted,
  },
  infoCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.amber,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: 6,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textMuted,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  hoursItem: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  hoursLabel: {
    fontSize: 12,
    color: COLORS.textMuted,
  },
  hoursValue: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textDark,
    marginTop: 2,
  },
});
