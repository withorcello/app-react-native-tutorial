// src/styles/theme.js
// Definição do tema escuro para o aplicativo educacional

const COLORS = {
    // Cores principais
    primary: '#4CAF50',     // Verde sustentável para destaque
    secondary: '#2196F3',   // Azul para elementos secundários
    accent: '#FFC107',      // Amarelo para ações ou alertas
    
    // Cores de fundo (tema escuro)
    background: {
      primary: '#121212',   // Fundo principal (quase preto)
      secondary: '#1E1E1E', // Fundo secundário (cards, elementos)
      tertiary: '#2D2D2D',  // Fundo terciário (elementos elevados)
    },
    
    // Cores de texto
    text: {
      primary: '#FFFFFF',   // Texto principal (branco)
      secondary: '#B3B3B3', // Texto secundário (cinza claro)
      disabled: '#757575',  // Texto desabilitado
      accent: '#81C784',    // Texto em destaque (verde claro)
      link: '#64B5F6',      // Links (azul claro)
    },
    
    // Cores de borda
    border: {
      light: '#424242',     // Bordas claras
      dark: '#212121',      // Bordas escuras
    },
    
    // Cores semânticas para feedback
    feedback: {
      success: '#66BB6A',   // Sucesso
      warning: '#FFA726',   // Aviso
      error: '#EF5350',     // Erro
      info: '#42A5F5',      // Informação
    }
  };
  
  const FONT = {
    size: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
      xxxl: 32,
    },
    
    family: {
      regular: 'System',
      medium: 'System-Medium',
      bold: 'System-Bold',
      light: 'System-Light',
    }
  };
  
  const SPACING = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  };
  
  const RADIUS = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    round: 999,  // Para botões circulares
  };
  
  const SHADOWS = {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 6,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
    },
  };
  
  export default {
    COLORS,
    FONT,
    SPACING,
    RADIUS,
    SHADOWS,
  };