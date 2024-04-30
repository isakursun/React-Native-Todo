import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './TodoListStyles';

export default function TodoList({todos, handleDeleteTodo, handleUpdateTodo}) {
  return (
    <FlatList
      style={styles.container}
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => handleUpdateTodo(item)}
          onLongPress={() => handleDeleteTodo(item.id)}
          style={styles.todoCard}>
          <Text
            style={[
              styles.todoTitle,
              {textDecorationLine: item.isDone ? 'line-through' : ''},
            ]}>
            {item.todoName}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}
