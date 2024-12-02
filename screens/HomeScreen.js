import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const pets = [
    {
      id: '1',
      raza: 'Dachshund',
      name: 'Kaylie',
      especie: 'Perro',
      image: 'https://cdn.redcanina.es/wp-content/uploads/2021/05/24110617/perro-salchicha-2.jpg',
      age: '2 años',
      descripcion: 'Kaylie es una perrita dulce y juguetona, siempre lista para una caminata. Es muy cariñosa y se lleva bien con otros perros y personas. Ideal para familias activas.'
    },
    {
      id: '2',
      raza: 'Río de Norteamérica',
      name: 'Estrella',
      especie: 'Nutria',
      image: 'https://atlasanimal.com/wp-content/uploads/2021/02/nutria-marina.jpg',
      age: '1 año',
      descripcion: 'Estrella es una nutria curiosa y juguetona, siempre buscando nuevas aventuras en el agua. Se encanta con los juegos acuáticos y es perfecta para aquellos que aman la naturaleza y los animales acuáticos.'
    },
    {
      id: '3',
      raza: 'Montes',
      name: 'Miguel',
      especie: 'Gato',
      image: 'https://th.bing.com/th/id/OIP.ZgujWm_a9TZh1lRiVEeo3gHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      age: '3 años',
      descripcion: 'Miguel es un gato tranquilo y cariñoso que disfruta de largas siestas al sol. Es muy independiente, pero siempre está dispuesto a recibir cariño cuando lo necesita. Ideal para un hogar tranquilo y amoroso.'
    },
    {
      id: '4',
      raza: 'Labrador',
      name: 'Canela',
      especie: 'Perro',
      image: 'https://th.bing.com/th/id/R.23fdd93f5a9d1337a3309c56c266a811?rik=oMt%2bq9KuT3fGeA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f9%2f90%2fLabrador_Retriever_portrait.jpg&ehk=Kse1knvMWRxxVOGeJ60Jp4w17ydmE%2fZMJ2i9%2bs977DM%3d&risl=&pid=ImgRaw&r=0',
      age: '1 años',
      descripcion: 'Canela es un Labrador lleno de energía y alegría. Le encanta correr y jugar con otros perros. Es perfecto para familias activas que busquen un compañero leal y amoroso.'
    }
  ];
  

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DogDetails', { dog: item })} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.especie}</Text>
            <Text>{item.age}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  card: { padding: 10, marginBottom: 10, backgroundColor: '#f9f9f9', borderRadius: 8, alignItems: 'center' },
  image: { width: 150, height: 150, borderRadius: 50 },
  name: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
});
