import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Diario</Text>
      
      <Text style={styles.txt}>Data :11/03/24</Text>
      
      <Text style={styles.txt}>Palavra do dia: Codar</Text>

      <Text style={styles.txt}>Hoje é um novo dia que se inicia com muita codação....eu amo....codar...codo o dia todo sem parar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
