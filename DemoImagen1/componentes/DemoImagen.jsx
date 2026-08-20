import { StyleSheet, View, ImageBackground, Dimensions, Image, Text  } from 'react-native';

const DemoImagen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.fondo}
                source={require('../assets/jeremy-bishop-rqWoB4LFgmc-unsplash.jpg')}
            >
                <View style={styles.container}>
                    <Text style={styles.titulo}>Gato app</Text>
                    <Image

                    style={styles.foto}
                    source={{ uri: 'https://http.cat/203' }}
                    
                />
             </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo:{ 
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 16,
    borderWidth: 10,
    borderColor: '#8400ff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    elevation: 8,
  },
  titulo: {
    fontSize: 30,
    Color: '#fff',
    backgroundColor:  'rgb(255, 255, 255, 0.5)',
    textAlign: 'center',
    width: Dimensions.get('window').width,
  },
});

export default DemoImagen;