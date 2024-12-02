import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AdoptionFormScreen({ route }) {
  const { dog } = route.params;

  // Definir el estado para cada campo
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [adoptionReason, setAdoptionReason] = useState('');

  const handleSubmit = () => {
    if (!firstName || !lastName || !address || !contact || !email || !adoptionReason) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    // Mostrar alerta de confirmación
    Alert.alert('Éxito', `¡Has adoptado a ${dog.name}, tu criaturita sera enviada a tu domicilio!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Adopción</Text>
      <Text style={styles.subtitle}>Adoptando a {dog.name}</Text>

      {/* Campos del formulario */}
      <TextInput
        placeholder="Nombre(s)"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Apellido(s)"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Dirección"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="Número de contacto"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Motivo de adopción"
        value={adoptionReason}
        onChangeText={setAdoptionReason}
        style={styles.input}
      />

      <Button title="Confirmar Adopción" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 20, color: '#555' },
  input: { 
    height: 40, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    marginBottom: 12, 
    paddingLeft: 10, 
    borderRadius: 5 
  },
});
