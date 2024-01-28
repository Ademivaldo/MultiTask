import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CalcFinanceiro() {
  return (
    <SafeAreaView style={styles.container}>
       {/* Aqui sera calculadora de juros compostos, simples, financiamento, cada um em um menubottom do reactPaper */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menu: {
    flex: 1,
  }
});
