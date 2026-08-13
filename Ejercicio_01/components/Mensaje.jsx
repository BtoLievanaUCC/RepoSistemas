import {View, Text, StyleSheet} from 'react-native';

export default function Mensaje(props) {
    const variableMensaje = "Esto es mi mensaje";
    const num = 1000;

    const double = n => n * 2;

    return (
        <View style={styles.container}>
            <Text style={styles.texto_morado}>{props.msg}</Text>
            <Text style={styles.numero}>{props.num}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {

  },
  texto_rojo: {
    color: 'red',
  },
  texto_morado: {
    color: 'purple',
  },
  numero: {
    color: 'white',
    backgroundColor: 'black',
  },
});