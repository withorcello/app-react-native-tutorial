// src/screens/DemoScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Switch,
  TextInput,
  Slider,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import Button from "../components/Button";
import theme from "../styles/theme";
import Ionicons from "react-native-vector-icons/Ionicons";

const DemoScreen = () => {
  // Estados para os diferentes exemplos
  const [switchValue, setSwitchValue] = useState(false);
  const [inputText, setInputText] = useState("");
  const [counter, setCounter] = useState(0);
  const [selectedColor, setSelectedColor] = useState("#4CAF50");
  const [showModal, setShowModal] = useState(false);

  // Cores disponíveis para seleção
  const colors = [
    { name: "Verde", value: "#4CAF50" },
    { name: "Azul", value: "#2196F3" },
    { name: "Amarelo", value: "#FFC107" },
    { name: "Vermelho", value: "#F44336" },
    { name: "Roxo", value: "#9C27B0" },
  ];

  // Função para incrementar o contador
  const incrementCounter = () => setCounter(counter + 1);

  // Função para decrementar o contador
  const decrementCounter = () => setCounter(counter - 1);

  // Função para resetar o contador
  const resetCounter = () => setCounter(0);

  // Função para alternar o modal
  const toggleModal = () => setShowModal(!showModal);

  return (
    <View style={styles.container}>
      <Header
        title="Demonstrações"
        subtitle="Exemplos interativos de React Native"
      />

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Exemplos Interativos</Text>

          <Text style={styles.description}>
            Explore estes exemplos interativos para ver o React Native em ação.
            Cada exemplo demonstra conceitos importantes como estados, props e
            estilização dinâmica.
          </Text>

          <View style={styles.demoCard}>
            <Text style={styles.demoTitle}>Exemplo de Switch</Text>
            <Text style={styles.demoDescription}>
              Este exemplo mostra como um componente Switch controla o estado da
              aplicação, alterando dinamicamente o estilo.
            </Text>

            <View style={styles.demoContent}>
              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Modo Escuro Intenso</Text>
                <Switch
                  value={switchValue}
                  onValueChange={setSwitchValue}
                  trackColor={{ false: "#767577", true: theme.COLORS.primary }}
                  thumbColor={switchValue ? theme.COLORS.accent : "#f4f3f4"}
                />
              </View>

              <View
                style={[
                  styles.previewBox,
                  {
                    backgroundColor: switchValue
                      ? "#000000"
                      : theme.COLORS.background.secondary,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.previewText,
                    {
                      color: switchValue
                        ? theme.COLORS.accent
                        : theme.COLORS.text.primary,
                    },
                  ]}
                >
                  Preview
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.demoCard}>
            <Text style={styles.demoTitle}>Exemplo de TextInput</Text>
            <Text style={styles.demoDescription}>
              Este exemplo demonstra como capturar e utilizar texto digitado
              pelo usuário usando o state.
            </Text>

            <View style={styles.demoContent}>
              <TextInput
                style={styles.textInput}
                placeholder="Digite seu nome"
                placeholderTextColor={theme.COLORS.text.disabled}
                value={inputText}
                onChangeText={setInputText}
              />

              {inputText ? (
                <View style={styles.greetingContainer}>
                  <Text style={styles.greetingText}>Olá, {inputText}! 👋</Text>
                  <Text style={styles.greetingSubtext}>
                    Bem-vindo ao nosso aplicativo de aprendizado React Native.
                  </Text>
                </View>
              ) : (
                <View style={styles.emptyGreetingContainer}>
                  <Text style={styles.emptyGreetingText}>
                    Digite seu nome acima para ver a saudação
                  </Text>
                </View>
              )}
            </View>
          </View>

          <View style={styles.demoCard}>
            <Text style={styles.demoTitle}>Exemplo de Contador</Text>
            <Text style={styles.demoDescription}>
              Este exemplo mostra como manipular estados numéricos e
              renderização condicional baseada em valores.
            </Text>

            <View style={styles.demoContent}>
              <View style={styles.counterDisplay}>
                <Text
                  style={[
                    styles.counterValue,
                    {
                      color:
                        counter > 0
                          ? theme.COLORS.feedback.success
                          : counter < 0
                          ? theme.COLORS.feedback.error
                          : theme.COLORS.text.primary,
                    },
                  ]}
                >
                  {counter}
                </Text>
                <Text style={styles.counterLabel}>
                  {counter > 0 ? "Positivo" : counter < 0 ? "Negativo" : "Zero"}
                </Text>
              </View>

              <View style={styles.counterControls}>
                <TouchableOpacity
                  style={[styles.counterButton, styles.decrementButton]}
                  onPress={decrementCounter}
                >
                  <Ionicons name="remove" size={24} color="#FFFFFF" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.counterButton, styles.resetButton]}
                  onPress={resetCounter}
                >
                  <Ionicons name="refresh" size={24} color="#FFFFFF" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.counterButton, styles.incrementButton]}
                  onPress={incrementCounter}
                >
                  <Ionicons name="add" size={24} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.demoCard}>
            <Text style={styles.demoTitle}>Seleção de Cores</Text>
            <Text style={styles.demoDescription}>
              Este exemplo demonstra como gerenciar uma seleção entre múltiplas
              opções e aplicar o valor selecionado em tempo real.
            </Text>

            <View style={styles.demoContent}>
              <View style={styles.colorPickerContainer}>
                {colors.map((color) => (
                  <TouchableOpacity
                    key={color.value}
                    style={[
                      styles.colorOption,
                      { backgroundColor: color.value },
                      selectedColor === color.value &&
                        styles.selectedColorOption,
                    ]}
                    onPress={() => setSelectedColor(color.value)}
                  />
                ))}
              </View>

              <View
                style={[
                  styles.colorPreview,
                  { backgroundColor: selectedColor },
                ]}
              >
                <Text style={styles.colorPreviewText}>Cor Selecionada</Text>
                <Text style={styles.colorPreviewValue}>
                  {colors.find((c) => c.value === selectedColor)?.name || ""}
                </Text>
              </View>
            </View>
          </View>

          {showModal && (
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Mais Exemplos</Text>
                  <TouchableOpacity
                    onPress={toggleModal}
                    style={styles.closeButton}
                  >
                    <Ionicons
                      name="close"
                      size={24}
                      color={theme.COLORS.text.primary}
                    />
                  </TouchableOpacity>
                </View>

                <Text style={styles.modalText}>
                  Em um aplicativo real, aqui você encontraria exemplos
                  adicionais de componentes e funcionalidades React Native.
                </Text>

                <Text style={styles.modalText}>
                  Experimente implementar seus próprios exemplos, como:
                </Text>

                <View style={styles.list}>
                  <View style={styles.listItem}>
                    <Text style={styles.listBullet}>•</Text>
                    <Text style={styles.listItemText}>
                      Galeria de imagens com ScrollView horizontal
                    </Text>
                  </View>

                  <View style={styles.listItem}>
                    <Text style={styles.listBullet}>•</Text>
                    <Text style={styles.listItemText}>
                      Formulário com validação de dados
                    </Text>
                  </View>

                  <View style={styles.listItem}>
                    <Text style={styles.listBullet}>•</Text>
                    <Text style={styles.listItemText}>
                      Lista com FlatList e dados dinâmicos
                    </Text>
                  </View>
                </View>

                <Button
                  title="Fechar"
                  onPress={toggleModal}
                  type="primary"
                  style={styles.modalButton}
                />
              </View>
            </View>
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
  scrollContainer: {
    flex: 1,
  },
  content: {
    padding: theme.SPACING.lg,
  },
  title: {
    fontSize: theme.FONT.size.xxl,
    fontWeight: "bold",
    color: theme.COLORS.text.primary,
    marginBottom: theme.SPACING.sm,
  },
  description: {
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.text.secondary,
    marginBottom: theme.SPACING.xl,
    lineHeight: 22,
  },
  // Cartão de Demo
  demoCard: {
    backgroundColor: theme.COLORS.background.secondary,
    borderRadius: theme.RADIUS.lg,
    padding: theme.SPACING.lg,
    marginBottom: theme.SPACING.xl,
    ...theme.SHADOWS.medium,
  },
  demoTitle: {
    fontSize: theme.FONT.size.lg,
    fontWeight: "bold",
    color: theme.COLORS.text.primary,
    marginBottom: theme.SPACING.xs,
  },
  demoDescription: {
    fontSize: theme.FONT.size.sm,
    color: theme.COLORS.text.secondary,
    marginBottom: theme.SPACING.md,
    lineHeight: 20,
  },
  demoContent: {
    backgroundColor: theme.COLORS.background.tertiary,
    borderRadius: theme.RADIUS.md,
    padding: theme.SPACING.md,
  },
  // Exemplo de Switch
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.SPACING.md,
  },
  switchLabel: {
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.text.primary,
  },
  previewBox: {
    height: 100,
    borderRadius: theme.RADIUS.sm,
    justifyContent: "center",
    alignItems: "center",
  },
  previewText: {
    fontSize: theme.FONT.size.lg,
    fontWeight: "bold",
  },
  // Exemplo de TextInput
  textInput: {
    backgroundColor: theme.COLORS.background.secondary,
    borderRadius: theme.RADIUS.sm,
    padding: theme.SPACING.sm,
    color: theme.COLORS.text.primary,
    fontSize: theme.FONT.size.md,
    marginBottom: theme.SPACING.md,
  },
  greetingContainer: {
    alignItems: "center",
    paddingVertical: theme.SPACING.md,
  },
  greetingText: {
    fontSize: theme.FONT.size.xl,
    color: theme.COLORS.primary,
    fontWeight: "bold",
    marginBottom: theme.SPACING.xs,
  },
  greetingSubtext: {
    fontSize: theme.FONT.size.sm,
    color: theme.COLORS.text.secondary,
    textAlign: "center",
  },
  emptyGreetingContainer: {
    alignItems: "center",
    paddingVertical: theme.SPACING.md,
  },
  emptyGreetingText: {
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.text.disabled,
    fontStyle: "italic",
  },
  // Exemplo de Contador
  counterDisplay: {
    alignItems: "center",
    marginBottom: theme.SPACING.md,
  },
  counterValue: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: theme.SPACING.xs,
  },
  counterLabel: {
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.text.secondary,
  },
  counterControls: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counterButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  decrementButton: {
    backgroundColor: theme.COLORS.feedback.error,
  },
  resetButton: {
    backgroundColor: theme.COLORS.text.disabled,
  },
  incrementButton: {
    backgroundColor: theme.COLORS.feedback.success,
  },
  // Exemplo de Seleção de Cores
  colorPickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.SPACING.md,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  selectedColorOption: {
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  colorPreview: {
    height: 100,
    borderRadius: theme.RADIUS.md,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.SPACING.md,
  },
  colorPreviewText: {
    color: "#FFFFFF",
    fontSize: theme.FONT.size.md,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  colorPreviewValue: {
    color: "#FFFFFF",
    fontSize: theme.FONT.size.lg,
    fontWeight: "bold",
    marginTop: theme.SPACING.xs,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  // Exemplo de Slider
  sliderContainer: {
    alignItems: "center",
    marginBottom: theme.SPACING.md,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  sliderValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.COLORS.text.primary,
    marginBottom: theme.SPACING.xs,
  },
  sliderPreviewContainer: {
    height: 20,
    backgroundColor: theme.COLORS.background.secondary,
    borderRadius: theme.RADIUS.sm,
    overflow: "hidden",
  },
  sliderPreviewBar: {
    height: "100%",
    backgroundColor: theme.COLORS.primary,
  },
  // Botão "Ver Mais"
  moreExamplesButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.SPACING.md,
    marginTop: theme.SPACING.md,
    marginBottom: theme.SPACING.xl,
  },
  moreExamplesButtonText: {
    color: theme.COLORS.text.link,
    fontSize: theme.FONT.size.md,
    fontWeight: "500",
    marginRight: theme.SPACING.xs,
  },
  // Modal
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: theme.COLORS.background.secondary,
    borderRadius: theme.RADIUS.lg,
    padding: theme.SPACING.lg,
    width: "85%",
    maxWidth: 400,
    ...theme.SHADOWS.large,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.SPACING.md,
  },
  modalTitle: {
    fontSize: theme.FONT.size.xl,
    fontWeight: "bold",
    color: theme.COLORS.text.primary,
  },
  closeButton: {
    padding: theme.SPACING.xs,
  },
  modalText: {
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.text.secondary,
    marginBottom: theme.SPACING.md,
    lineHeight: 22,
  },
  list: {
    marginBottom: theme.SPACING.lg,
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
  modalButton: {
    marginTop: theme.SPACING.sm,
  },
});

export default DemoScreen;
