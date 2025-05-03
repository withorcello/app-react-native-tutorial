import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import theme from "../styles/theme";

const CodeBlock = ({ code, language = "javascript" }) => {
  const lines = code.split("\n");

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
          <View style={styles.lineContent}>
            {lines.map((line, index) => (
              <Text key={`line-${index}`} style={styles.normal}>
                {line}
              </Text>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D1117",
    borderRadius: theme.RADIUS.md,
    marginVertical: theme.SPACING.md,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#161B22",
    paddingVertical: theme.SPACING.xs,
    paddingHorizontal: theme.SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: "#30363D",
  },
  headerText: {
    color: theme.COLORS.text.secondary,
    fontSize: theme.FONT.size.sm,
  },
  codeScrollContainer: {
    maxHeight: 300,
  },
  codeContainer: {
    flexDirection: "row",
    padding: theme.SPACING.md,
  },
  lineContent: {
    color: "#FFFFFF",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  normal: {
    color: "#E1E4E8",
    fontSize: theme.FONT.size.sm,
    fontFamily: "monospace",
    lineHeight: 20,
  },
});

export default CodeBlock;
