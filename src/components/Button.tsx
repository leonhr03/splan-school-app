import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext.tsx';
import { ThemeColors } from '../assets/colors.ts';

type params = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

function Button({ label, onPress, disabled = false }: params) {
  const { colors } = useTheme();

  const styles = createStyles(colors);

  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    button: {
      paddingVertical: 17,
      paddingHorizontal: 15,
      backgroundColor: colors.primary,
      borderRadius: 16,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 4,
    },

    buttonDisabled: {
      opacity: 0.45,
      shadowOpacity: 0,
      elevation: 0,
    },

    label: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.onPrimary,
    },
  });

export default Button;
