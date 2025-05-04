// src/screens/LessonsScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';
import { lessons } from '../data/lessons';
import theme from '../styles/theme';

const LessonsScreen = ({ navigation }) => {
  const renderLesson = ({ item }) => {
    const rightComponent = (
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{item.duration}</Text>
      </View>
    );
    
    return (
      <Card
        title={item.title}
        description={item.description}
        icon={item.icon}
        rightComponent={rightComponent}
        onPress={() => navigation.navigate('LessonDetail', { 
          lessonId: item.id,
          title: item.title 
        })}
      />
    );
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lições</Text>
        <Text style={styles.subtitle}>Aprenda React Native passo a passo</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.introText}>
          Selecione uma lição para começar a aprender sobre React Native
          e o desenvolvimento de aplicativos móveis.
        </Text>
        
        <FlatList
          data={lessons}
          renderItem={renderLesson}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.background.primary,
  },
  header: {
    backgroundColor: theme.COLORS.background.primary,
    paddingVertical: theme.SPACING.lg,
    paddingHorizontal: theme.SPACING.lg,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D2D',
  },
  title: {
    color: theme.COLORS.text.primary,
    fontSize: theme.FONT.size.xl,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: theme.SPACING.xs,
  },
  subtitle: {
    color: theme.COLORS.text.secondary,
    fontSize: theme.FONT.size.sm,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: theme.SPACING.lg,
  },
  introText: {
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.text.secondary,
    marginBottom: theme.SPACING.lg,
    lineHeight: 22,
  },
  listContainer: {
    paddingBottom: theme.SPACING.xl,
  },
  durationContainer: {
    backgroundColor: theme.COLORS.background.tertiary,
    paddingHorizontal: theme.SPACING.sm,
    paddingVertical: theme.SPACING.xs,
    borderRadius: theme.RADIUS.sm,
  },
  durationText: {
    color: theme.COLORS.text.secondary,
    fontSize: theme.FONT.size.xs,
    fontWeight: '500',
  },
});

export default LessonsScreen;