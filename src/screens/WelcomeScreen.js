// src/screens/WelcomeScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import theme from '../styles/theme';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header 
        title="AprendeReact Native" 
        subtitle="Desenvolvimento Sustentável Digital"
      />
      
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <View style={styles.heroSection}>
            <View style={styles.logoContainer}>
              {/* Placeholder para logo - Em um app real seria uma imagem */}
              <View style={styles.logoPlaceholder}>
                <Text style={styles.logoText}>RN</Text>
              </View>
            </View>
            
            <Text style={styles.heroTitle}>
              Bem-vindo ao Aplicativo Educacional de React Native
            </Text>
            
            <Text style={styles.heroSubtitle}>
              Aprenda a desenvolver apps móveis nativos com JavaScript de forma sustentável
            </Text>
          </View>
          
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>O que é React Native?</Text>
            
            <Text style={styles.paragraph}>
              React Native é um framework de código aberto criado pelo Facebook (Meta) que permite aos desenvolvedores 
              criar aplicativos móveis nativos para Android e iOS utilizando JavaScript e React.
            </Text>
            
            <Text style={styles.paragraph}>
              Com React Native, os desenvolvedores podem escrever um único código que funciona em diferentes 
              plataformas, economizando tempo, recursos e contribuindo para um desenvolvimento mais sustentável.
            </Text>
            
            {/* <View style={styles.featureCard}>
              <Text style={styles.featureTitle}>Por que React Native é Sustentável?</Text>
              
              <View style={styles.feature}>
                <View style={styles.featureIconContainer}>
                  <Text style={styles.featureIcon}>♻️</Text>
                </View>
                <View style={styles.featureTextContainer}>
                  <Text style={styles.featureText}>
                    <Text style={styles.bold}>Código Reutilizável:</Text> Desenvolva uma vez, execute em múltiplas plataformas
                  </Text>
                </View>
              </View>
              
              <View style={styles.feature}>
                <View style={styles.featureIconContainer}>
                  <Text style={styles.featureIcon}>⚡</Text>
                </View>
                <View style={styles.featureTextContainer}>
                  <Text style={styles.featureText}>
                    <Text style={styles.bold}>Eficiência Energética:</Text> Hot Reloading reduz consumo de recursos em desenvolvimento
                  </Text>
                </View>
              </View>
              
              <View style={styles.feature}>
                <View style={styles.featureIconContainer}>
                  <Text style={styles.featureIcon}>🔄</Text>
                </View>
                <View style={styles.featureTextContainer}>
                  <Text style={styles.featureText}>
                    <Text style={styles.bold}>Manutenção Simplificada:</Text> Menos código significa menos bugs e atualizações mais rápidas
                  </Text>
                </View>
              </View>
            </View> */}
          </View>
          
          <View style={styles.aboutSection}>
            <Text style={styles.sectionTitle}>Sobre este App</Text>
            
            <Text style={styles.paragraph}>
              Este aplicativo educacional foi projetado para ajudar estudantes e desenvolvedores a aprender 
              os fundamentos do React Native através de exemplos práticos e explicações claras.
            </Text>
            
            <Text style={styles.paragraph}>
              Nosso objetivo é promover práticas de desenvolvimento sustentável, aplicando princípios de 
              eficiência, acessibilidade e responsabilidade ambiental no desenvolvimento mobile.
            </Text>
          </View>
          
          <View style={styles.cta}>
            <Button 
              title="Explorar Lições" 
              onPress={() => navigation.navigate('Lições')}
              size="large"
            />
            
            <Button 
              title="Ver Demonstrações" 
              onPress={() => navigation.navigate('Demo')}
              type="secondary"
              size="large"
              style={styles.secondaryButton}
            />
          </View>
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
  // Seção Hero
  heroSection: {
    alignItems: 'center',
    marginBottom: theme.SPACING.xl,
  },
  logoContainer: {
    marginBottom: theme.SPACING.lg,
  },
  logoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: theme.COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  heroTitle: {
    fontSize: theme.FONT.size.xxl,
    fontWeight: 'bold',
    color: theme.COLORS.text.primary,
    textAlign: 'center',
    marginBottom: theme.SPACING.md,
  },
  heroSubtitle: {
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.text.secondary,
    textAlign: 'center',
  },
  // Seção de Informações
  infoSection: {
    marginBottom: theme.SPACING.xl,
  },
  sectionTitle: {
    fontSize: theme.FONT.size.xl,
    fontWeight: 'bold',
    color: theme.COLORS.text.primary,
    marginBottom: theme.SPACING.md,
  },
  paragraph: {
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.text.secondary,
    lineHeight: 24,
    marginBottom: theme.SPACING.md,
  },
  // Card de Features
  featureCard: {
    backgroundColor: theme.COLORS.background.secondary,
    borderRadius: theme.RADIUS.lg,
    padding: theme.SPACING.lg,
    marginVertical: theme.SPACING.md,
    ...theme.SHADOWS.medium,
  },
  featureTitle: {
    fontSize: theme.FONT.size.lg,
    fontWeight: 'bold',
    color: theme.COLORS.text.accent,
    marginBottom: theme.SPACING.md,
  },
  feature: {
    flexDirection: 'row',
    marginBottom: theme.SPACING.md,
  },
  featureIconContainer: {
    width: 32,
    marginRight: theme.SPACING.sm,
  },
  featureIcon: {
    fontSize: 20,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureText: {
    fontSize: theme.FONT.size.md,
    color: theme.COLORS.text.secondary,
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
    color: theme.COLORS.text.primary,
  },
  // Seção Sobre
  aboutSection: {
    marginBottom: theme.SPACING.xl,
  },
  // Call-to-Action
  cta: {
    marginVertical: theme.SPACING.lg,
  },
  secondaryButton: {
    marginTop: theme.SPACING.md,
  },
});

export default WelcomeScreen;