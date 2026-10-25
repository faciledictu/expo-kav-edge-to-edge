import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const variants = {
  // The example in docs/pages/guides/keyboard-handling.mdx today
  before: Platform.OS === 'ios' ? 'padding' : undefined,
  // The example after expo/expo#52032
  after: 'padding',
} as const;

type Variant = keyof typeof variants;

export default function App() {
  const [variant, setVariant] = useState<Variant>('before');
  const behavior = variants[variant];

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.screen}>
        <KeyboardAvoidingView
          // Remount on change, so no padding from the previous variant is left
          key={variant}
          behavior={behavior}
          style={styles.screen}
        >
          <View style={styles.content}>
            <Text style={styles.text}>
              {Platform.OS} {Platform.Version} · behavior=
              {behavior ?? 'undefined'}
            </Text>
            <View style={styles.row}>
              <Button
                title="Before"
                disabled={variant === 'before'}
                onPress={() => setVariant('before')}
              />
              <Button
                title="After"
                disabled={variant === 'after'}
                onPress={() => setVariant('after')}
              />
            </View>
            <Text style={styles.text}>
              Tap the input at the bottom. Before: on Android 15+ the keyboard
              covers it. After: it stays right above the keyboard on both
              platforms.
            </Text>
          </View>
          <TextInput placeholder="Type here..." style={styles.input} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { flex: 1, padding: 16, gap: 16 },
  row: { flexDirection: 'row', gap: 16 },
  text: { fontSize: 16 },
  input: {
    margin: 16,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#888',
  },
});
