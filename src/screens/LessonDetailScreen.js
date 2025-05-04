// src/screens/LessonDetailScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";
import CodeBlock from "../components/CodeBlock";
import { lessons } from "../data/lessons";
import theme from "../styles/theme";
import Ionicons from "react-native-vector-icons/Ionicons";

const LessonDetailScreen = ({ route, navigation }) => {
  const { lessonId } = route.params;
  const [lesson, setLesson] = useState(null);
  const [activeTab, setActiveTab] = useState("content");

  useEffect(() => {
    const lessonData = lessons.find((item) => item.id === lessonId);
    setLesson(lessonData);
  }, [lessonId]);

  if (!lesson) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando lição...</Text>
      </View>
    );
  }

  const formatContent = (content) => {
    if (!content) return [];

    const lines = content.trim().split("\n");
    const formattedContent = [];

    let inList = false;
    let listItems = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line === "") {
        if (inList) {
          formattedContent.push({ type: "list", items: [...listItems] });
          listItems = [];
          inList = false;
        }
        continue;
      }

      if (line.startsWith("# ")) {
        if (inList) {
          formattedContent.push({ type: "list", items: [...listItems] });
          listItems = [];
          inList = false;
        }
        formattedContent.push({
          type: "heading1",
          content: line.substring(2),
        });
      }
      else if (line.startsWith("## ")) {
        if (inList) {
          formattedContent.push({ type: "list", items: [...listItems] });
          listItems = [];
          inList = false;
        }
        formattedContent.push({
          type: "heading2",
          content: line.substring(3),
        });
      }
      // Itens de lista
      else if (line.startsWith("- ") || line.startsWith("* ")) {
        inList = true;
        listItems.push(line.substring(2));

        // Se for o último item ou próxima linha não é lista
        if (
          i === lines.length - 1 ||
          !(
            lines[i + 1].trim().startsWith("- ") ||
            lines[i + 1].trim().startsWith("* ")
          )
        ) {
          formattedContent.push({ type: "list", items: [...listItems] });
          listItems = [];
          inList = false;
        }
      }
      // Texto normal (parágrafo)
      else {
        // Se estávamos em uma lista, finalizar a lista
        if (inList) {
          formattedContent.push({ type: "list", items: [...listItems] });
          listItems = [];
          inList = false;
        }
        formattedContent.push({
          type: "paragraph",
          content: line,
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
        case "heading1":
          return (
            <Text key={`h1-${index}`} style={styles.heading1}>
              {item.content}
            </Text>
          );
        case "heading2":
          return (
            <Text key={`h2-${index}`} style={styles.heading2}>
              {item.content}
            </Text>
          );
        case "list":
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
        case "paragraph":
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
      <View style={styles.header}>
        <View style={styles.headerTitleRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.title}>{lesson.title}</Text>
          <View style={styles.spacer} />
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <Button
          title="Conteúdo"
          type={activeTab === "content" ? "primary" : "secondary"}
          size="small"
          onPress={() => setActiveTab("content")}
          style={styles.tabButton}
        />
        <Button
          title="Código Exemplo"
          type={activeTab === "code" ? "primary" : "secondary"}
          size="small"
          onPress={() => setActiveTab("code")}
          style={styles.tabButton}
        />
      </View>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {activeTab === "content" ? (
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
    paddingVertical: theme.SPACING.md,
    paddingHorizontal: theme.SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: "#2D2D2D",
  },
  headerTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    padding: theme.SPACING.xs,
  },
  title: {
    color: theme.COLORS.text.primary,
    fontSize: theme.FONT.size.lg,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  spacer: {
    width: 24, // Mesmo tamanho do ícone de voltar para equilibrar o layout
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.COLORS.background.primary,
  },
  loadingText: {
    color: theme.COLORS.text.primary,
    fontSize: theme.FONT.size.lg,
  },
  tabsContainer: {
    flexDirection: "row",
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
    fontWeight: "bold",
    color: theme.COLORS.text.primary,
    marginBottom: theme.SPACING.md,
    marginTop: theme.SPACING.lg,
  },
  heading2: {
    fontSize: theme.FONT.size.xl,
    fontWeight: "bold",
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
    flexDirection: "row",
    marginBottom: theme.SPACING.xs,
  },
  listBullet: {
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.primary,
    marginRight: theme.SPACING.sm,
    fontWeight: "bold",
  },
  listItemText: {
    flex: 1,
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.text.secondary,
    lineHeight: 22,
  },
  codeTitle: {
    fontSize: theme.FONT.size.lg,
    fontWeight: "bold",
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
