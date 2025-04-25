// src/components/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';

const Button = ({ title, onPress, type = 'primary', size = 'medium', disabled = false }) => {
  const buttonStyles = [
    styles.button,
    styles[`${type}Button`],
    styles[`${size}Button`],
    disabled && styles.disabledButton
  ];
  
  const textStyles = [
    styles.text,
    styles[`${type}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText
  ];
  
  return (
    <TouchableOpacity 
      style={buttonStyles} 
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Tipos de botões
  primaryButton: {
    backgroundColor: theme.COLORS.primary,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.COLORS.primary,
  },
  accentButton: {
    backgroundColor: theme.COLORS.accent,
  },
  // Tamanhos de botões
  smallButton: {
    paddingVertical: theme.SPACING.xs,
    paddingHorizontal: theme.SPACING.md,
  },
  mediumButton: {
    paddingVertical: theme.SPACING.sm,
    paddingHorizontal: theme.SPACING.lg,
  },
  largeButton: {
    paddingVertical: theme.SPACING.md,
    paddingHorizontal: theme.SPACING.xl,
  },
  // Estilo de texto
  text: {
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: theme.COLORS.primary,
  },
  accentText: {
    color: '#121212',
  },
  // Tamanhos de texto
  smallText: {
    fontSize: theme.FONT.size.sm,
  },
  mediumText: {
    fontSize: theme.FONT.size.md,
  },
  largeText: {
    fontSize: theme.FONT.size.lg,
  },
  // Estados desabilitados
  disabledButton: {
    backgroundColor: theme.COLORS.background.tertiary,
    borderColor: 'transparent',
  },
  disabledText: {
    color: theme.COLORS.text.disabled,
  },
});

export default Button;