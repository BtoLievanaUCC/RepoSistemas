import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DemoImagen from './componentes/DemoImagen';

export default function App() {
  return (
    <View style={styles.container}>
      <DemoImagen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c02fffd',
  },
  panel1:{
    flex: 1,
    backgroundColor: '#fbef00',
  },
  panel2:{
    flex: 1,
    backgroundColor: '#6200ff',
  },
  panel3:{
    flex: 1,
    backgroundColor: '#ff0000',
  },

});
