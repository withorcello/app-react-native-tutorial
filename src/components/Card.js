// src/components/Card.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../styles/theme';

const Card = ({ 
  title, 
  description, 
  icon, 
  onPress, 
  rightComponent, 
  elevation = 'medium' 
}) => {
  return (
    <TouchableOpacity 
      style={[styles.card, styles[`${elevation}Elevation`]]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.cardContent}>
        {icon && (
          <View style={styles.iconContainer}>
            <Ionicons name={icon} size={24} color={theme.COLORS.primary} />
          </View>
        )}
        
        <View style={styles.textContainer}>
          {title && <Text style={styles.title}>{title}</Text>}
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
        
        {rightComponent && (
          <View style={styles.rightComponentContainer}>
            {rightComponent}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.background.secondary,
    borderRadius: theme.RADIUS.md,
    marginBottom: theme.SPACING.md,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.SPACING.md,
  },
  // Diferentes níveis de elevação
  lowElevation: {
    ...theme.SHADOWS.small,
  },
  mediumElevation: {
    ...theme.SHADOWS.medium,
  },
  highElevation: {
    ...theme.SHADOWS.large,
  },
  // Estilos do conteúdo
  iconContainer: {
    marginRight: theme.SPACING.md,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: theme.FONT.size.md,
    fontWeight: 'bold',
    color: theme.COLORS.text.primary,
    marginBottom: 4,
  },
  description: {
    fontSize: theme.FONT.size.sm,
    color: theme.COLORS.text.secondary,
  },
  rightComponentContainer: {
    marginLeft: theme.SPACING.sm,
  },
});

export default Card;