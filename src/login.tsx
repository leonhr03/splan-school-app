import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from './context/ThemeContext.tsx';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Input from './components/Input.tsx';
import Button from './components/Button.tsx';
import { ThemeColors } from './assets/colors.ts';

function Login() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const [name, setName] = useState('');
  const styles = createStyles(colors);

  const canContinue = name.trim().length > 0;

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoiding}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top : 0}>
        <View style={styles.hero}>
          <Text style={styles.brand}>Splan</Text>
          <Text style={styles.tagline}>Dein Schulalltag, organisiert.</Text>
        </View>

        <View style={styles.sheet}>
          <Text style={styles.title}>Willkommen</Text>
          <Text style={styles.subtitle}>
            Gib deinen Namen ein, um loszulegen.
          </Text>

          <Input
            label="Name"
            value={name}
            onChange={setName}
            placeholder="z. B. Max Mustermann"
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="done"
            onSubmitEditing={() => {
              if (canContinue) {
                Alert.alert(name);
              }
            }}
          />

          <Button
            label="Weiter"
            disabled={!canContinue}
            onPress={() => {
              Alert.alert(name);
            }}
          />
        </View>
    </KeyboardAvoidingView>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    keyboardAvoiding: {
      flex: 1,
      backgroundColor: colors.card,
    },

    scroll: {
      flexGrow: 1,
      backgroundColor: colors.card,
    },

    hero: {
      flexGrow: 1,
      minHeight: 240,
      paddingHorizontal: 24,
      paddingVertical: 32,
      alignItems: 'center',
      justifyContent: 'center',
    },

    logo: {
      width: 76,
      height: 76,
      borderRadius: 22,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18,
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.35,
      shadowRadius: 16,
      elevation: 6,
    },

    logoText: {
      fontSize: 40,
      fontWeight: '800',
      color: colors.onPrimary,
    },

    brand: {
      fontSize: 30,
      fontWeight: '800',
      letterSpacing: -0.5,
      color: colors.text,
    },

    tagline: {
      marginTop: 8,
      fontSize: 15,
      color: colors.muted,
      textAlign: 'center',
    },

    sheet: {
      width: '100%',
      paddingTop: 20,
      paddingHorizontal: 24,
      paddingBottom: 28,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      backgroundColor: colors.background,
      gap: 18,
    },

    handle: {
      alignSelf: 'center',
      width: 44,
      height: 5,
      borderRadius: 3,
      backgroundColor: colors.border,
      marginBottom: 8,
    },

    title: {
      fontSize: 26,
      fontWeight: '700',
      letterSpacing: -0.3,
      color: colors.text,
    },

    subtitle: {
      marginTop: -10,
      fontSize: 15,
      lineHeight: 21,
      color: colors.muted,
    },
  });

export default Login;
