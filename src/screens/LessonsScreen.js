// src/screens/LessonsScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
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
      <Header 
        title="Lições" 
        subtitle="Aprenda React Native passo a passo"
      />
      
      <View style={styles.content}>
        <Text style={styles.introText}>
          Selecione uma lição para começar a aprender sobre React Native
          e o desenvolvimento de aplicativos móveis sustentáveis.
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