import React, { useState } from 'react';

import './App.css';

import Button from './Button/Button';
import Input from './Input/Input';
import Text from './Text/Text';
import TodoItem from "./TodoItem/TodoItem";

import {v4 as uuidv4} from 'uuid';


interface Todo {
    text: string;
    isDone: boolean;
    id: string;
}

function App() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [todoFilter, setTodoFilter] = useState('All');
    // const [todosLeftTodo, setTodosLeftTodo] = useState<Number>(0);

    function addATodo() {
        const newTodo = {
            text: inputValue,
            isDone: false,
            id: uuidv4()
        }
        const updatedListOfTodos = todos.concat([newTodo]);
        setTodos(updatedListOfTodos);
        // countTodosLeftTodo()
    }

    function todoComplete(todoID: string) {
        const todoListWithCompletion = todos.map((todo) => {
            if(todo.id === todoID) {
                todo.isDone = !todo.isDone
            }
            return todo
        });
        // todoListWithCompletion[todoID].isDone = !todoListWithCompletion[todoID].isDone;
        setTodos(todoListWithCompletion);
        // countTodosLeftTodo()
    }

    function countTodosLeftTodo() {
        const todosThatAreNotDone = todos.filter((todo) => !todo.isDone);
        return todosThatAreNotDone.length;
    }

    function removeTodosThatAreComplete() {
        const todosThatAreNotDone = todos.filter((todo) => !todo.isDone);
        setTodos(todosThatAreNotDone);
    }

    function removeTodo(id: string) {
        const remainingTodos = todos.filter((currentTodo) => currentTodo.id !== id);
        setTodos(remainingTodos)
    }

    function getTodos() {
        if (todoFilter === 'All') {
            return todos     
        }
        else if (todoFilter === 'Active')  {
            return todos.filter((todo, id) => !todo.isDone);
        }
        else {
            return todos.filter((todo) => todo.isDone);
        }
       
    }

  return (
    <div className='App'>
      <Input onChange={(event) =>  setInputValue(event.target.value)}  placeholderText="What needs to be done?"/>
      <Button onClick={addATodo}>Add todo</Button>
        {getTodos().map((todo, index) => <TodoItem key={todo.id} todoText={todo.text} isDone={todo.isDone} onChange={() => todoComplete(todo.id)} onClick={() => removeTodo(todo.id)}/>)}
        <Text>{countTodosLeftTodo()} items left</Text>
        <Text onClick={removeTodosThatAreComplete}> Clear completed </Text>
        <span>
            <Text onClick={() => setTodoFilter('All')}>All</Text>
            <Text onClick={() => setTodoFilter('Active')}>Active</Text>
            <Text onClick={() => setTodoFilter('Completed')}>Completed</Text>
        </span>
    </div>
  );
}

export default App;
