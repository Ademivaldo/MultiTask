import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Calc_salario_liquidoo() {
  return (
    <SafeAreaView style={styles.container}>
       
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
