import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route } from 'react-router-dom'
import ToDoList from '@pages/todoList/TodoList'

const App = () => (
  <BrowserRouter>
    <Route path="/" component={ToDoList} />
  </BrowserRouter>
)

export default hot(App)
