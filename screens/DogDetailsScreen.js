import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function DogDetailsScreen({ route, navigation }) {
  const { dog } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: dog.image }} style={styles.image} />
      <Text style={styles.name}>{dog.name}</Text>
      <Text style={styles.details}>{dog.descripcion}</Text>
      <Text style={styles.details}>Raza: {dog.raza}</Text>
      <Text style={styles.details}>Edad: {dog.age}</Text>
      <Button title="Adoptar" onPress={() => navigation.navigate('AdoptionForm', { dog })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center', backgroundColor: '#fff' },
  image: { width: 150, height: 150, borderRadius: 75, marginBottom: 10 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  details: { fontSize: 16, marginBottom: 20 },
});
