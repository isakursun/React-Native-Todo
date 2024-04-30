import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './AddTodoStyles';

export default function AddTodo({handleAddTodo}) {
  const [todoName, setTodoName] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Yapılacak..."
        placeholderTextColor={'#91A4AF'}
        style={styles.input}
        onChangeText={e => setTodoName(e)}
        value={todoName}
      />
      <TouchableOpacity
        onPress={() => {
          handleAddTodo(todoName), setTodoName('');
        }}
        style={[
          styles.buttonContainer,
          {backgroundColor: todoName.length > 0 ? '#FF8700' : '#A3A3A3'},
        ]}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
}
