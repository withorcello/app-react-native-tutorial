// src/screens/LessonDetailScreen.js
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import CodeBlock from '../components/CodeBlock';
import { lessons } from '../data/lessons';
import theme from '../styles/theme';

const LessonDetailScreen = ({ route, navigation }) => {
  const { lessonId } = route.params;
  const [lesson, setLesson] = useState(null);
  const [activeTab, setActiveTab] = useState('content'); // 'content' ou 'code'
  
  useEffect(() => {
    // Buscar a lição com base no ID
    const lessonData = lessons.find(item => item.id === lessonId);
    setLesson(lessonData);
  }, [lessonId]);
  
  if (!lesson) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando lição...</Text>
      </View>
    );
  }
  
  // Função para formatar o conteúdo texto (uma implementação básica de Markdown)
  const formatContent = (content) => {
    if (!content) return [];
    
    // Dividir o conteúdo em linhas
    const lines = content.trim().split('\n');
    const formattedContent = [];
    
    let inList = false;
    let listItems = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Pular linhas vazias
      if (line === '') {
        // Se estávamos em uma lista, finalizar a lista
        if (inList) {
          formattedContent.push({ type: 'list', items: [...listItems] });
          listItems = [];
          inList = false;
        }
        continue;
      }
      
      // Títulos H1
      if (line.startsWith('# ')) {
        // Se estávamos em uma lista, finalizar a lista
        if (inList) {
          formattedContent.push({ type: 'list', items: [...listItems] });
          listItems = [];
          inList = false;
        }
        formattedContent.push({
          type: 'heading1',
          content: line.substring(2)
        });
      }
      // Títulos H2
      else if (line.startsWith('## ')) {
        // Se estávamos em uma lista, finalizar a lista
        if (inList) {
          formattedContent.push({ type: 'list', items: [...listItems] });
          listItems = [];
          inList = false;
        }
        formattedContent.push({
          type: 'heading2',
          content: line.substring(3)
        });
      }
      // Itens de lista
      else if (line.startsWith('- ') || line.startsWith('* ')) {
        inList = true;
        listItems.push(line.substring(2));
        
        // Se for o último item ou próxima linha não é lista
        if (i === lines.length - 1 || 
            !(lines[i+1].trim().startsWith('- ') || lines[i+1].trim().startsWith('* '))) {
          formattedContent.push({ type: 'list', items: [...listItems] });
          listItems = [];
          inList = false;
        }
      }
      // Texto normal (parágrafo)
      else {
        // Se estávamos em uma lista, finalizar a lista
        if (inList) {
          formattedContent.push({ type: 'list', items: [...listItems] });
          listItems = [];
          inList = false;
        }
        formattedContent.push({
          type: 'paragraph',
          content: line
        });
      }
    }
    
    return formattedContent;
  };
  
  const formattedContent = formatContent(lesson.content);
  
  // Renderizar cada elemento do conteúdo formatado
  const renderContent = () => {
    return formattedContent.map((item, index) => {
      switch (item.type) {
        case 'heading1':
          return (
            <Text key={`h1-${index}`} style={styles.heading1}>
              {item.content}
            </Text>
          );
        case 'heading2':
          return (
            <Text key={`h2-${index}`} style={styles.heading2}>
              {item.content}
            </Text>
          );
        case 'list':
          return (
            <View key={`list-${index}`} style={styles.list}>
              {item.items.map((listItem, listIndex) => (
                <View key={`list-item-${listIndex}`} style={styles.listItem}>
                  <Text style={styles.listBullet}>•</Text>
                  <Text style={styles.listItemText}>{listItem}</Text>
                </View>
              ))}
            </View>
          );
        case 'paragraph':
          return (
            <Text key={`p-${index}`} style={styles.paragraph}>
              {item.content}
            </Text>
          );
        default:
          return null;
      }
    });
  };
  
  return (
    <View style={styles.container}>
      <Header 
        title={lesson.title}
        leftIcon="arrow-back"
        onLeftPress={() => navigation.goBack()}
      />
      
      <View style={styles.tabsContainer}>
        <Button
          title="Conteúdo"
          type={activeTab === 'content' ? 'primary' : 'secondary'}
          size="small"
          onPress={() => setActiveTab('content')}
          style={styles.tabButton}
        />
        <Button
          title="Código Exemplo"
          type={activeTab === 'code' ? 'primary' : 'secondary'}
          size="small"
          onPress={() => setActiveTab('code')}
          style={styles.tabButton}
        />
      </View>
      
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {activeTab === 'content' ? (
            // Conteúdo teórico
            renderContent()
          ) : (
            // Exemplo de código
            <>
              <Text style={styles.codeTitle}>Exemplo prático:</Text>
              <CodeBlock code={lesson.codeExample} language="javascript" />
              <Text style={styles.codeDescription}>
                Este exemplo demonstra os conceitos abordados nesta lição. 
                Experimente modificar o código e observar os resultados!
              </Text>
            </>
          )}
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button 
          title="Ver na Prática" 
          onPress={() => navigation.navigate('Demo')}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.background.primary,
  },
  loadingText: {
    color: theme.COLORS.text.primary,
    fontSize: theme.FONT.size.lg,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: theme.SPACING.lg,
    paddingVertical: theme.SPACING.md,
    backgroundColor: theme.COLORS.background.secondary,
  },
  tabButton: {
    flex: 1,
    marginHorizontal: theme.SPACING.xs,
  },
  scrollContainer: {
    flex: 1,
  },
  content: {
    padding: theme.SPACING.lg,
    paddingBottom: theme.SPACING.xxl,
  },
  heading1: {
    fontSize: theme.FONT.size.xxl,
    fontWeight: 'bold',
    color: theme.COLORS.text.primary,
    marginBottom: theme.SPACING.md,
    marginTop: theme.SPACING.lg,
  },
  heading2: {
    fontSize: theme.FONT.size.xl,
    fontWeight: 'bold',
    color: theme.COLORS.text.primary,
    marginBottom: theme.SPACING.sm,
    marginTop: theme.SPACING.md,
  },
  paragraph: {
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.text.secondary,
    marginBottom: theme.SPACING.md,
    lineHeight: 24,
  },
  list: {
    marginBottom: theme.SPACING.md,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: theme.SPACING.xs,
  },
  listBullet: {
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.primary,
    marginRight: theme.SPACING.sm,
    fontWeight: 'bold',
  },
  listItemText: {
    flex: 1,
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.text.secondary,
    lineHeight: 22,
  },
  codeTitle: {
    fontSize: theme.FONT.size.lg,
    fontWeight: 'bold',
    color: theme.COLORS.text.primary,
    marginBottom: theme.SPACING.md,
  },
  codeDescription: {
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.text.secondary,
    marginTop: theme.SPACING.md,
    marginBottom: theme.SPACING.lg,
    lineHeight: 22,
    backgroundColor: theme.COLORS.background.secondary,
    padding: theme.SPACING.md,
    borderRadius: theme.RADIUS.md,
  },
  footer: {
    backgroundColor: theme.COLORS.background.secondary,
    padding: theme.SPACING.md,
    borderTopWidth: 1,
    borderTopColor: theme.COLORS.border.light,
  },
});

export default LessonDetailScreen;