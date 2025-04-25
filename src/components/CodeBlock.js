// src/components/CodeBlock.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import theme from '../styles/theme';

const CodeBlock = ({ code, language = 'javascript' }) => {
  // Função simples para colorir sintaxe 
  // (implementação básica para JavaScript)
  const highlightSyntax = (code) => {
    if (!code) return [];
    
    // Divide o código em linhas para facilitar a exibição
    const lines = code.split('\n');
    
    return lines.map((line, index) => {
      // Aplicando destaque para palavras-chave comuns em JS
      let coloredLine = line
        // Palavras-chave
        .replace(/(import|export|from|const|let|var|function|return|if|else|for|while|switch|case|break|continue|class|extends|new|this|super|async|await|try|catch|finally)/g, 
          match => `<keyword>${match}</keyword>`)
        // Strings
        .replace(/(['"`])(.*?)(['"`])/g, 
          (match, open, content, close) => `<string>${open}${content}${close}</string>`)
        // Comentários
        .replace(/\/\/(.*)/g, 
          match => `<comment>${match}</comment>`)
        // Números
        .replace(/\b(\d+)\b/g, 
          match => `<number>${match}</number>`);
      
      // Renderiza cada parte do código com sua cor correspondente
      const parts = [];
      let currentText = '';
      let currentType = 'normal';
      
      for (let i = 0; i < coloredLine.length; i++) {
        if (coloredLine.substring(i, i + 9) === '<keyword>') {
          if (currentText) {
            parts.push({ type: currentType, text: currentText });
            currentText = '';
          }
          i += 9;
          currentType = 'keyword';
        } else if (coloredLine.substring(i, i + 10) === '</keyword>') {
          if (currentText) {
            parts.push({ type: currentType, text: currentText });
            currentText = '';
          }
          i += 10;
          currentType = 'normal';
        } else if (coloredLine.substring(i, i + 8) === '<string>') {
          if (currentText) {
            parts.push({ type: currentType, text: currentText });
            currentText = '';
          }
          i += 8;
          currentType = 'string';
        } else if (coloredLine.substring(i, i + 9) === '</string>') {
          if (currentText) {
            parts.push({ type: currentType, text: currentText });
            currentText = '';
          }
          i += 9;
          currentType = 'normal';
        } else if (coloredLine.substring(i, i + 9) === '<comment>') {
          if (currentText) {
            parts.push({ type: currentType, text: currentText });
            currentText = '';
          }
          i += 9;
          currentType = 'comment';
        } else if (coloredLine.substring(i, i + 10) === '</comment>') {
          if (currentText) {
            parts.push({ type: currentType, text: currentText });
            currentText = '';
          }
          i += 10;
          currentType = 'normal';
        } else if (coloredLine.substring(i, i + 8) === '<number>') {
          if (currentText) {
            parts.push({ type: currentType, text: currentText });
            currentText = '';
          }
          i += 8;
          currentType = 'number';
        } else if (coloredLine.substring(i, i + 9) === '</number>') {
          if (currentText) {
            parts.push({ type: currentType, text: currentText });
            currentText = '';
          }
          i += 9;
          currentType = 'normal';
        } else {
          currentText += coloredLine[i];
        }
      }
      
      if (currentText) {
        parts.push({ type: currentType, text: currentText });
      }
      
      return { lineNumber: index + 1, parts };
    });
  };
  
  const highlightedCode = highlightSyntax(code);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{language}</Text>
      </View>
      <ScrollView 
        horizontal 
        style={styles.codeScrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        <ScrollView 
          style={styles.codeContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.lineNumbers}>
            {highlightedCode.map(line => (
              <Text key={`line-${line.lineNumber}`} style={styles.lineNumber}>
                {line.lineNumber}
              </Text>
            ))}
          </View>
          <View style={styles.code}>
            {highlightedCode.map(line => (
              <View key={`code-${line.lineNumber}`} style={styles.lineContent}>
                {line.parts.map((part, index) => (
                  <Text
                    key={`part-${line.lineNumber}-${index}`}
                    style={styles[part.type]}
                  >
                    {part.text}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D1117', // Fundo escuro estilo GitHub
    borderRadius: theme.RADIUS.md,
    marginVertical: theme.SPACING.md,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#161B22',
    paddingVertical: theme.SPACING.xs,
    paddingHorizontal: theme.SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: '#30363D',
  },
  headerText: {
    color: theme.COLORS.text.secondary,
    fontSize: theme.FONT.size.sm,
  },
  codeScrollContainer: {
    maxHeight: 300, // Limita a altura máxima
  },
  codeContainer: {
    flexDirection: 'row',
    padding: theme.SPACING.md,
  },
  lineNumbers: {
    marginRight: theme.SPACING.md,
    paddingRight: theme.SPACING.sm,
    borderRightWidth: 1,
    borderRightColor: '#30363D',
  },
  lineNumber: {
    color: '#636e7b',
    textAlign: 'right',
    fontSize: theme.FONT.size.sm,
    fontFamily: 'monospace',
    lineHeight: 20,
  },
  code: {
    flex: 1,
  },
  lineContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  // Estilos para cada tipo de token
  normal: {
    color: '#E1E4E8',
    fontSize: theme.FONT.size.sm,
    fontFamily: 'monospace',
    lineHeight: 20,
  },
  keyword: {
    color: '#FF79C6',
    fontSize: theme.FONT.size.sm,
    fontFamily: 'monospace',
    lineHeight: 20,
  },
  string: {
    color: '#F1FA8C',
    fontSize: theme.FONT.size.sm,
    fontFamily: 'monospace',
    lineHeight: 20,
  },
  comment: {
    color: '#6272A4',
    fontSize: theme.FONT.size.sm,
    fontFamily: 'monospace',
    lineHeight: 20,
  },
  number: {
    color: '#BD93F9',
    fontSize: theme.FONT.size.sm,
    fontFamily: 'monospace',
    lineHeight: 20,
  },
});

export default CodeBlock;