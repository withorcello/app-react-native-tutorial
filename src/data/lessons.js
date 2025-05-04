export const lessons = [
    {
      id: '1',
      title: 'O que é React Native',
      description: 'Uma introdução ao React Native e suas vantagens para desenvolvimento mobile.',
      icon: 'book-open-outline',
      duration: '5 min',
      content: `
  # O que é React Native?
  
  React Native é um framework de código aberto criado pelo Facebook (Meta) que permite desenvolver aplicativos móveis nativos utilizando JavaScript e React.
  
  ## Principais Características:
  
  - **Código único** para iOS e Android, reduzindo tempo e recursos de desenvolvimento
  - **Componentes nativos** para uma experiência de usuário autêntica
  - **Hot Reloading** para visualizar alterações em tempo real
  - **Grande comunidade** e ecossistema de bibliotecas
  - **Baseado em React**, aproveitando sua arquitetura declarativa e componentes
  
  ## Impacto na Manutenibilidade Digital:
  
  O React Native contribui para um desenvolvimento digital de várias formas:
  
  1. **Redução de recursos**: Menos horas de desenvolvimento e equipes menores
  2. **Economia de energia**: Apps mais eficientes com melhor performance
  3. **Maior longevidade**: Facilidade de manutenção e atualização
  4. **Acessibilidade**: Alcance de mais dispositivos com um único código
      `,
      codeExample: `
  // Exemplo básico de um componente React Native
  import React from 'react';
  import { View, Text, StyleSheet } from 'react-native';
  
  const SustainableApp = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Olá, Mundo!
        </Text>
        <Text style={styles.subtitle}>
          Meu primeiro app em React Native
        </Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#4CAF50',
      marginBottom: 16,
    },
    subtitle: {
      fontSize: 16,
      color: '#FFFFFF',
    },
  });
  
  export default SustainableApp;
      `,
    },
    {
      id: '2',
      title: 'Componentes Básicos',
      description: 'Conheça os principais componentes do React Native e como utilizá-los.',
      icon: 'cube-outline',
      duration: '8 min',
      content: `
  # Componentes Básicos do React Native
  
  Os componentes são os blocos de construção fundamentais de qualquer aplicativo React Native. Eles permitem dividir a interface em partes independentes e reutilizáveis.
  
  ## Componentes Principais:
  
  ### Componentes de Visualização:
  
  - **View**: Container flexível, equivalente à div no HTML
  - **Text**: Exibe texto estilizável
  - **Image**: Exibe imagens locais ou remotas
  - **ScrollView**: Container com rolagem
  - **FlatList**: Lista otimizada para grandes conjuntos de dados
  - **TextInput**: Campo para entrada de texto
  
  ### Componentes de Interação:
  
  - **Button**: Botão padrão
  - **TouchableOpacity**: Área tocável com efeito de opacidade
  - **Switch**: Alternador de estados (toggle)
  - **Pressable**: API avançada para detecção de toques
      `,
      codeExample: `
  // Demonstração de componentes básicos
  import React, { useState } from 'react';
  import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';
  
  const BasicComponentsDemo = () => {
    const [name, setName] = useState('');
    const [darkMode, setDarkMode] = useState(true);
  
    return (
      <View style={[
        styles.container, 
        { backgroundColor: darkMode ? '#121212' : '#FFFFFF' }
      ]}>
        <Text style={[
          styles.title,
          { color: darkMode ? '#FFFFFF' : '#000000' }
        ]}>
          Componentes Básicos
        </Text>
        
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor={darkMode ? '#757575' : '#9E9E9E'}
          value={name}
          onChangeText={setName}
        />
        
        {name ? (
          <Text style={[
            styles.greeting,
            { color: darkMode ? '#81C784' : '#4CAF50' }
          ]}>
            Olá, {name}!
          </Text>
        ) : null}
        
        <View style={styles.switchContainer}>
          <Text style={{ color: darkMode ? '#FFFFFF' : '#000000' }}>
            Modo Escuro
          </Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#767577', true: '#4CAF50' }}
            thumbColor={darkMode ? '#81C784' : '#f4f3f4'}
          />
        </View>
        
        <Button
          title="Limpar"
          onPress={() => setName('')}
          color="#2196F3"
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#424242',
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 20,
      color: '#FFFFFF',
      backgroundColor: '#1E1E1E',
    },
    greeting: {
      fontSize: 18,
      marginBottom: 20,
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 20,
    },
  });
  
  export default BasicComponentsDemo;
      `,
    },
    {
      id: '3',
      title: 'States e Props',
      description: 'Entenda como gerenciar dados em componentes usando states e props.',
      icon: 'git-compare-outline',
      duration: '7 min',
      content: `
  # States e Props no React Native
  
  States (estados) e Props (propriedades) são conceitos fundamentais no React Native para gerenciar e passar dados entre componentes.
  
  ## Props (Propriedades)
  
  - São parâmetros passados de um componente pai para um componente filho
  - São imutáveis (read-only) dentro do componente que os recebe
  - Permitem a criação de componentes reutilizáveis
  - São definidos ao utilizar o componente: \`<Button title="Enviar" color="green" />\`
  
  ## States (Estados)
  
  - Gerenciam dados internos de um componente
  - São mutáveis e controlados pelo próprio componente
  - Quando um estado muda, o componente é renderizado novamente
  - São definidos usando o hook useState: \`const [contador, setContador] = useState(0);\`
  
  ## Ciclo de Dados:
  
  1. Props fluem de cima para baixo (componente pai → filho)
  2. Estados são gerenciados localmente em cada componente
  3. Alterações de estado causam re-renderização automaticamente
      `,
      codeExample: `
  // Demonstração de States e Props
  import React, { useState } from 'react';
  import { View, Text, Button, StyleSheet } from 'react-native';
  
  // Componente filho que recebe props
  const CounterDisplay = ({ count, label, textColor }) => {
    return (
      <View style={styles.displayContainer}>
        <Text style={[styles.label, { color: textColor }]}>{label}</Text>
        <Text style={[styles.countValue, { color: textColor }]}>{count}</Text>
      </View>
    );
  };
  
  // Componente pai que gerencia o state
  const StatePropsDemo = () => {
    // Definindo um state para o contador
    const [counter, setCounter] = useState(0);
    
    // Função para incrementar o contador
    const incrementCounter = () => setCounter(counter + 1);
    
    // Função para decrementar o contador
    const decrementCounter = () => setCounter(counter - 1);
    
    // Função para resetar o contador
    const resetCounter = () => setCounter(0);
    
    // Determinando a cor com base no valor
    const getColor = () => {
      if (counter > 0) return '#66BB6A';      // Verde para positivo
      if (counter < 0) return '#EF5350';      // Vermelho para negativo
      return '#42A5F5';                        // Azul para zero
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Demo: States e Props</Text>
        
        {/* Passando props para o componente filho */}
        <CounterDisplay 
          count={counter}
          label="Contador Atual"
          textColor={getColor()}
        />
        
        <View style={styles.buttonsContainer}>
          <Button 
            title="−" 
            onPress={decrementCounter} 
            color="#EF5350"
          />
          <Button 
            title="Reset" 
            onPress={resetCounter} 
            color="#757575"
          />
          <Button 
            title="+" 
            onPress={incrementCounter} 
            color="#66BB6A"
          />
        </View>
        
        <Text style={styles.explanation}>
          Este exemplo demonstra:
          {'\n'}- State: o valor do contador é gerenciado no componente pai
          {'\n'}- Props: valor, label e cor são passados para o componente filho
          {'\n'}- Re-renderização: a interface atualiza quando o state muda
        </Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 30,
    },
    displayContainer: {
      backgroundColor: '#1E1E1E',
      borderRadius: 8,
      padding: 20,
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
    },
    countValue: {
      fontSize: 48,
      fontWeight: 'bold',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginBottom: 30,
    },
    explanation: {
      color: '#B3B3B3',
      lineHeight: 22,
      backgroundColor: '#1E1E1E',
      padding: 16,
      borderRadius: 8,
      width: '100%',
    },
  });
  
  export default StatePropsDemo;
      `,
    },
    {
      id: '4',
      title: 'Estilização Simples',
      description: 'Aprenda a estilizar componentes com StyleSheet e conceitos de Flexbox.',
      icon: 'color-palette-outline',
      duration: '6 min',
      content: `
  # Estilização no React Native
  
  No React Native, a estilização é feita através de JavaScript, usando uma API similar ao CSS, mas com algumas diferenças importantes.
  
  ## StyleSheet API
  
  A API StyleSheet é usada para definir estilos de forma otimizada:
  
  - **Performance**: StyleSheet.create() otimiza os estilos
  - **Validação**: Erros de propriedade são detectados antecipadamente
  - **Tipagem**: Fornece autocompletar em editores compatíveis
  
  ## Flexbox Layout
  
  React Native usa Flexbox para layouts, com algumas diferenças do CSS web:
  
  - **flexDirection**: padrão é 'column' (não 'row')
  - Todos os containers são flex por padrão
  - **flex**: valor único em vez de flex-grow, flex-shrink
  
  ## Propriedades Comuns de Estilo:
  
  ### Layout
  - **width**, **height**: dimensões
  - **margin**, **padding**: espaçamento
  - **position**: posicionamento ('relative', 'absolute')
  
  ### Visual
  - **backgroundColor**: cor de fundo
  - **borderRadius**: arredondamento de bordas
  - **elevation** (Android) / **shadow...** (iOS): sombras
  
  ### Texto
  - **color**: cor do texto
  - **fontSize**: tamanho da fonte
  - **fontWeight**: peso da fonte ('normal', 'bold')
      `,
      codeExample: `
  // Demonstração de estilização
  import React from 'react';
  import { View, Text, StyleSheet, ScrollView } from 'react-native';
  
  const StyleDemo = () => {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Guia de Estilização</Text>
        
        {/* Demonstração de layout com Flexbox */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Flexbox Layout</Text>
          
          <Text style={styles.label}>Row com justifyContent: 'space-between'</Text>
          <View style={styles.rowContainer}>
            <View style={[styles.box, { backgroundColor: '#4CAF50' }]} />
            <View style={[styles.box, { backgroundColor: '#2196F3' }]} />
            <View style={[styles.box, { backgroundColor: '#FFC107' }]} />
          </View>
          
          <Text style={styles.label}>Column com alignItems: 'center'</Text>
          <View style={styles.columnContainer}>
            <View style={[styles.box, { backgroundColor: '#4CAF50' }]} />
            <View style={[styles.box, { backgroundColor: '#2196F3' }]} />
            <View style={[styles.box, { backgroundColor: '#FFC107' }]} />
          </View>
        </View>
        
        {/* Demonstração de estilização de cartões */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cartões e Sombras</Text>
          
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Cartão</Text>
            <Text style={styles.cardContent}>
              Este cartão demonstra o uso de sombras, bordas arredondadas e 
              espaçamento interno (padding) para criar componentes elegantes.
            </Text>
          </View>
          
          <View style={styles.elevatedCard}>
            <Text style={styles.cardTitle}>Cartão Elevado</Text>
            <Text style={styles.cardContent}>
              Este cartão tem uma elevação maior, criando um efeito de 
              profundidade na interface do usuário.
            </Text>
          </View>
        </View>
        
        {/* Demonstração de tipografia */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tipografia</Text>
          
          <Text style={styles.heading1}>Título Principal</Text>
          <Text style={styles.heading2}>Subtítulo</Text>
          <Text style={styles.body}>
            Este é um texto de corpo com tamanho e espaçamento adequados para 
            leitura. A legibilidade é essencial em interfaces.
          </Text>
          <Text style={styles.caption}>Legenda ou texto auxiliar</Text>
          
          <Text style={styles.accent}>Texto com cor de destaque</Text>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      padding: 16,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 24,
      marginTop: 12,
    },
    section: {
      marginBottom: 32,
      backgroundColor: '#1E1E1E',
      borderRadius: 12,
      padding: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#81C784',
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      color: '#B3B3B3',
      marginBottom: 8,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    columnContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    box: {
      width: 50,
      height: 50,
      marginVertical: 5,
      borderRadius: 4,
    },
    card: {
      backgroundColor: '#2D2D2D',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      // Sombras para iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      // Sombra para Android
      elevation: 2,
    },
    elevatedCard: {
      backgroundColor: '#2D2D2D',
      borderRadius: 8,
      padding: 16,
      // Sombras para iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      // Sombra para Android
      elevation: 6,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 8,
    },
    cardContent: {
      fontSize: 14,
      color: '#B3B3B3',
      lineHeight: 20,
    },
    heading1: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 8,
    },
    heading2: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#E0E0E0',
      marginBottom: 8,
    },
    body: {
      fontSize: 16,
      color: '#B3B3B3',
      lineHeight: 22,
      marginBottom: 12,
    },
    caption: {
      fontSize: 12,
      color: '#757575',
      marginBottom: 12,
    },
    accent: {
      fontSize: 16,
      color: '#64B5F6',
      fontWeight: 'bold',
    },
  });
  
  export default StyleDemo;
      `,
    },
    {
      id: '5',
      title: 'Navegação',
      description: 'Como implementar a navegação entre telas com React Navigation.',
      icon: 'compass-outline',
      duration: '8 min',
      content: `
  # Navegação no React Native
  
  A navegação é um aspecto fundamental em aplicativos móveis. No React Native, 
  utilizamos a biblioteca React Navigation para gerenciar a transição entre telas.
  
  ## Tipos de Navegadores:
  
  1. **Stack Navigator**: Empilha telas como uma pilha (ideal para fluxos sequenciais)
  2. **Tab Navigator**: Permite alternar entre telas com abas na parte inferior ou superior
  3. **Drawer Navigator**: Fornece um menu lateral deslizante
  4. **Material Top Tabs**: Abas superiores com estilo Material Design
  
  ## Conceitos Importantes:
  
  - **Screen**: Define uma tela no navegador
  - **Navigation Prop**: Objeto passado para cada tela para controlar a navegação
  - **Route Param**: Permite passar dados entre telas
  - **Navigation Container**: Componente raiz que gerencia o estado da navegação
  
  ## Navegação:
  
  Uma navegação bem planejada torna o aplicativo mais eficiente e reduz o consumo de recursos.
  Isso é alcançado através de:
  
  - Carregamento preguiçoso (lazy loading) de telas
  - Gerenciamento adequado do ciclo de vida dos componentes
  - Evitar renderizações desnecessárias durante transições
      `,
      codeExample: `
  // Exemplo de configuração de navegação
  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { createStackNavigator } from '@react-navigation/stack';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  
  // Importação das telas
  import WelcomeScreen from '../screens/WelcomeScreen';
  import LessonsScreen from '../screens/LessonsScreen';
  import LessonDetailScreen from '../screens/LessonDetailScreen';
  import DemoScreen from '../screens/DemoScreen';
  
  // Criação dos navegadores
  const Tab = createBottomTabNavigator();
  const LessonsStack = createStackNavigator();
  
  // Navegador de pilha para as lições
  const LessonsStackNavigator = () => {
    return (
      <LessonsStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1E1E1E',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          cardStyle: { backgroundColor: '#121212' }
        }}
      >
        <LessonsStack.Screen 
          name="Lições" 
          component={LessonsScreen} 
        />
        <LessonsStack.Screen 
          name="LessonDetail" 
          component={LessonDetailScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </LessonsStack.Navigator>
    );
  };
  
  // Navegador principal com abas
  const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Bem-vindo') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Lições') {
                iconName = focused ? 'book' : 'book-outline';
              } else if (route.name === 'Demo') {
                iconName = focused ? 'flask' : 'flask-outline';
              }
  
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#4CAF50',
            tabBarInactiveTintColor: '#757575',
            tabBarStyle: {
              backgroundColor: '#1E1E1E',
              borderTopColor: '#424242',
            },
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '500',
            }
          })}
        >
          <Tab.Screen name="Bem-vindo" component={WelcomeScreen} />
          <Tab.Screen name="Lições" component={LessonsStackNavigator} />
          <Tab.Screen name="Demo" component={DemoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigator;
      `,
    },
  ];