import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';

export default function App() {
  // State to store the input fields and list of users
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [users, setUsers] = useState([]);

  // Function to add a new user with details to the users list
  const addUser = () => {
    if (name.trim() && address.trim() && email.trim() && phone.trim()) {
      setUsers([...users, { name, address, email, phone }]);
      setName('');
      setAddress('');
      setEmail('');
      setPhone(''); // Clear all input fields after adding
    }
  };

  // Function to delete a user from the list
  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>User Management</Text>
      
      {/* Adding the Image component correctly */}
      <Image source={require('./assets/ROI.png')} style={styles.image} />
      
      <View style={styles.boxContainer}>
        <View style={styles.boxLarge}>
          <Text style={styles.boxText}>Users List</Text>
          {users.map((user, index) => (
            <View key={index} style={styles.userContainer}>
              <Text style={styles.userText}>Name: {user.name}</Text>
              <Text style={styles.userText}>Address: {user.address}</Text>
              <Text style={styles.userText}>Email: {user.email}</Text>
              <Text style={styles.userText}>Phone: {user.phone}</Text>
              <TouchableOpacity onPress={() => deleteUser(index)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.boxSmall}>
          <Text style={[styles.boxText, { color: 'white' }]}>Add User</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter address"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter phone"
            value={phone}
            onChangeText={setPhone}
          />
          <Button title="Add" onPress={addUser} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200, 
    height: 100, 
    alignSelf: 'center',
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxLarge: {
    width: 220,
    backgroundColor: 'rgb(148, 26, 29)',
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
  },
  boxSmall: {
    width: 150,
    backgroundColor: 'rgb(38,38,38)',
    padding: 10,
    borderRadius: 10,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  userContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 1,
  },
  userText: {
    fontSize: 14,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 8,
    width: '100%',
    backgroundColor: '#fff',
  },
  deleteButton: {
    marginTop: 5,
    backgroundColor: '#ff5252',
    borderRadius: 5,
    padding: 5,
  },
  deleteButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

// frog 

