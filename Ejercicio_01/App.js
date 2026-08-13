import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './components/Cat';
import Mensaje from './components/Mensaje';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.texto_rojo}>Esto es otro componente de texto</Text>
      <Cat />
      <Mensaje msg="Mi mensaje como propiedad" num="3000"/>  
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto_rojo:{
    color: 'red',
  },
  texto_morado:{
    color: 'purple',
  },
  
});
