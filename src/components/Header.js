// src/components/Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../styles/theme';

const Header = ({ 
  title, 
  leftIcon, 
  rightIcon, 
  onLeftPress, 
  onRightPress, 
  subtitle 
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        {leftIcon && (
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={onLeftPress}
          >
            <Ionicons name={leftIcon} size={24} color={theme.COLORS.text.primary} />
          </TouchableOpacity>
        )}
      </View>
      
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {subtitle && (
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        )}
      </View>
      
      <View style={styles.rightContainer}>
        {rightIcon && (
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={onRightPress}
          >
            <Ionicons name={rightIcon} size={24} color={theme.COLORS.text.primary} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: theme.SPACING.md,
    backgroundColor: theme.COLORS.background.secondary,
  },
  leftContainer: {
    width: 40,
    alignItems: 'flex-start',
  },
  rightContainer: {
    width: 40,
    alignItems: 'flex-end',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: theme.FONT.size.lg,
    fontWeight: 'bold',
    color: theme.COLORS.text.primary,
  },
  subtitle: {
    fontSize: theme.FONT.size.xs,
    color: theme.COLORS.text.secondary,
    marginTop: 2,
  },
  iconButton: {
    padding: theme.SPACING.xs,
  },
});

export default Header;