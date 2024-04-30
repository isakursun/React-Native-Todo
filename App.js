import React, {useState} from 'react';
import {Alert, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const activeTodos = todos.filter(item => item.isDone === false);
  console.log(activeTodos);

  //! todo ekleme fonksiyonu
  const handleAddTodo = todoName => {
    if (todoName.length === 0) {
      Alert.alert('Uyarı!', 'Lütfen input alanını doldurunuz!', [
        {text: 'Kapat'},
      ]);
      return;
    } else {
      const newTodo = {
        id: new Date().getTime(),
        todoName,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  //! todo silme fonksiyonu
  const handleDeleteTodo = deletedId => {
    console.log(deletedId);
    const filtred = todos.filter(item => item.id !== deletedId);
    setTodos(filtred);
  };

  //! todo güncelleme fonksiyonu
  const handleUpdateTodo = item => {
    const copyTodos = [...todos];
    const index = copyTodos.indexOf(item);
    const newItem = {...item, isDone: !item.isDone};
    copyTodos.splice(index, 1, newItem);
    setTodos(copyTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#163140'} />
      <Text style={styles.infoText}>Yapılacaklar: {activeTodos.length}</Text>
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
      />
      <AddTodo handleAddTodo={handleAddTodo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#163140',
    justifyContent: 'space-between',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 34,
    color: '#FFB82E',
    fontWeight: 'bold',
    letterSpacing: 1,
    borderBottomWidth: 2,
    borderColor: '#FFB82E',
    paddingBottom: 10,
  },
});

export default App;
